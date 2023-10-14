const OfficeServiceService = require("../services/office-service.service")

class OfficeServiceController {

    async createOfficeService(req, res, next) {
        try {
            const { id_service,id_office,workload } = req.body
            const role = await OfficeServiceService.create(id_service,id_office,workload)
            res.status(200).json(role)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const roles = await OfficeServiceService.getAll()
            return res.status(200).json(roles)
        } catch (e) {
            next(e)
        }
    }

    async getbyId(req, res, next) {
        try {
            const id = req.params.id
            const services = await OfficeServiceService.getById(id)
            return res.status(200).json(services)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new OfficeServiceController()
