const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//route
const route = require('./routes');
// mysql
const connection = require('./config/database');
connection.connect();
//static file
app.use(express.static(path.join(__dirname, 'public')));
//http logger
app.use(morgan('combined'));

//template engine
//extname cấu hình lại đuôi file handlebars -> hbs
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route
route(app);

// app.get('/', (req, res) => {
//     return res.render('home')
// })

// app.get('/news', (req, res) => {
//     return res.render('news')
// })

app.listen(port, () => {
    console.log(`Example app http://localhost:${port}`);
});
