import { User } from "../../models/user";
import { IHttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<IHttpResponse<User[]>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>
}
