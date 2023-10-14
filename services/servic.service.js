const { Services } = require("../models/models")
const ApiError = require("../exceptions/api.error")

class ServicService {

    async create(name_service) {
        const service = await Services.findOne({ where: { name_service } })
        if (service) {
            throw ApiError.BadRequest(`Такая услуга уже существует: ${name_service}`)
        }

        const createdRole = await Services.create({ name_service })
        return createdRole
    }

    async getAll() {
        const peoples = await Services.findAll()
        return peoples
    }

    async getServiceName(name_service) {
        if (!name_service) {
            return null
        }
        const service = await Services.findOne({ where: { name_service } })
        if (!service) {
            throw ApiError.BadRequest(`Такой кафедры не существует: ${name_service}`)
        }
        return service
    }
}

module.exports = new ServicService()
