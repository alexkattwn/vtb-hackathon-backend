const Router = require("express")
const router = new Router()
const officeController = require("../controllers/office.controller")

router.post("/", officeController.createOffice)
router.get("/", officeController.getAll)
router.get("/:name", officeController.getbyName)

module.exports = router
