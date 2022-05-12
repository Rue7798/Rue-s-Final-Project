const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors');
const refreshfunc = require('./database/userrepository').refresh
const whitelist = [

    'http://localhost:3000',
    

];

const corsOptions = {

    origin: (origin, callback) => {

        //if (whitelist.indexOf(origin) !== -1 || !origin)
        if (whitelist.indexOf(origin) !== -1)
            callback(null, true);
        else
            callback('UnAuthorized!');

    }, credentials: true

}
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(function (req, res, next) {
//     console.log('Time:', Date.now())
//     console.log("inside middleware to call refresh");
//     // let x = refreshfunc(req, res);
//     // console.log("refresh returned status = ", x);
//     // res.myStatusCode = x;
//     next();
// })

app.use(require('./routes/courseroutes'));
app.use(require('./routes/usersroutes'));
app.use(require("./routes/productsroutes"))


//------------------------------------------------
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

