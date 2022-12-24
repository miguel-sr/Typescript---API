import { User } from "../../models/user";
import { IHttpRequest, IHttpResponse } from "../protocols";
import {
  IUpdateUserController,
  IUpdateUserParams,
  IUpdateUserRepository,
} from "./protocols";

export class UpdateUserController implements IUpdateUserController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<User>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing user id.",
        };
      }

      const allowedFieldsToUpdate: (keyof IUpdateUserParams)[] = [
        "firstName",
        "lastName",
        "password",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof IUpdateUserParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return {
          statusCode: 400,
          body: "Some received field is not allowed.",
        };
      }

      const user = await this.updateUserRepository.updateUser(id, body);
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
