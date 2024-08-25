import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Screen from "./components/Screen";
import Shop from "./pages/Shop";
import { useCart } from "./context/CartContext";
import { useEffect } from "react";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const { isOpen } = useCart()
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
      overflow: hidden;
      `
    }
    return () => {
      document.body.style.cssText = `
      overflow: unset;
      `
    }
  }, [isOpen])
  return (
    <>
      {isOpen && <Screen />}
      {isOpen && <Cart />}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} >
            <Route path="category/:category" element={<Shop />} />

          </Route>
          <Route path="product/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

