const postModel = require('../models/Post');
const { multipleMysqlToObject } = require('../../util/mysql');
class PostController {
    getAllPost(req, res) {
        postModel.getAllPost((err, posts) => {
            if (err) {
                console.error('Lỗi truy vấn:', err);
                return;
            }
            res.render('post', { posts: posts });
            // res.json(posts)
            console.log(posts);
        });
    }
}
module.exports = new PostController();
