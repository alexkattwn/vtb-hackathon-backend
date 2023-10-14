const HoursService = require("../services/hours.service")

class HoursController {

    async createHour(req, res, next) {
        try {
            const { 
                monday_time,
                tuesday_time,
                wednesday_time,
                thursday_time,
                friday_time,
                saturday_time,
                sunday_time 
            } = req.body
            const hour = await HoursService.create(
                monday_time,
                tuesday_time,
                wednesday_time,
                thursday_time,
                friday_time,
                saturday_time,
                sunday_time)
            res.status(200).json(hour)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const roles = await HoursService.getAll()
            return res.status(200).json(roles)
        } catch (e) {
            next(e)
        }
    }

    async getbyId(req, res, next) {
        try {
            const id = req.params.id
            const idHour = await HoursService.getIdHour(id)
            return res.status(200).json(idHour)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new HoursController()
