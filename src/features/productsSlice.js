const initialState = {
    products: [],
    isLoading: false,
    product: {},
    error: "",
    categories: []
}
export default function ProductsReducer(state = initialState, action) {
    switch (action.type) {
        case "products/getData":
            return {
                ...state,
                products: action.payload
            }
        case "product/getProduct":
            return {
                ...state,
                product: action.payload,
            }
        case "products/getDataByCategory":
            return {
                ...state,
                products: action.payload
            }
        case "products/getAllCategory":
            return {
                ...state,
                categories: action.payload

            }
        case "products/remove":
            return {
                ...state,
                products: [],
            }
        case "isLoading":
            return {
                ...state,
                isLoading: action.payload
            }
        case "error":
            return {
                error: action.payload
            }
        default: return state
    }
}
function isLoading(loading) {
    return { type: "isLoading", payload: loading }
}
export function removeData() {
    return { type: "products/remove" }
}

export function getData() {
    return async function (dispatch) {
        dispatch(removeData())
        dispatch(isLoading(true))
        try {
            const res = await fetch(`https://fakestoreapi.com/products`)
            if (!res.ok) throw new Error("Failed to fetch data")
            const data = await res.json()
            console.log(data)
            dispatch({ type: "products/getData", payload: data })
        } catch (err) {
            dispatch({ type: "error", payload: err.message })
        } finally {
            dispatch(isLoading(false))
        }

    }
}
export function getProduct(id) {
    return async function (dispatch) {
        dispatch(isLoading(true))
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            if (!res.ok) throw new Error("Failed to get the product")
            const data = await res.json()
            dispatch({ type: "product/getProduct", payload: data })
        } catch (err) {
            dispatch({ type: "error", payload: err.message })
        } finally {
            dispatch(isLoading(false))
        }

    }
}

export function getDataByCategory(category) {
    return async function (dispatch) {
        dispatch(removeData())
        dispatch(isLoading(true))
        try {
            const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            if (!res.ok) throw new Error("Failed to fetch data")
            const data = await res.json()
            await dispatch({ type: "products/getDataByCategory", payload: data })
            dispatch(isLoading(false))
        } catch (err) {
            dispatch({ type: "error", payload: err.message })
        } finally {
            dispatch(isLoading(false))
        }

    }
}
export function getAllCategory() {
    return async function (dispatch) {
        dispatch(isLoading(true))
        try {
            const res = await fetch(`https://fakestoreapi.com/products/categories`)
            if (!res.ok) throw new Error("Failed to fetch data")
            const data = await res.json()
            dispatch({ type: "products/getAllCategory", payload: data })
        } catch (err) {
            dispatch({ type: "error", payload: err.message })
        } finally {
            dispatch(isLoading(false))
        }

    }
}
