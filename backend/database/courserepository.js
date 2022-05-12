const mysql = require('../database/Connecttomydb');
// const jwt = require('jsonwebtoken');
// const jwtKey = 'my_secret_key';
// const jwtExpiryTimeInMilliSeconds = 1000 * 60 * 15; // 15 min



function getAllCourses() {
    return new Promise(async (resolve, reject) => {
       
        mysql.query(`SELECT * FROM courses `, (err, rows) => {
            if (!err) {
                console.log('The data from courses table are: \n', rows);
              

            } else {
                console.log(err);
             
                reject(err);
            }
            resolve(rows)
        })
    })
}
exports.getAllCourses = getAllCourses

// const refresh = (req, res) => {
//     console.log("going to try to refresh the token (if there is one and it is still valid");

//     let statusCode = 200 // OK
//     const token = req.cookies.token;

//     if (!token) {
//         console.log('refresh - couldnt find token in cookies');
//         statusCode = 401;
//         return statusCode;
//     }
//     // once we got here, it means we did found a token in the cookies
//     let payload;
//     try {
//         payload = jwt.verify(token, jwtKey);
//     }
//     catch (e) {
//         if (e instanceof jwt.JsonWebTokenError) {
//             console.log("refresh - jwt.JsonWebTokenError error: " + e);
//             statusCode = 401
//             return statusCode;
//         }
//         console.log('refresh - error while reading the token, but NOT a jwt.JsonWebTokenError: ', e);
//         statusCode = 400;
//         return statusCode;
//     }

//     // Once we got here it means the token was checked and is valid
//     // Now, create a new token for the current user,
//     //   with a renewed expiration time
//     console.log("refresh - yayyy we got payload: ", payload);
//     console.log("refresh - now creating NEW TOKEN with extended time");
//     const newToken = jwt.sign({ courseName: payload.courseName }, jwtKey, {
//         algorithm: 'HS256',
//         expiresIn: jwtExpiryTimeInMilliSeconds
//     })

//     // Set the new token as the users `token` cookie
//     console.log(`refresh - the new refreshed token - ${newToken}`);
//     res.cookie('token', newToken, { maxAge: jwtExpiryTimeInMilliSeconds })
//     res.thePayload = payload;
//     // once we got here it means the statusCode is still 200 (as we initialized to be)
//     return statusCode; // returning 200
// }
// module.exports.refresh = refresh

