export interface IHttpResponse<T> {
  statusCode: number;
  body: T;
}

// ==> B: Body
export interface IHttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export interface IController {
  handle(httpRequest: IHttpRequest<unknown>): Promise<IHttpResponse<unknown>>;
}
