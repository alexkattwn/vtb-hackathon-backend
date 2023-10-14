const Router = require("express")
const router = new Router()
const peopleRouter = require("./people.router")
const officeRouter = require("./office.router")
const hoursRouter = require("./hours.router")
const astmRouter = require("./astm.router")
const astmServiceRouter = require("./astm-service.router")
const officeServiceRouter = require("./office-service.router")
const servicRouter = require("./servic.router")
const authRouter = require("./auth.router")
const roleRouter = require("./roles.router")
const viewDataRouter = require("./view.data-bank.router")

router.use("/peoples", peopleRouter)
router.use("/offices", officeRouter)
router.use("/hours", hoursRouter)
router.use("/astms", astmRouter)
router.use("/astmsService", astmServiceRouter)
router.use("/officeService", officeServiceRouter)
router.use("/services", servicRouter)
router.use("/auth", authRouter)
router.use("/roles", roleRouter)
router.use("/viewDataBank", viewDataRouter)

router.get("/", (req, res) => {
    res.send("Добро пожаловать в API")
});

module.exports = router
