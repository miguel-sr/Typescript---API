import { User } from "../../models/user";
import { IHttpRequest, IHttpResponse } from "../protocols";
import { IDeleteUserController, IDeleteUserRepository } from "./protocols";

export class DeleteUserController implements IDeleteUserController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}
  async handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<User>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return {
          statusCode: 400,
          body: "Missing user id.",
        };
      }
      const user = await this.deleteUserRepository.deleteUser(id);
      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
