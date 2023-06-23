const PortfolioController = require('../controllers/PortfolioController.js');
const Router = require('express');
const router = Router();

router.get('/', PortfolioController.getHome);

module.exports = router