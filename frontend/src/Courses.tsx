

import axios from 'axios';
import { useEffect, useState } from 'react';
import './Courses.css';
import { BiShekel } from "react-icons/bi"



export function Courses() {
    const [courses, setcourses] = useState([{
        productId: "",
        courseName: "",
        coursePic: "",
        discreption: "",
        productPrice: "",
        startDate: "",
    }]);





    // use get request to post the courses from the DB(get request)
    useEffect(() => {
        axios.get('http://localhost:3001/getallcourses')
            .then(courses => {
                setcourses(courses.data);
                console.log(courses);
            });

    }, []);

    return (
        <div className='courses'>
            {courses && <div>
                {courses.map((curr, i) => {
                    console.log(curr);
                    return <Coursescard coursePrice={''} courseId={'courseId'} key={i} {...curr}></Coursescard>;


                })}

            </div>}
        </div>
    );
}



const Coursescard = (props: {

    courseId: string,
    courseName: string,
    coursePic: string,
    discreption: string,
    coursePrice: string,
    startDate: string,

}) => {


    return (
        <div className='Coursescard'>
            <ul>
                <li style={{ fontWeight: "bold" }} className='courseName'>  {props.courseName} </li>
                <li> <img src={props.coursePic} alt={props.courseName} /></li>
                <li style={{ fontWeight: "bold" }} className='discreption'>  {props.discreption} </li>
                <li style={{ fontWeight: "bold" }} className='startDate'>  {props.startDate} </li>
                <li style={{ fontWeight: "bold" }} className='coursePrice'> <BiShekel></BiShekel>{props.coursePrice}</li>


/* <button id={props.courseId} className="submitproductbtn" type="button" onClick={async (e) => {

      console.log("Running");
      await axios.get('http://localhost:3001/getallcourses')
          .then(courses => {

              for (let i = 0; i < courses.data.length; i++) {

                  if (parseInt((e.target as Element).id) === parseInt(courses.data[i].courseId)) {

                      let data = {
                          courseId: courses.data[i].courseId,
                          courseName: courses.data[i].courseName,
                          coursePic: courses.data[i].coursePic,
                          discreption: courses.data[i].discreption,
                          productPrice: (document.getElementById('p-' + courses.data[i].courseId) as HTMLInputElement).value
                      } 

                  
                      console.log(data);
                      alert("signed up for course :" );



                  }

              }

          });

    



  }}> sign up to course </button>

</ul>
</div>
)
}


