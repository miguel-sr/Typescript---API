import { User } from "../../models/user";
import { IHttpRequest, IHttpResponse } from "../protocols";

export interface ICreateUserController {
  handle(
    httpRequest: IHttpRequest<ICreateUserParams>
  ): Promise<IHttpResponse<User>>;
}

export interface ICreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<User>;
}
