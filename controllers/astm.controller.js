const AstmService = require("../services/astm.service")

class AstmController {

    async createAstm(req, res, next) {
        try {
            const { 
                address,
                latitude,
                longitude,
                allDay } = req.body
            const astm = await AstmService.create(
                address,
                latitude,
                longitude,
                allDay)
            res.status(200).json(astm)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const astms = await AstmService.getAll()
            return res.status(200).json(astms)
        } catch (e) {
            next(e)
        }
    }

    async getLatitude(req, res, next) {
        try {
            const latitude = req.params.latitude
            const longitude = req.params.longitude
            const services = await AstmService.getLatitude(latitude,longitude)
            return res.status(200).json(services)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new AstmController()
