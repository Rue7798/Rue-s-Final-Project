const mysql = require('./Connecttomydb')
const jwt = require('jsonwebtoken');
const jwtKey = 'my_secret_key';
const jwtExpiryTimeInMilliSeconds = 1000 * 60 * 15; // 15 min

//-------------------------------------------------------------<<<< Users >>>>-------------------------------------------------------------------

function CheckAccountByUserName(userName) {

    return new Promise(async (resolve, reject) => {
       
        mysql.query(`SELECT * FROM users WHERE userName ='${userName}'`, (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows)
               
            } else {
                console.log(err)
               
                reject(err);
            }
            if (Object.keys(rows).length > 0) {
                console.log(rows, "from line 25")
                resolve(false)
            }
            else {
                console.log(rows, " from line 30")
                resolve(true)
            }
        })
    })
}
exports.CheckAccountByUserName = CheckAccountByUserName


function AddNewUser(req) {
      console.log(req.body);
    return new Promise(async (resolve, reject) => {
          

        mysql.query('INSERT INTO users (userName,userEmail,Telephone,password) VALUES(?,?,?,?)', [req.FirstName, req.Email, req.Telephone, req.password], (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                   resolve(true);
            } else {
                console.log(err);
               
                reject(err);
                resolve(false);
            }
        })
    })
}
exports.AddNewUser = AddNewUser



function deletAccountByuserName(userName) {
    return new Promise(async (resolve, reject) => {
       
        mysql.query(`DELETE FROM users WHERE userName = '${userName}'`, (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                
            } else {
                console.log(err);
             
                reject(err);
            }
            if (rows.affectedRows > 0) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        })
    })
}
exports.deletAccountByuserName = deletAccountByuserName
//--------------------------------------------------------------------
function myCheckUserPasswordService(userName, password) {
    return new Promise(async (resolve, reject) => {
        try {
            let query=`SELECT * FROM users WHERE ( userEmail ='${userName}' OR  userName='${userName}') and password='${password}' `; 
            console.log(query);
            mysql.query(query, (err, rows) => {
                 console.log(rows);
                if (err) {
                    console.log("there was an error while sending query to"
                        + " db to get the customer details by userName and password", err)
                  
                    reject(err);
                } else {
                    console.log("myCheckUserPasswordService - returned rows ", rows)
                  
                
                if (rows.length > 0) {
                    console.log('Found data for the provided username and password: ', rows)
                    resolve(true)
                }
                else {
                    resolve(false)
                }
            }
            })
        }
        catch (err) {
            reject("myCheckUserPasswordService error: ", err)
        }
    })
}
exports.myCheckUserPasswordService = myCheckUserPasswordService
//-----------------------------------------------------------------------
//     (only if username, password match our records)

const signIn = async (req, res) => {
    // Get credentials (username and password) from JSON body
    //   and use our service to check if they are OK
     console.log(req.body);
    const { username, pass } = req.body;
    const isPassOK = await myCheckUserPasswordService(username, pass);
    if (!isPassOK) {
        // return 401 error if authentication not OK  
        return res.status(401).send("username or password didnt match the info we have");
    }
    // once we got here, we know that a user with the provided uname and pass exists in the db,
    //          lets get a cart for him 
    // let cartnum
    // try {
    //     console.log("signIn - going to try to get a cart for the user");
    //     let resultFromGetCartForTheUser = await getCartForTheUser(username);
    //     cartnum = resultFromGetCartForTheUser;
    // }
    // catch (err) {
    //     console.log(`signIn - while we were waiting for getCartForTheUser there was an error:  ${err}`);
    //     return res.status(500).send("error getting a cart");
    // }

    // Create a new token with the username in the payload
    //  which expires X seconds after issue
    let token;
    try {
        let X = jwtExpiryTimeInMilliSeconds;
        token = jwt.sign({ username }, jwtKey, {
            algorithm: 'HS256',
            expiresIn: X
        })
    }
    catch (err) {
        console.log("signin - error while creating the new token: ", err);
    }
    console.log('signin - successfully creaeted token:', token);

    // set a cookie named 'token' with value = the token string we created above, 
    //   with max age 
    // here, the max age is in milliseconds, so we multiply by 1000
    res.cookie('token', token, { maxAge: jwtExpiryTimeInMilliSeconds })
    res.send({ username });
    
}   
exports.signIn = signIn
//--------------------------------------------------
//--------------------------

const refresh = (req, res) => {
    console.log("going to try to refresh the token (if there is one and it is still valid");

    let statusCode = 200 // OK
    const token = req.cookies.token;

    if (!token) {
        console.log('refresh - couldnt find token in cookies');
        statusCode = 401;
        return statusCode;
    }
    // once we got here, it means we did found a token in the cookies
    let payload;
    try {
        payload = jwt.verify(token, jwtKey);
    }
    catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            console.log("refresh - jwt.JsonWebTokenError error: " + e);
            statusCode = 401
            return statusCode;
        }
        console.log('refresh - error while reading the token, but NOT a jwt.JsonWebTokenError: ', e);
        statusCode = 400;
        return statusCode;
    }

    // Once we got here it means the token was checked and is valid
    // Now, create a new token for the current user, 
    //   with a renewed expiration time
    console.log("refresh - yayyy we got payload: ", payload);
    console.log("refresh - now creating NEW TOKEN with extended time");
    const newToken = jwt.sign({ userName: payload.userName }, jwtKey, {
        algorithm: 'HS256',
        expiresIn: jwtExpiryTimeInMilliSeconds
    })

    // Set the new token as the users `token` cookie
    console.log(`refresh - the new refreshed token - ${newToken}`);
    res.cookie('token', newToken, { maxAge: jwtExpiryTimeInMilliSeconds })
    res.thePayload = payload;
    // once we got here it means the statusCode is still 200 (as we initialized to be)
    return statusCode; // returning 200
}
module.exports.refresh = refresh


