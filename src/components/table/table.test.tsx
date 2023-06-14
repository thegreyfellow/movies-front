import { render, screen, fireEvent } from '@testing-library/react';
import Table from './table';
import IMovie from '../../types/IMovie';

const data = [
  { Title: 'Movie 1', 'Release Date': '2020-01-01' },
  { Title: 'Movie 2', 'Release Date': '2020-01-02' },
] as IMovie[];

const columns = [
  { header: 'Title', accessorKey: 'title' },
  { header: 'Release Date', accessorKey: 'Release Date' },
];

const handleRowClick = jest.fn();

describe.only('Table', () => {
  test('renders the table with correct data', () => {
    render(
      <Table data={data} columns={columns} handleRowClick={handleRowClick} />
    );

    const rows = screen.getAllByRole('row');

    expect(rows.length).toBe(3); // Including the header row

    // Check header row
    const headerRow = rows[0];
    const headerCells = headerRow.querySelectorAll('th');

    expect(headerCells.length).toBe(2);
    expect(headerCells[0].textContent).toBe('Title');
    expect(headerCells[1].textContent).toBe('Release Date');

    // Check data rows
    const dataRows = rows.slice(1); // Exclude the header row
    expect(dataRows.length).toBe(2);

    const firstDataRow = dataRows[0];
    const firstDataCells = firstDataRow.querySelectorAll('td');

    expect(firstDataCells.length).toBe(2);
    expect(firstDataCells[0].textContent).toBe('Movie 1');
    expect(firstDataCells[1].textContent).toBe('2020-01-01');

    const secondDataRow = dataRows[1];
    const secondDataCells = secondDataRow.querySelectorAll('td');

    expect(secondDataCells.length).toBe(2);
    expect(secondDataCells[0].textContent).toBe('Movie 2');
    expect(secondDataCells[1].textContent).toBe('2020-01-02');
  });

  test('calls handleRowClick when a row is clicked', () => {
    render(
      <Table data={data} columns={columns} handleRowClick={handleRowClick} />
    );

    const dataRows = screen.getAllByRole('row').slice(1); // Exclude the header row

    fireEvent.click(dataRows[0]);

    expect(handleRowClick).toHaveBeenCalledTimes(1);
    expect(handleRowClick).toHaveBeenCalledWith(data[0]);
  });
});
