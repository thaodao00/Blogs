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
}

module.exports = new PostModel();
