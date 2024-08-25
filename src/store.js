import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./features/productsSlice";
import cartSlice from "./features/cartSlice";

const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: cartSlice,
    }
})
export default store