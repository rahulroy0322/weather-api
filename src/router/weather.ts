import { Router } from "express";
import { weatherController } from "../controllers";

const weatherRouter = Router()

weatherRouter.get('/',weatherController)

export default weatherRouter