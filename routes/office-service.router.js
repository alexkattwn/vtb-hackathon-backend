const Router = require("express")
const router = new Router()
const OfficeServiceController = require("../controllers/office-service.cotroller")

router.post("/", OfficeServiceController.createOfficeService)
router.get("/", OfficeServiceController.getAll)
router.get("/:id", OfficeServiceController.getbyId)

module.exports = router
