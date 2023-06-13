export default interface IResponse {
  [key: string]:
    | string
    | number
    | boolean
    | IResponse
    | Array<IResponse>
    | null;
}
