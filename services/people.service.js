const { People } = require("../models/models")
const ApiError = require("../exceptions/api.error")

class PeopleService {

    async create(name_people, phone) {
        const role = await People.findOne({ where: { name_people } })
        if (role) {
            throw ApiError.BadRequest(`Такая роль уже существует: ${name_people}`)
        }

        const phones = await People.findOne({ where: { phone } })
        if (phones) {
            throw ApiError.BadRequest(`Такой номер телефона уже существует: ${phone}`)
        }

        const createdRole = await People.create({ name_people, phone })
        return createdRole
    }

    async getAll() {
        const peoples = await People.findAll()
        return peoples
    }

    async getPeopleByName(name_people) {
        if (!name_people) {
            return null
        }
        const role = await People.findOne({ where: { name_people } })
        if (!role) {
            throw ApiError.BadRequest(`Такой роли не существует: ${name_people}`)
        }
        return role
    }
}

module.exports = new PeopleService()
