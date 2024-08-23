import { Router } from "express";
import { PostController } from "../controllers/postsController";
import { registerController } from "../controllers/registerController";
import { signinController } from "../controllers/signinController";
import { authMiddleware } from "../middlewares/auth";

const routes = Router();
const postController = new PostController();

routes.post("/register", registerController);
routes.post("/signin", signinController);

routes.post("/post", authMiddleware, postController.store);
routes.get("/post", authMiddleware, postController.index);
routes.get("/getAll", authMiddleware, postController.getAll);
routes.get("/getAllUsers", authMiddleware, postController.getAllUsers);



export { routes };
