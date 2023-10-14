const ServicService = require("../services/servic.service")

class ServicController {

    async createService(req, res, next) {
        try {
            const { name_service } = req.body
            const ser = await ServicService.create(name_service)
            res.status(200).json(ser)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const roles = await ServicService.getAll()
            return res.status(200).json(roles)
        } catch (e) {
            next(e)
        }
    }

    async getbyName(req, res, next) {
        try {
            const name_service = req.params.name
            const services = await ServicService.getServiceName(name_service)
            return res.status(200).json(services)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ServicController()
