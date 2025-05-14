import type { ErrorRequestHandler } from "express"

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {

    if (res.statusCode.toString().startsWith('2')) {
        res.status(500)
    }

    let data = 'Internal server error'

    if (err instanceof Error) {
        data = err.message
    }

    res.send({
        success: false,
        data
    })
}
export default errorMiddleware