/* Import the relavent components */
import { useEffect } from "react";
import { AboutParagraph } from "./AboutJson";
import './About.css'



/* Add function for About page components */
export function About() {
    useEffect(() => {
        (document.querySelector('.About') as HTMLElement).innerHTML = AboutParagraph.AboutinnerHTML
    }, [])

    return (
        <div className="Bg_image">
            <div className="About">

            </div>
        </div>
    )
}
