const { Astm } = require("../models/models")
const ApiError = require("../exceptions/api.error")

class AstmService {

    async create(
        address,
        latitude,
        longitude,
        allDay
        ) {
        
        const createdAstm = await Astm.create({ 
            address,
            latitude,
            longitude,
            allDay })
        return createdAstm
    }

    async getAll() {
        const astms = await Astm.findAll()
        return astms
    }

    
    async getLatitude(latitude,longitude) {
        if (!latitude & !longitude) {
            return null
        }
        const astmObj = await Astm.findOne({ where: { latitude ,longitude} } )
        if (!hourseId) {
            throw ApiError.BadRequest(`не существует: ${latitude,longitude}`)
        }

       
        return astmObj
    }
}

module.exports = new AstmService()
