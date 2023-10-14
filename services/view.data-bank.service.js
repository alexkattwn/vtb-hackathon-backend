const { QueryTypes } = require('sequelize');
const sequelize = require("../db")
const ApiError = require("../exceptions/api.error")

class ViewDataService {

    async getAll() {
        const data = await sequelize.query("select  * from   user2.hackathon.data_bank  ", { type: QueryTypes.SELECT });
        return data
    }

}

module.exports = new ViewDataService()