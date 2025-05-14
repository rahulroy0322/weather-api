import 'dotenv/config'

import app from './app';
import { getCurrentWather } from './services';

const PORT = Number(process.env.PORT || process.env.port || '8000')


const server = app.listen(PORT, () => {
    console.log(`server started at: ${PORT}`);
})

const close = () => {
    console.log('stoping the server');
    server.close()
}

process.on('exit', close)
process.on('SIGINT', close)
process.on('SIGTERM', close)

getCurrentWather()