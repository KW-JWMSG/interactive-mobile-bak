const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const dotenv = require('dotenv')
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (!envFound) throw new Error("?��Couldn't find .env file");


module.exports = {
    port: parseInt(process.env.PORT, 10) || 3000,
    sock: parseInt(process.env.SOCK, 10) || 3880,
    env: process.env.NODE_ENV || 'development',
    api: {
        prefix: "/" + (process.env.API_PREFIX || 'api'),
    },
    mysql: {
        database: process.env.MYSQL_DATABASE || '',
        user: process.env.MYSQL_USER || '',
        password: process.env.MYSQL_PASSWORD || '',
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        logopt: process.env.MYSQL_LOGGING || 'off',
        dialect: "mysql",
        timezone: '+09:00',
    },
    tz: process.env.TZ || 'Asia/Seoul',
    moment: moment
};