import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageControler } from "./controller/CreateMessageControler";
import { GetLast3MessagesController } from "./controller/GetLast3MessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";


const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticate, new CreateMessageControler().handle);

router.get("/messages/getLast3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticate, new ProfileUserController().handle);

export { router };