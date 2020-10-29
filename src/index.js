const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes/index');

const app = express();
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route
route(app);

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.listen(5000);
