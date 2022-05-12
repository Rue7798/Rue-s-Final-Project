import './Signup.css'
import { useState } from 'react';
import axios from 'axios';



export function SignUp() {
    let [formInfo, setFormInfo] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Telephone: "",
        password: "",
    })

    let [, setSomeStr] = useState("");
    function changeText(
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
        whichField: string) {

        let newObj = {
            ...formInfo,
            ...{
                [whichField]: e.target.value
            }
        };

        setFormInfo(newObj);
    }

    function formWasSubmitted(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let userName = `${((document.querySelector('#Email')) as HTMLInputElement).value}`
        //------------sending the server address and the username------------------------       
        let UrlForCheck = 'http://localhost:3001/users/' + userName;
        axios.get(UrlForCheck)
            .then(response => {
                if (response.data === false) {
                    alert("Sorry this username is busy")
                }
                else {
                    //-------if the user dose not exist using post request-------------------- 
                    axios.post("http://localhost:3001/users/AddOne", {
                        "FirstName": `${((document.querySelector('#FirstName')) as HTMLInputElement).value}`,
                        "LastName": `${((document.querySelector('#LastName')) as HTMLInputElement).value}`,
                        "Telephone": `${((document.querySelector('#Telephone')) as HTMLInputElement).value}`,
                        "Email": `${((document.querySelector('#Email')) as HTMLInputElement).value}`,
                        "password": `${((document.querySelector('#password')) as HTMLInputElement).value}`,
                    })
                        // userId	userName	password	userEmail	Telephone
                        .then((resulte) => {
                            console.log(resulte.data);
                            alert("Sucessfully Registered !!")
                        })
                }
            });
    }
    return (
        <div className='Form'>
            <form id="TheForm" onSubmit={(e) => { formWasSubmitted(e) }}>
                <div>
                    <label className="text">Enter your first name : </label>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSomeStr(e.target.value); changeText(e, "FirstName") }}
                        type="text" id="FirstName" name="FirstName" placeholder="Enter your First name" />
                </div>
                <div>
                    <label className="text">Enter your last name : </label>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSomeStr(e.target.value); changeText(e, "LastName") }}
                        type="text" id="LastName" name="LastName" placeholder="Enter your Last Name" />
                </div>
                <div>
                    <label className="text">Enter your phone number : </label>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSomeStr(e.target.value); changeText(e, "Telephone") }}
                        type="text" id="Telephone" name="Telephone" placeholder="Enter your  phone number" />
                </div>

                <div>
                    <label className="text"> Email : </label>
                    <input onChange={(e) => { changeText(e, "email") }} type="text" id="Email" name="Email" placeholder="@gmail.com" />
                </div>


                <div>
                    <label className='text' htmlFor="password">Enter a password : </label>
                    <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSomeStr(e.target.value); changeText(e, "password") }}
                        type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <div>
                    <input id='submitButton' type="submit" value={"Submit"} />
                </div>
            </form>
        </div>
    )
}


