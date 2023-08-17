const postModel = require('../models/Post');
class PostController {
    // getAllPost(req, res) {
    //     postModel.getAllPost((err, posts) => {
    //         if (err) {
    //             console.error('Lỗi truy vấn:', err);
    //             return;
    //         }
    //         res.render('post/post', { posts: posts });
    //         res.json(posts)
    //         console.log(posts);
    //     });
    // }
    async getAllPost(req, res) {
        try {
            const posts = await postModel.getAllPost();
            res.json(posts);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    //   getPostById(req, res)  {
    //     const postId = req.params.id; // Giả sử id được truyền qua tham số URL
    //     postModel.getPostById(postId, (err, post) => {
    //         if (err) {
    //             console.error('Lỗi truy vấn:', err);
    //             return;
    //         }
    //         console.log(post);
    //         // res.render('post/postDetail', { post: post });
    //         res.json(post)
    //     });
    async findById(req, res) {
        const postId = req.params.id; // Giả sử id được truyền qua tham số URL

        try {
            const post = await postModel.getById(postId);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.json(post);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    createPost(req, res) {
        res.render('post/form');
    }

    // storePost(req, res) {
    //     const newPostData = {
    //         name: req.body.name,
    //         img: req.body.img,
    //         created_at: new Date(),
    //         content: req.body.content,
    //     };

    //     postModel.createPost(newPostData, (err, results) => {
    //         if (err) {
    //             console.error('Lỗi khi thêm bài viết:', err);
    //             return;
    //         }
    //         console.log('Bài viết đã được thêm thành công.');
    //         //   res.send('Bài viết đã được thêm thành công.'); // Hoặc redirect đến trang khác
    //         res.redirect('/post');
    //         // res.json(results)
    //     });
    // }
    async storePost(req, res) {
        const { name, img, content } = req.body;
        try {
            const post = await postModel.createPost(name, img, content);
            console.log(req.body);
            res.status(201).json(post);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
module.exports = new PostController();
