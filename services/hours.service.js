const { OpenHours } = require("../models/models")
const ApiError = require("../exceptions/api.error")

class HoursService {

    async create(
        monday_time,
        tuesday_time,
        wednesday_time,
        thursday_time,
        friday_time,
        saturday_time,
        sunday_time
        ) {
        
        const createdRole = await OpenHours.create({ 
            monday_time,
            tuesday_time,
            wednesday_time,
            thursday_time,
            friday_time,
            saturday_time,
            sunday_time })
        return createdRole
    }

    async getAll() {
        const hours = await OpenHours.findAll()
        return hours
    }

    async getIdHour(id_open_hours) {
        if (!id_open_hours) {
            return null
        }
        const hourseId = await OpenHours.findOne({ where: { id_open_hours } })
        if (!hourseId) {
            throw ApiError.BadRequest(`не существует: ${id_open_hours}`)
        }
        return hourseId
    }
}

module.exports = new HoursService()
