const connection = require('../../config/database');

class PostModel {
    getAllPost(callback) {
        connection.query('SELECT * FROM post', (err, results) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, results);
        });
    }
    getPostById(id, callback) {
        const query = `SELECT * FROM post WHERE id = ${id}`;
        connection.query(query, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, results[0]);
        });
    }
    createPost(newPostData, callback) {
        const query =
            'INSERT INTO post (name, img, created_at, content) VALUES (?, ?, ?, ?)';
        const values = [
            newPostData.name,
            newPostData.img,
            newPostData.created_at,
            newPostData.content,
        ];

        connection.query(query, values, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, results);
        });
    }
    updatePost(id, postData, callback) {
        const query = `UPDATE post SET ? WHERE id = ?`;
        connection.query(query, [postData, id], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, results);
        });
    }
    deletePost(id, callback) {
        const query = `DELETE FROM post WHERE id = ?`;
        connection.query(query, [id], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, results);
        });
    }
}

module.exports = new PostModel();
