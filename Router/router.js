const express = require('express');
const router = express.Router();
const Questions = require('../controller/main');
router.get('/questions', Questions);

module.exports = router;
