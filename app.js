const express = require('express');


const expressLayouts = require('express-ejs-layouts')

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs')

// routes 
app.use('/' , require('./routes/index'))

app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on port ${PORT}`));