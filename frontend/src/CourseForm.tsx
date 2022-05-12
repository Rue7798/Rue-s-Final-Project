import './CourseForm.css'
import { useState } from 'react';
import axios from 'axios';

// create function for the courses form
export function CourseForm() {
    let [formInfo, setFormInfo] = useState({
        CourseName: "",
        instructorsname: "",
        StartDate: "",
        Price: "",
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
    // create for function to post the submitted form once it is filled
    function formWasSubmitted(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        axios.post("http://localhost:3001/courses/AddCourse", {
            "CourseName": `${((document.querySelector('#CourseName')) as HTMLInputElement).value}`,
            "instructorsname": `${((document.querySelector('#instructorsname')) as HTMLInputElement).value}`,
            "StartDate": `${((document.querySelector('#StartDate')) as HTMLInputElement).value}`,
            "Price": `${((document.querySelector('#Price')) as HTMLInputElement).value}`,

        })
            .then((resulte) => {
                console.log(resulte.data);
            })
    }

    return (
        <div className='bgimage'>
            <div className='Form'>
                <form id="TheForm" onSubmit={(e) => { formWasSubmitted(e) }}>
                    <div>
                        <label className="text">Enter Course Name : </label>
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value);
                            changeText(e, "CourseName")
                        }}
                            type="text" id="CourseName" name="CourseName" placeholder="Enter your Course's Name" />
                    </div>

                    <div>
                        <label className="text"> Instructor's Name : </label>
                        <input onChange={(e) => { changeText(e, "instructorsname") }}
                            type="text"
                            id="instructorsname" name="instructorsname"
                            placeholder="Enter the Instructor's Name" />
                    </div>

                    <div>
                        <label className='text'> Start Date : </label>
                        <input onChange={(e) => { changeText(e, "StartDate") }}
                            type="date" id="StartDate" name="StartDate"
                            min="2022-02-02" max={"2022-06-02"} />
                    </div>
                    <div>
                        <label className='text' htmlFor="Price">Course Price : </label>
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setSomeStr(e.target.value);
                                changeText(e, "Price")
                            }}
                            type="Price" id="Price" name="Price" placeholder="Course Price" />
                    </div>
                    <input id='submitButton' type="submit" value={"Submit"} />
                </form>
            </div>
        </div>

    )
}

