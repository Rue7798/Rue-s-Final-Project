/* Add the CSS page */
import './NavBar.css'


/* Create function for the Navagation Bar*/
export function NavBar(props:
    {
        navItmsArr: { displayStr: string, hrefStr: string }[], logoImg: string
    }) {
    return (
        <div className="NavBar">
            <ul className="NavItemsUL">
                {props.navItmsArr.map((curr, i) => (
                    <li key={i}>
                        <a href={curr.hrefStr}>
                            {curr.displayStr}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="navLogo"><img src={props.logoImg} alt="logo" /></div>
        </div>
    )
}


