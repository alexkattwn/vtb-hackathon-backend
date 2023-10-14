const OfficeService = require("../services/office.service")

class OfficeController {

    async createOffice(req, res, next) {
        try {
            const { 
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
                my_branch } = req.body
            const office = await OfficeService.create(
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
                my_branch)
            res.status(200).json(office)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const offices = await OfficeService.getAll()
            return res.status(200).json(offices)
        } catch (e) {
            next(e)
        }
    }

    async getbyName(req, res, next) {
        try {
            const name_bank = req.params.name
            const offices = await OfficeService.getOfficeByName(name_bank)
            return res.status(200).json(offices)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new OfficeController()
