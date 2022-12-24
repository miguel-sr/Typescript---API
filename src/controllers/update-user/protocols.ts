import { User } from "../../models/user";
import { IHttpRequest, IHttpResponse } from "../protocols";

export interface IUpdateUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdateUserController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<User>>
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: IUpdateUserParams): Promise<User>;
}
