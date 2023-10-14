const Router = require("express")
const authController = require("../controllers/auth.controller")
const { body } = require("express-validator")

const router = new Router()

router.post(
    "/registration",
    body("email").isEmail(),
    body("login").isLength({ min: 6, max: 32 }),
    body("password").isLength({ min: 6, max: 32 }),
    authController.registration
)
router.post("/login", authController.login)
router.get("/:id", authController.getById)
// router.get("/activate/:link", authController.activate)
router.get("/users", authController.getUsers)
router.post("/upload", authController.uploadImage)

module.exports = router 
