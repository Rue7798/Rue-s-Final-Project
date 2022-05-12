/* Import the relavent components */
import './Footer.css'

/* Create function in order to add the Footer Components */
export function Footer(props:
    {
        FooterItemsArr: { displayStr: string, hrefStr: string }[],
    }) {
    return (
        <div className="footerAll">
            <ul className='FooterItemsUl'>
                {props.FooterItemsArr.map((curr, i) => (
                    <li key={i}>
                        <a href={curr.hrefStr}>
                            {curr.displayStr}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )

}



