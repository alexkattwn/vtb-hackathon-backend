const { Users, Roles } = require("../models/models")
const bcrypt = require("bcryptjs")
const uuid = require("uuid")
const UserDto = require('../dtos/user.dto')
const RoleService = require('./roles.service')
const ApiError = require("../exceptions/api.error")
const TokenService = require('./token.service')
const FileService = require('./file.service')

class AuthService {

    async registration(name_role, email, login, password) {
        const candidateByEmail = await Users.findOne({ where: { email } })
        const candidateByLogin = await Users.findOne({ where: { login } })
        if (!name_role) {
            throw ApiError.BadRequest(`Такой роли нет ${name_role} `)
        }
        if (candidateByEmail) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        if (candidateByLogin) {
            throw ApiError.BadRequest(`Пользователь с таким логином ${login} уже существует`)
        }
        const hashPassword = bcrypt.hashSync(password, 7)

        const role = await RoleService.getRoleByName(name_role)
        console.log(role.id_role);

        const user = await Users.create({
            name_role,
            email,
            login,
            password: hashPassword,
            id_role: role.id_role
        })


        return user
    }

    async login(login, password) {
        const user = await Users.findOne({ where: { login } })
        if (!user) {
            throw ApiError.BadRequest(`Пользователь с таким логином ${login} не найден`)
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest("Неверный пароль")
        }

        const role = await Roles.findByPk(user.id_role)
        user.role = role

        const userDto = new UserDto(user)
        const token = TokenService.generateToken({ ...userDto })

        return { token, user: userDto }
    }

    async getAllUsers() {
        const users = await Users.findAll()
        return users
    }

    async getById(id) {
        const user = await Users.findByPk(id)
        return user
    }

    async getProfile(token) {

        const user = await TokenService.validateAccessToken(token)
        if (user) {
            return user
        }
        return null
    }

    async uploadImage(id_user, image) {
        const fileName = FileService.saveFile(image, 'user-image')
        const user = await Users.findOne({ where: { id_user } })
        if (!user) {
            throw ApiError.BadRequest(`Пользователь с id ${id_user} не найден`)
        }
        if (user.image) {
            FileService.removeFile(user.image)
        }
        user.image = fileName
        await user.save()
        return user.image
    }
}

module.exports = new AuthService()