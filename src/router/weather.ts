import { Router } from "express";
import { currentWeatherController, weatherController } from "../controllers";

const weatherRouter = Router()

weatherRouter.get('/',weatherController)
weatherRouter.get('/current',currentWeatherController)

export default weatherRouter