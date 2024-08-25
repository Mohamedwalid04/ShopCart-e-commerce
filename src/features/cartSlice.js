import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartList: [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart: {
            prepare(product, price) {
                return {
                    payload: { product, price }
                }
            },
            reducer(state, action) {
                state.cartList = [...state.cartList.filter((el) => el.id !== action.payload.product.id), action.payload.product]
                state.total += action.payload.price
            }
        },
        removeFromCart: {
            prepare(id, price) {
                return {
                    payload: { id, price }
                }
            },
            reducer(state, action) {
                state.cartList = [...state.cartList.filter((el) => el.id !== action.payload.id)]
                state.total -= action.payload.price
            }
        },
        getTotal(state, action) {
            state.total += action.payload
        }
    }
})

export default cartSlice.reducer
export const { addtoCart, removeFromCart, getTotal } = cartSlice.actions