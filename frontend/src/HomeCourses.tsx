/* Create function for the Home page Courses */
export function HomeCourses(props: { CoursesURL: { src: string, title: string }[] }) {
    return (
        <div>
            {props.CoursesURL.map((curr, i) => (
                <img key={i} src={curr.src} alt={curr.title} />



            ))}

        </div>
    )
}
