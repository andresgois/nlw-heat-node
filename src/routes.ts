import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageControler } from "./controller/CreateMessageControler";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";


const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticate, new CreateMessageControler().handle)

export { router };