import * as cheerio from 'cheerio';
import { writeFile } from 'node:fs/promises';
import { FILE } from '../config';

const url = "https://www.timeanddate.com/weather/india/cooch-behar"
const NUMBER_REGEX = /(\d+)/


const getCurrentWather = async () => {
    const $ = await cheerio.fromURL(url)

    const location = $('.headline-banner__title').text().split('in ')[1]!.split(',')[0]!
    const weather = $('.bk-focus .bk-focus__qlook > p:first').text().split('.')[0]
    const feelsLike = Number(($('.bk-focus .bk-focus__qlook > p:last').text().split('°C')[0]?.match(NUMBER_REGEX) as [string])[0])

    //const now = parseInt($('.bk-focus .h2').text())
    const minMax = $('.bk-focus br + span').text().match(NUMBER_REGEX) as [string, string]

    const [min, max] = [Number(minMax[0]), Number(minMax[1!])]

    const wind = $('.bk-focus p:has(>br+span)').text().split('Wind: ')[1]!
    const speed = wind.split(' â†')[0]!
    const direction = wind.split('from ')[1]!


    const visibility = $('.bk-focus table tbody tr:nth-child(4) td').text()
    const pressure = Number(($('.bk-focus table tbody tr:nth-child(5) td').text().match(NUMBER_REGEX) as [string])[0])
    const humidity = Number(($('.bk-focus table tbody tr:nth-child(6) td').text().match(NUMBER_REGEX) as [string])[0])
    const dewPoint = Number(($('.bk-focus table tbody tr:nth-child(7) td').text().match(NUMBER_REGEX) as [string])[0])

    await writeFile(FILE, JSON.stringify({
        location,
        weather,
        temperature: {
            feelsLike,
            min,
            max
        },
        wind: {
            direction,
            speed
        },
        visibility,
        pressure,
        humidity,
        dewPoint,
    }))
}

export {
    getCurrentWather
}