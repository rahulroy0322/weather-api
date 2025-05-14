import { asyncController } from "."

const notFoundMiddleware = asyncController((req, res) => {
    res.status(404)

    new Error(
        `"${req.url}" not found`
    )
})

export default notFoundMiddleware