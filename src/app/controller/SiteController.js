// const connection = require('../../config/database')
class SiteController {
    // Get /home
    index(req, res) {
        res.render('home');
    }
    //Get /search
    search(req, res) {
        res.send('news detaild');
    }
}
module.exports = new SiteController();
