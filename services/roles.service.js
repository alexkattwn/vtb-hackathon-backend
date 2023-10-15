const { Roles } = require("../models/models")
const ApiError = require("../exceptions/api.error")

class RoleService {

    async create(name_role) {
        const role = await Roles.findOne({ where: { name_role } })
        if (role) {
            throw ApiError.BadRequest(`Такая роль уже существует: ${name_role}`)
        }
        const createdRole = await Roles.create({ name_role })
        return createdRole
    }

    async getAll() {
        const roles = await Roles.findAll()
        return roles
    }

    async getRoleByName(name_role) {
        if (!name_role) {
            return null
        }
        const role = await Roles.findOne({ where: { name_role } })
        if (!role) {
            throw ApiError.BadRequest(`Такой роли не существует: ${name_role}`)
        }
        return role
    }
}

module.exports = new RoleService()
