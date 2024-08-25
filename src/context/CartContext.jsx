import { createContext, useContext, useState } from "react";

const cart = createContext()


function CartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [Cart, setCart] = useState([])

    return (
        <cart.Provider value={
            {
                isOpen,
                setIsOpen,
                Cart,
                setCart,
            }
        }>
            {children}
        </cart.Provider>
    )
}

function useCart() {
    const context = useContext(cart)
    if (context === undefined) {
        throw new Error("you used the context ouside the CartProvider")
    }
    return context
}

export { CartProvider, useCart }