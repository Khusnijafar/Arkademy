const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');


const app = express();


//app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended: false}))


// set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));