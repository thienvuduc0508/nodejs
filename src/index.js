const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes/index');
const db = require('./config/db');
var methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'));

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// connect to DB
db.connect();
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
route(app);
app.listen(5000);
