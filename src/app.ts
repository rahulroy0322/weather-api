import express from 'express';
import apiRouter from './router';
import { errorMiddleware, notFoundMiddleware } from './middleware';

const app = express()

app.use(express.json())

app.use('/api', apiRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

export default app
