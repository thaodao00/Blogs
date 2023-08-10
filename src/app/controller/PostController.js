const postModel = require('../models/Post');
class PostController {
    getAllPost(req, res) {
        postModel.getAllPost((err, posts) => {
            if (err) {
                console.error('Lỗi truy vấn:', err);
                return;
            }
            res.render('post/post', { posts: posts });
            // res.json(posts)
            console.log(posts);
        });
    }
    getPostById(req, res) {
        const postId = req.params.id; // Giả sử id được truyền qua tham số URL
        postModel.getPostById(postId, (err, post) => {
            if (err) {
                console.error('Lỗi truy vấn:', err);
                return;
            }
            console.log(post);
            res.render('post/postDetail', { post: post });
            // res.json(post[0])
        });
    }
    createPost(req, res) {
        res.render('post/form');
    }

    storePost(req, res) {
        const newPostData = {
            name: req.body.name,
            img: req.body.img,
            created_at: new Date(),
            content: req.body.content,
        };

        postModel.createPost(newPostData, (err, results) => {
            if (err) {
                console.error('Lỗi khi thêm bài viết:', err);
                return;
            }
            console.log('Bài viết đã được thêm thành công.');
            //   res.send('Bài viết đã được thêm thành công.'); // Hoặc redirect đến trang khác
            res.redirect('/post');
            // res.json(results)
        });
    }
}
module.exports = new PostController();
