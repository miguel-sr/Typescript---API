import { Router } from "express";
import { GetUsersController } from "../controllers/get-users/get-users";
import { MongoGetUsersRepository } from "../repositories/get-users/mongo-get-users";
const routes = Router();

routes.get("/users", async (req, res) => {
  // ==> Repository é responsável por conversar com mongoDB
  const mongoGetUsersRepository = new MongoGetUsersRepository();
  
  // ==> Pega a resposta do repository e joga no controller
  const getUsersController = new GetUsersController(mongoGetUsersRepository);
  
  const { body, statusCode } = await getUsersController.handle();
  res.send(body).status(statusCode);
});

export default routes;