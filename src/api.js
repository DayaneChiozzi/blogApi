const express = require('express');
// ...

const userRoute = require('./database/routes/userRoute');
const loginRoute = require('./database/routes/loginRoute');

const app = express();

app.use(express.json());

app.use('/', userRoute);
app.use('/', loginRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
