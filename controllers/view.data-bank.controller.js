const ViewDataService = require("../services/view.data-bank.service")

class ViewDataController {

    async getAll(req, res, next) {
        try {
            const data = await ViewDataService.getAll()
            return res.status(200).json(data)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new ViewDataController() 