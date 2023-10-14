const AstmServiceService = require("../services/astm-service.service")

class AstmServiceController {

    async createAstmService(req, res, next) {
        try {
            const { id_service,id_astm } = req.body
            const role = await AstmServiceService.create(id_service,id_astm)
            res.status(200).json(role)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const roles = await AstmServiceService.getAll()
            return res.status(200).json(roles)
        } catch (e) {
            next(e)
        }
    }

    async getbyId(req, res, next) {
        try {
            const id = req.params.id
            const services = await AstmServiceService.getById(id)
            return res.status(200).json(services)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new AstmServiceController()
