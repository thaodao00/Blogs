const express = require('express');
const router = express.Router();

const meController = require('../app/controller/MeController');

router.get('/store-post/:id/edit', meController.show);
router.put('/store-post/:id', meController.updatePost);
router.delete('/store-post/:id', meController.deletePost);
router.get('/store-post', meController.getPostByIdUser);

module.exports = router;

// tuyến đường đọc từ trên xuống
