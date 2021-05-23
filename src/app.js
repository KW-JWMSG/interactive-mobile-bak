const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config')
const path = require('path')
const cors = require('cors')

const init = async server => {
    server.use(bodyParser.json()) // support json encoded bodies
    server.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies
    server.use(cookieParser())
    server.use(cors(
        { origin: ["http://localhost:8080", "http://localhost:*"], credentials: true }
    ))
        
    var sequelize = require('./models').sequelize;   // mysql 시퀄라이저 모델
    await sequelize.sync()    //서버가 실행될때 시퀄라이저의 스키마를 DB에 적용시킨다.


    server.use('/apidoc', express.static(path.join(__dirname, 'public/apidoc')))

    const api = require("./api")
    server.use(`${config.api.prefix}`, api)
    if (config.env !== 'development') server.use(Sentry.Handlers.errorHandler());

    server.get('/', (req, res) => {
        res.json({ name:"JWMSG_통합_API_프레임워크", version: '0.0.1' })
    })

    server.use((err, req, res, next) => {
        if (config.env !== 'development') Sentry.captureException(err)
        res
            .status(500)
            .json({
                message:
                    "예상치 못한 오류가 발생했습니다. 확인 후 빠르게 해결하겠습니다! 🙇‍",
            })
            .end()

        next(err)
    })

    return server;
}
const app = express();
app.me = init(app);
app.listen(config.port, () => {
    console.log(`> Express Ready on http://localhost:${config.port}`)
})


module.exports = app;