import { IHttpResponse } from "./protocols";

export const ok = <T>(body: any): IHttpResponse<T> => {
  return {
    statusCode: 200,
    body,
  };
};

export const created = <T>(body: any): IHttpResponse<T> => {
  return {
    statusCode: 201,
    body,
  };
};

export const badRequest = (message: string): IHttpResponse<string> => {
  return {
    statusCode: 400,
    body: message,
  };
};

export const serverError = (): IHttpResponse<string> => {
  return {
    statusCode: 500,
    body: "Something went wrong.",
  };
};

