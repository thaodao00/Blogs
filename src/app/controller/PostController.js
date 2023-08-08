const postModel = require('../model/post');
class PostController {
    // Get /post
    // index(req, res) {
    //     res.render('new');
    // }
    getAllPost(req, res) {
        postModel.getAllPost((err, posts) => {
            if (err) {
                console.error('Lỗi truy vấn:', err);
                return;
            }
            res.render('post', { posts: posts });
            console.log(posts);
        });
    }
    //Get /post/:slug
}
module.exports = new PostController();
