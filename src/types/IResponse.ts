import IMovie from './IMovie';
import IError from './IError';

type IResponse = Array<IMovie> | IMovie | IError;

export default IResponse;
