import validator from "validator";
import { User } from "../../models/user";
import { IHttpRequest, IHttpResponse } from "../protocols";
import {
  ICreateUserController,
  ICreateUserParams,
  ICreateUserRepository,
} from "./protocols";

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: IHttpRequest<ICreateUserParams>
  ): Promise<IHttpResponse<User>> {
    try {
      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateUserParams]?.length) {
          return {
            statusCode: 400,
            body: `Field ${field} is required.`,
          };
        }
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email);
      if (!emailIsValid) {
        return {
          statusCode: 400,
          body: "E-mail is invalid.",
        };
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );
      return {
        statusCode: 201,
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
