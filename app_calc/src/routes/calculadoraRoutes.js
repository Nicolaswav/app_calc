const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.post('/calculate', calculadoraController.calculate);

module.exports = router;
