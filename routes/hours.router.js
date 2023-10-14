const Router = require("express")
const router = new Router()
const hoursController = require("../controllers/hours.controller")

router.post("/", hoursController.createHour)
router.get("/", hoursController.getAll)
router.get("/:id", hoursController.getbyId)

module.exports = router
