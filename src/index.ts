import pino from 'pino';
import * as _ from 'lodash';
import * as moment from 'moment';
const logger = pino({
    name: 'app-name',
    level: 'debug'
});
const helloWorld = 'What a wonderful world. 🎉';
for (let part of _.chunk(helloWorld.split(' '), 2)) {
    logger.info(part.join(' '));
}
logger.info(moment.default().toString());
