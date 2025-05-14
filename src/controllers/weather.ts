import { readFile } from "node:fs/promises"
import { asyncController } from "../middleware"
import { FILE } from "../config"
import { getCurrentWather } from "../services"

const weatherController = asyncController(async (_req, res) => {
    const file = JSON.parse(
        (await readFile(
            FILE
        )).toString()
    )
    res.json(file)
})

const currentWeatherController = asyncController(async (_req, res) => {
   await getCurrentWather()

    const file = JSON.parse(
        (await readFile(
            FILE
        )).toString()
    )
    res.json(file)
})


export { weatherController,currentWeatherController }