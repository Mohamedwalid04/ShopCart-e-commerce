import Header from "../components/Header"
import HomeCard from "../components/HomeCard"
import MainSection from "../components/MainSection"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory, getData } from "../features/productsSlice"
import styles from './Home.module.css'
import { useEffect } from "react"
import Error from "../components/Error"
import Loading from "../components/Loading"
import ProductCard from "../components/ProductCard"
import Heart from "../components/Heart"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruck } from "@fortawesome/free-solid-svg-icons"
export default function Home() {
    return (
        <>
            <Header />
            <MainSection />
            <Category />
            <SomeProducts />
            <Delivery />
            <Footer />
        </>
    )
}

function Category() {
    const { categories, isLoading, error } = useSelector((store) => store.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [dispatch])
    return (
        <section className="p-15 mt-10 mb-20">
            <h2 className="mb-20 c-main f-bold fs-25">Shop by Category</h2>
            <div className=" w-full cards center-flex flex-wrap gap-20">
                {isLoading && <Loading />}
                {error && <Error message={error} />}
                {!isLoading && !error && categories.map((cat, i) =>
                    <HomeCard key={i} link={`/shop/category/${cat}`} className={"flex-columns c-white"} backgroundImage={`https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688506.jpg?t=st=1724593690~exp=1724597290~hmac=3e1f3e291651f1ea8585783979ab19af9aebc6ede863fd3be26b45e146806f21&w=740`}>
                        <h3 className="fs-25">{cat}</h3>
                    </HomeCard>
                )}
            </div>
        </section>
    )
}
function SomeProducts() {
    const { products, error, isLoading } = useSelector((store) => store.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
    }, [dispatch])
    return (
        <section className="w-full mt-10 mb-20">
            <h2 className="c-main text-c mb-20">Some Products</h2>
            <div style={{ height: "100%" }} className="w-full center-flex gap-20 flex-wrap flex-columns-mobile">
                {isLoading && <Loading />}
                {error && <Error message={error} />}
                {!error && !isLoading && products.map((el, i) => {
                    if (i > 3) return;
                    return (
                        <ProductCard key={el.id}>
                            <div className={styles.img2}>
                                <div className={styles.iconCon}>
                                    <Heart />
                                </div>
                                <Link to={`/product/${el.id}`}>

                                    <img src={el.image} alt="" />
                                </Link>
                            </div>
                            <div className={styles.details}>
                                <div className="mt-10 mb-10 between-flex">
                                    <h3 style={{ width: "50%" }} className="fs-15">{el.title.split(" ").slice(0, 3).join(" ")}</h3>
                                    <span className="f-bold">${el.price}</span>
                                </div>
                                <h5 className="fs-10 mb-10 c-main">{el.category}</h5>
                                <p>{el.description.split(" ").slice(0, 8).join(" ")}...</p>
                            </div>
                        </ProductCard>
                    )
                })}
            </div>

        </section>
    )
}

function Delivery() {
    return (
        <section id="delivery" className="w-full mt-10 mb-20">
            <h2 className="c-white p-15 w-fit f-bold fs-25 mb-20" style={{ border: "1px solid #eee", backgroundColor: "#0a5b40", margin: "auto", borderRadius: "5px" }}>Features</h2>
            <div className="w-full center-flex gap-20 flex-columns-mobile mt-10 mb-20 p-15">
                <div className="bg-white box-shadow p-15 flex-columns" style={{ borderRadius: "5px" }}>
                    <FontAwesomeIcon color="orange" size="6x" icon={faTruck} fixedWidth />
                    <h3 className="c-main text-c mt-10 mb-10">Fast Shipping & Free</h3>
                    <ul className="gap-20">
                        <li>Fast Delivery</li>
                        <li>Free Shipping inside Cairo and Giza</li>
                        <li>Free Shipping outside Cairo and Giza when you buy items upto 150$</li>
                    </ul>
                </div>
                <div className="bg-white box-shadow p-15 flex-columns" style={{ borderRadius: "5px" }}>
                    <FontAwesomeIcon color="orange" size="6x" icon={faTruck} fixedWidth />
                    <h3 className="c-main text-c mt-10 mb-10">title</h3>
                    <ul className="gap-20">
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <div className="w-full bg-main c-white center-flex">
            All Copyrights&copy;2024
        </div>
    )
}