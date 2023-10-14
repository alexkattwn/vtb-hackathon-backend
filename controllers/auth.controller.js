const AuthService = require("../services/auth.service")
const { validationResult } = require("express-validator")
const ApiError = require("../exceptions/api.error")

class AuthController {

    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(
                    ApiError.BadRequest("Ошибка при валидации", errors.array())
                )
            }
            const { name_role, email, login, password } = req.body
            const userData = await AuthService.registration(name_role, email, login, password)
            return res.status(200).json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const { login, password } = req.body
            const userData = await AuthService.login(login, password)
            return res.status(200).json(userData)
        } catch (e) {
            next(e)
        }
    }

    // async activate(req, res, next) {
    //     try {
    //         const activation_link = req.params.link
    //         await AuthService.activate(activation_link)
    //         return res.redirect(process.env.CLIENT_URL)
    //     } catch (e) {
    //         next(e)
    //     }
    // }

    async getUsers(req, res, next) {
        try {
            const users = await AuthService.getAllUsers()
            return res.json(users)
        } catch (e) {
            next(e)
        }
    }

    async getById(req, res, next) {
        try {
            const id = req.params.id
            const user = await AuthService.getById(id)
            return res.json(user)
        } catch (e) {
            next(e)
        }
    }

    async uploadImage(req, res, next) {
        try {
            const { id_user } = req.body
            const user = await AuthService.uploadImage(id_user, req.files.image)
            return res.status(200).json(user)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new AuthController()
