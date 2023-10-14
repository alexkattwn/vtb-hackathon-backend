const Router = require("express")
const router = new Router()
const AstmServiceController = require("../controllers/astm-service.controller")

router.post("/", AstmServiceController.createAstmService)
router.get("/", AstmServiceController.getAll)
router.get("/:id", AstmServiceController.getbyId)

module.exports = router
