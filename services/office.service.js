const { DataOffices } = require("../models/models")
const ApiError = require("../exceptions/api.error")

class OfficeService {

    async create(
        sale_point_name,
        address,
        status,
        id_open_hours,
        rko,
        id_open_hours_individual,
        office_type,
        sale_point_format,
        suo_availability,
        has_ramp,
        latitude,
        longitude,
        metro_station,
        distance,
        kep,
        my_branch
    ) {
        // const pointName = await DataOffices.findOne({ where: { sale_point_name } })
        // if (pointName) {
        //     throw ApiError.BadRequest(`Такой банк уже существует: ${sale_point_name}`)
        // }

        // const addres = await DataOffices.findOne({ where: { address } })
        // if (addres) {
        //     throw ApiError.BadRequest(`Такой адрес уже существует: ${address}`)
        // }

        const createdRole = await DataOffices.create({
            sale_point_name,
            address,
            status,
            id_open_hours,
            rko,
            id_open_hours_individual,
            office_type,
            sale_point_format,
            suo_availability,
            has_ramp,
            latitude,
            longitude,
            metro_station,
            distance,
            kep,
            my_branch
        })
        return createdRole
    }

    async getAll() {
        const offices = await DataOffices.findAll()
        return offices
    }

    async getOfficeByName(sale_point_name) {
        if (!sale_point_name) {
            return null
        }
        const name = await DataOffices.findOne({ where: { sale_point_name } })
        if (!name) {
            throw ApiError.BadRequest(`Такого офиса не существует: ${sale_point_name}`)
        }
        return name
    }
}

module.exports = new OfficeService()
