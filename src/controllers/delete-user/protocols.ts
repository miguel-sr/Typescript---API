import { User } from "../../models/user";
import { IHttpRequest, IHttpResponse } from "../protocols";

export interface IDeleteUserController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<User>>;
}

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<User>;
}
