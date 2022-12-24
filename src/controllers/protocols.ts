export interface IHttpResponse<T> {
  statusCode: number;
  body: T | string;
}

// ==> B: Body
export interface IHttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}
