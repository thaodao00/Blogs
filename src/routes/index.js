const newsRouter = require('./news');
const siteRouter = require('./site');
const postRoute = require('./post');
const meRoute = require('./me');
function route(app) {
    app.use('/me', meRoute);
    app.use('/post', postRoute);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}
module.exports = route;
