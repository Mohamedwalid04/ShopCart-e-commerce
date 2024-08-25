import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

export default function Heart() {
    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)
    let full = hover ? hover : click;
    function handleClick() {
        setClick((click) => !click)
        setHover(false)
        // if (!click) //add function
        // if (click) // remove function
    }
    function handleMouseHover() {
        setHover(true)
    }
    function handleMouseunHover() {
        setHover(false)
    }
    return (
        <span role="button" onClick={handleClick} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseunHover}>
            {full ? (<FontAwesomeIcon icon={faHeart} fixedWidth color="red" />
            ) : (
                <FontAwesomeIcon icon={heart} color="black" fixedWidth />
            )}
        </span>
    )
}
