const Router = require("express")
const router = new Router()
const servicController = require("../controllers/servic.controller")

router.post("/", servicController.createService)
router.get("/", servicController.getAll)
router.get("/:name", servicController.getbyName)

module.exports = router
