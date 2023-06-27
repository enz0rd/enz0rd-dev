const path = require('path');

class PortfolioController {
    static async getHome(req,res) {
        try {
            res.sendFile(path.join(__dirname, '../public/views/','index.html'))
        } catch (error) {
            const error_message = []
            error_message.push({
                title: "Error",
                message: error.message
            })
            res.render('/public/views/error', { data: error_message });
        }
    }
}

module.exports = PortfolioController