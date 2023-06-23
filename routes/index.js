const portfolio = require('./portfolioRoutes.js');

module.exports = app => {
    app.use(portfolio)
    app.set('view engine', 'ejs');
}