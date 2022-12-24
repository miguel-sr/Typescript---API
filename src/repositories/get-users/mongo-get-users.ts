import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

// ==> Repository Pattern
export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Miguel",
        lastName: "Ramos",
        email: "miguelsramos458@gmail.com",
        password: "123",
      },
    ];
  }
}

/* ==> Se necessária mudança de BD, é possível apenas criar outro repository 
que continue respeitando a interface, mesmo usando outro banco de dados */
// export class PostgreeGetUsersRepository implements IGetUsersRepository {
//   async getUsers(): Promise<User[]> {
//     return [
//       {
//         firstName: "Miguel",
//         lastName: "Ramos",
//         email: "teste@gmail.com",
//         password: "123",
//       },
//     ];
//   }
// }
