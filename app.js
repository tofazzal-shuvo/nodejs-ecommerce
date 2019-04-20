
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./utility/path');
const adminRouter = require('./router/admin');
const shopRouter = require('./router/shop');
const errorRouter = require('./router/error');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(rootDir, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin',adminRouter);
app.use(shopRouter);
app.use(errorRouter.get404);

app.listen(3000);