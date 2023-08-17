const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const moment = require('moment');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Sử dụng express.json() để phân tích dữ liệu JSON
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
        helpers: {
            moment: function (date) {
                return moment(date)
                    .utcOffset(7)
                    .locale('vi')
                    .format('D/M/YYYY'); // Điều chỉnh múi giờ và định dạng ngày tháng
            },
        },
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route
route(app);

app.listen(port, () => {
    console.log(`App http://localhost:${port}`);
});

// Biến toàn cục
app.locals.moment = moment;
