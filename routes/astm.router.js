const Router = require("express")
const router = new Router()
const astmController = require("../controllers/astm.controller")

router.post("/", astmController.createAstm)
router.get("/", astmController.getAll)
router.get("/:latitude&longitude", astmController.getLatitude)

module.exports = router
