import { useEffect } from "react"
import { useCart } from "../context/CartContext"

export default function Screen() {
    const styles = {
        width: "100%",
        height: "150vh",
        backgroundColor: "black",
        opacity: "0.8",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "999999999999"
    }
    const { setIsOpen } = useCart()
    useEffect(() => {
        document.querySelector(".screen").addEventListener("click", () => {
            setIsOpen(false)
        })
    }, [setIsOpen])
    return (
        <div className="screen" style={styles}>

        </div>
    )
}
