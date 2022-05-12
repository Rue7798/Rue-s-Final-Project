const mysql = require('./Connecttomydb')
const jwt = require('jsonwebtoken');
const jwtKey = 'my_secret_key';
const jwtExpiryTimeInMilliSeconds = 1000 * 60 * 15; // 15 min


function getAllproducts() {
    return new Promise(async (resolve, reject) => {
       
        mysql.query(`SELECT* FROM products `, (err, rows) => {
            if (!err) {
                console.log('The data from products table are: \n', rows);
              

            } else {
                console.log(err);
               
                reject(err);
            }
            resolve(rows)
        })
    })
}
exports.getAllproducts = getAllproducts

