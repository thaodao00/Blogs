const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');

router.use('/', siteController.index);

module.exports = router;

// tuyến đường đọc từ trên xuống
