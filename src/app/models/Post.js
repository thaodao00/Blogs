const connection = require('../../config/database');

class PostModel {
    constructor(id, name, img, content) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.content = content;
    }
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
