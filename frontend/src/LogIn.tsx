import './LogIn.css';
import axios from 'axios';


export function Login() {


    async function Submit() {


        //------------sending the server address and the username------------------------
        let username = (document.getElementById("username") as HTMLInputElement).value;
        let pass = (document.getElementById("pass") as HTMLInputElement).value;

        await axios.post("http://localhost:3001/auth/login", { username: username, pass: pass })
            .then((response) => {
                console.log(response.data);
                window.location.href = "/";
            })
            .catch((err) => {
                throw err;
            });



    }





    return (
        <div className='All'>
            <div className="BG_image"></div>
            <form className="LogIn">
                <div className="LoginField">
                    <input id="username" type="text" className="LoginInput" placeholder="userName / Email" required />
                </div>
                <div className="LoginField">
                    <input id="pass" type="password" className="LoginInput" placeholder="Password" required />
                </div>
                <button type="button" onClick={Submit} className="ButtonLoginSubmit">
                    <span className="ButtonText">Log In</span>
                </button>
                <br />
                <div className='checkbox'>
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <label htmlFor="checkbox">Remember me</label>
                </div>
            </form>
            <h4 className='h4login'>?Don't have an acoount?</h4>
            <a href="./Signup" className='gotosignup'>Sign Up</a>
        </div>
    )
}

function goProfile() {
    postData('http://localhost:3001/Login' + { username: ((document.querySelector('#userName')) as HTMLInputElement).value, password: ((document.querySelector('#password')) as HTMLInputElement).value })
        .then(data => {
            console.log("login - after POST to http://localhost:3001/Login: ", data);
            localStorage.setItem("userName", data.userName);
            localStorage.setItem("password", data.password);
        });

}
async function postData(url = '', data = {}) {
    // Default options are marked with *
    let response;
    try {
        response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }
    catch (err) {
        console.log("postData - error while sending POST ", err);
        return
    }
    return response.json(); // parses JSON response into native JavaScript objects
}




