const router = require("express-promise-router")();
const models = require("../models")

router.get('/', async (req, res, next) => {
    res.json({ name: "JWMSG_통합_API", version: '0.0.1' })
})

router.get('/sockdam', async (req, res, next) => {
    let sockdam = await models.DB_NACHIHATEO_QUS.findAll({order: models.Sequelize.fn('random'), limit:1 })
    res.json(sockdam)
})

router.put('/sockdam', async (req, res, next) => {
    const {data} = req.body
    let sockdam = await models.DB_NACHIHATEO_QUS.create({
        message:data
    })
    res.json(sockdam)
})
// router.use('/pms', require('./pms'))


module.exports = router