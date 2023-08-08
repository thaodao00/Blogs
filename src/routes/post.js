const express = require('express');
const router = express.Router();

const postController = require('../app/controller/PostController');

router.get('/', postController.getAllPost);

module.exports = router;

// tuyến đường đọc từ trên xuống
