const connection = require('../../config/database');

class PostModel {
    // getAllPost(callback) {
    //     connection.query('SELECT * FROM post', (err, results) => {
    //         if (err) {
    //             return callback(err, null);
    //         }
    //         return callback(null, results);
    //     });
    // }
    async getAllPost() {
        try {
            const [posts] = await connection.query('SELECT * FROM post');
            return posts;
        } catch (error) {
            throw error;
        }
    }
    // getPostById(id, callback) {
    //     const query = `SELECT * FROM post WHERE id = ${id}`;
    //     connection.query(query, (err, results) => {
    //         if (err) {
    //             return callback(err, null);
    //         }
    //         return callback(null, results[0]);
    //     });
    // }
    async getById(id) {
        const query = `SELECT * FROM post WHERE id = ${id}`;
        try {
            const [results] = await connection.query(query);
            return results[0];
        } catch (error) {
            throw error;
        }
    }

    // createPost(newPostData, callback) {
    //     const query =
    //         'INSERT INTO post (name, img, created_at, content) VALUES (?, ?, ?, ?)';
    //     const values = [
    //         newPostData.name,
    //         newPostData.img,
    //         newPostData.created_at,
    //         newPostData.content,
    //     ];

    //     connection.query(query, values, (err, results) => {
    //         if (err) {
    //             return callback(err, null);
    //         }
    //         return callback(null, results);
    //     });
    // }
    async createPost(name, img, content) {
        const query = 'INSERT INTO post (name, img, content) VALUES (?,?,?)';
        const values = [name, img, content];
        try {
            const [results] = await connection.query(query, values);
            return results;
        } catch (error) {
            console.log(error);
            throw error;
        }
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
