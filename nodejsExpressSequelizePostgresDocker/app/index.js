const express = require('express'); //initialize express
const sequelize = require('./utils/database'); //import db
const Employee = require('./models/employees.model') //import model
cors = require('cors');
const app = express();
app.use(express.json()); //body parser json format
app.use(express.urlencoded({extended: true})); //url encoded

//setting headers
app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
})
//adding cors 
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))

//http://localhost:3001/api/employee
app.use('/api', require('./routes/dev.routes'));
app.use('/api', require('./routes/employees.routes'));

;(async () => {
    try {
        //if true -> db employee will be created
        await sequelize.sync(
            { force: false }
        )

        console.log('test');
        app.listen(process.env.EXTERNAL_PORT || 3001);
    } catch (error) {
        console.error(error);
    }
})();

