const newsRouter = require('./news');
const siteRouter = require('./site');
const postRoute = require('./post');
function route(app) {
    app.use('/post', postRoute);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}
module.exports = route;
