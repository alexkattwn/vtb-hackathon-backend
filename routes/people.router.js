const Router = require("express")
const router = new Router()
const peopleController = require("../controllers/people.controller")

router.post("/", peopleController.createPeople)
router.get("/", peopleController.getAll)
router.get("/:name", peopleController.getbyName)

module.exports = router
