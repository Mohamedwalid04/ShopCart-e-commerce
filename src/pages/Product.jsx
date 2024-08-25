import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getProduct } from "../features/productsSlice"
import styles from './Product.module.css'
import Loading from "../components/Loading"
import RatingStars from "../RatingStars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruck } from "@fortawesome/free-solid-svg-icons"
import Header from "../components/Header"
import { addtoCart } from "../features/cartSlice"
export default function Product() {
    const [Count, setCount] = useState(1)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct(id))
    }, [id, dispatch])
    const { product, isLoading } = useSelector((store) => store.products)
    const {
        title,
        price,
        description,
        category,
        image,
    } = product;
    console.log(category)
    function handleIncrement() {
        setCount((Count) => Count + 1)
    }
    function handleDecrement() {
        if (Count === 1) return;
        setCount((Count) => Count - 1)
    }
    function addToCart() {
        const Product = {
            id,
            title,
            price: (price * Count),
            image,
            Count,
            timeAdd: new Date().toISOString(),
        }
        dispatch(addtoCart(Product, price))
    }
    useEffect(() => {
        document.title = `Shop | ${title ? title : ""}`
        return () => {
            document.title = "ShopCart"
        }
    }, [title])
    return (
        <>
            <Header />
            {isLoading && <Loading />}
            {!isLoading &&
                <div className={styles.container}>
                    <div className={styles.img}>
                        <img src={image} alt="" />
                    </div>
                    <div className={`${styles.details} mt-10 mb-20`}>
                        <h2 className="mb-10">{`${title ? title : ""}`}</h2>
                        <Link to={`/shop/category/${product?.category?.id}`}><h3 className="mb-10 c-main">{product?.category?.name}</h3></Link>
                        <p>{description}</p>
                        <div className={`${styles.price} mt-10 mb-20 fs-20 f-bold`}>
                            <h3>${price}</h3>
                        </div>
                        <div className={`${styles.count} mt-10 mb-20`}>
                            <button onClick={handleDecrement}>-</button>
                            <span>{Count}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <div className="mt-10 mb-20">
                            <RatingStars size={40} />
                        </div>

                        <button className={`mt-10 btn-shape ${styles.buy}`}>Buy now</button>
                        <button onClick={addToCart} className={`mt-10 btn-shape ${styles.buy}`}>Add to Cart</button>
                        <ul className={`${styles.rules} mt-20 mb-20 w-full`}>
                            <li className="box-shadow">
                                <FontAwesomeIcon icon={faTruck} color="orange" size="2xl" fixedWidth />
                                <span>Speed Delivery</span>
                            </li>
                            <li className="box-shadow">
                                <FontAwesomeIcon icon={faTruck} color="orange" size="2xl" fixedWidth />
                                <span>Speed Delivery</span>
                            </li>
                        </ul>
                    </div>

                </div>}
        </>
    )
}
