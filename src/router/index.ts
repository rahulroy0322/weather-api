import { Router } from "express";
import weatherRouter from "./weather";

const apiRouter = Router()

apiRouter.use('/v1/weather',weatherRouter)

export default apiRouter