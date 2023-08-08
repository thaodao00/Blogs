const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//route
const route = require('./routes');

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

app.listen(port, () => {
    console.log(`App http://localhost:${port}`);
});
