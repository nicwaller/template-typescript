import pino from 'pino';
const logger = pino({
    name: 'app-name',
    level: 'debug'
});
const helloWorld: string = 'Hello World';
logger.info(helloWorld);
