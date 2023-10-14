const PeopleService = require("../services/people.service")

class PeopleController {

    async createPeople(req, res, next) {
        try {
            const { name_people,phone } = req.body
            const role = await PeopleService.create(name_people,phone)
            res.status(200).json(role)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const roles = await PeopleService.getAll()
            return res.status(200).json(roles)
        } catch (e) {
            next(e)
        }
    }

    async getbyName(req, res, next) {
        try {
            const name_service = req.params.name
            const services = await PeopleService.getPeopleByName(name_service)
            return res.status(200).json(services)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new PeopleController()
