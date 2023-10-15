const { Office_Services } = require("../models/models")
const { DataOffices } = require("../models/models")
const { Services } = require("../models/models")
const ApiError = require("../exceptions/api.error")

class OfficeServicesService {

    async create(id_service, id_office, workload) {
        console.log(id_service, id_office, workload);

        const idOffice = await DataOffices.findOne({ where: { id_data_offices: id_office } })
        if (!idOffice) {
            throw ApiError.BadRequest(`ТакОго id не существует: ${id_office}`)
        }

        const idService = await Services.findOne({ where: { id_service: id_service } })
        if (!idService) {
            throw ApiError.BadRequest(`ТакОго id не существует: ${id_service}`)
        }

        const createdOfficeServ = await Office_Services.create({ id_service, id_office, workload })
        return createdOfficeServ
    }

    async getAll() {
        const officeServ = await Office_Services.findAll()
        return officeServ
    }

    async getById(id_office_services) {
        if (!id_office_services) {
            return null
        }
        const role = await Office_Services.findOne({ where: { id_office_services } })
        if (!role) {
            throw ApiError.BadRequest(`Такого id не существует: ${id_office_services}`)
        }
        return role
    }
}

module.exports = new OfficeServicesService()
