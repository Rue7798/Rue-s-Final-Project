/* Import the relavent components */
import { useEffect } from "react";
import { HomeParagraph } from "./HomeJson";
import './Home.css';
import { HomeCourses } from "./HomeCourses";
import { myHomeCoursesArr } from "./HomeCoursesArr";



/* Create function for Home Page with Background image and array of courses */
export function Home() {
    useEffect(() => {
        (document.querySelector('.bg_image') as HTMLElement).innerHTML = HomeParagraph.HomeinnerHTML
    }, [])

    return (
        <div className="all">
            <div className="bg_image"> </div>
            <div className="Courses">
                <HomeCourses CoursesURL={myHomeCoursesArr} />



            </div>
        </div>
    )
}


