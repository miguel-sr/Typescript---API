export interface IHttpResponse<T> {
  statusCode: number;
  body: T | string;
}
