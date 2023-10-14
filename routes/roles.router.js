const Router = require("express")
const router = new Router()
const roleController = require("../controllers/roles.controller")

router.post("/", roleController.createRole)
router.get("/", roleController.getAll)

module.exports = router
