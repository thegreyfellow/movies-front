import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import './table.css';

import IMovie from '../../types/IMovie';

interface TableProps {
  data: Array<IMovie>;
}

const columnHelper = createColumnHelper<IMovie>();

const columns = [
  columnHelper.accessor('Title', {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('Release Date', {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('Director', {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('Rotten Tomatoes Rating', {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('IMDB Rating', {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('IMDB Votes', {
    cell: info => info.getValue(),
  }),
];

const Table: React.FC<TableProps> = ({ data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  );
};

export default Table;
