const express = require('express');
const router = express.Router();

const postController = require('../app/controller/PostController');

router.get('/create', postController.createPost);
router.post('/store', postController.storePost);
router.get('/:id', postController.getPostById);
router.get('/', postController.getAllPost);

module.exports = router;

// tuyến đường đọc từ trên xuống
