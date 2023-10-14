const RoleService = require("../services/roles.service")

class RoleController {

    async createRole(req, res, next) {
        try {
            const { name_role } = req.body
            const role = await RoleService.create(name_role)
            res.status(200).json(role)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const roles = await RoleService.getAll()
            return res.status(200).json(roles)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new RoleController()
