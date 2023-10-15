const { Astm_Services } = require("../models/models")
const ApiError = require("../exceptions/api.error")

class AstmServicesService {

    async create(id_service, id_astm) {
        if (!id_service && !id_astm) {
            return null
        }
        const createdAstmServ = await Astm_Services.create({ id_service, id_astm })
        return createdAstmServ
    }

    async getAll() {
        const astmServ = await Astm_Services.findAll()
        return astmServ
    }

    async getById(id_astm_services) {
        if (!id_astm_services) {
            return null
        }
        const role = await Astm_Services.findOne({ where: { id_astm_services } })
        if (!role) {
            throw ApiError.BadRequest(`Такого id не существует: ${id_astm_services}`)
        }
        return role
    }
}

module.exports = new AstmServicesService()
