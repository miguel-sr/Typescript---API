import { Router } from "express";
import { CreateUserController } from "../controllers/create-user/create-user";
import { GetUsersController } from "../controllers/get-users/get-users";
import { UpdateUserController } from "../controllers/update-user/update-user";
import { MongoCreateUserRepository } from "../repositories/create-user/mongo-create-user";
import { MongoGetUsersRepository } from "../repositories/get-users/mongo-get-users";
import { MongoUpdateUserRepository } from "../repositories/update-user/mongo-update-user";
const routes = Router();

routes.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();
  const getUsersController = new GetUsersController(mongoGetUsersRepository);
  const { body, statusCode } = await getUsersController.handle();
  res.status(statusCode).send(body);
});

routes.post("/users", async (req, res) => {
  const mongoCreateUsersRepository = new MongoCreateUserRepository();
  const createUsersController = new CreateUserController(
    mongoCreateUsersRepository
  );
  const { body, statusCode } = await createUsersController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/users/:id", async (req, res) => {
  const mongoUpdateUserRepository = new MongoUpdateUserRepository();
  const updateUserController = new UpdateUserController(
    mongoUpdateUserRepository
  );
  const { body, statusCode } = await updateUserController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
