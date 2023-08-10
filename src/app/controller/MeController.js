const postModel = require('../models/Post');
class MeController {
    getPostByIdUser(req, res) {
        postModel.getAllPost((err, posts) => {
            if (err) {
                console.error('Lỗi truy vấn:', err);
                return;
            }
            res.render('me/store-post', { posts: posts });
            // res.json(posts)
            console.log(posts);
        });
    }

    show(req, res) {
        const postId = req.params.id; // Giả sử id được truyền qua tham số URL
        postModel.getPostById(postId, (err, post) => {
            if (err) {
                console.error('Lỗi truy vấn:', err);
                return;
            }
            console.log(post);
            res.render('me/edit-post', { post: post });
            // res.json(post[0])
        });
    }
    updatePost(req, res) {
        const postId = req.params.id;
        const updatedPostData = {
            name: req.body.name,
            content: req.body.content,
            created_at: new Date(),
        };

        postModel.updatePost(postId, updatedPostData, (err, results) => {
            if (err) {
                console.error('Lỗi khi sửa bài viết:', err);
                return;
            }
            // res.redirect("/post"); // Hoặc điều hướng đến trang khác
            res.json(req.body);
        });
    }
    deletePost(req, res) {
        const postId = req.params.id;

        postModel.deletePost(postId, (err, results) => {
            if (err) {
                console.error('Lỗi khi xóa bài viết:', err);
                return;
            }
            res.redirect('/me/store-post'); // Hoặc điều hướng đến trang khác
            // res.send('Thành công')
        });
    }
}
module.exports = new MeController();
