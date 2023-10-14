const Router = require("express")
const router = new Router()
const viewDataController = require("../controllers/view.data-bank.controller")

router.get("/", viewDataController.getAll)

module.exports = router