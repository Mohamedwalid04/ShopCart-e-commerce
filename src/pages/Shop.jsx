
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import styles from './Shop.module.css'
import Heart from "../components/Heart";
import ProductCard from "../components/ProductCard";
import Error from "../components/Error";
import { useEffect } from "react";
import { getData, getDataByCategory } from "../features/productsSlice";
export default function Shop() {
    const dispatch = useDispatch()
    const { category } = useParams()
    useEffect(() => {
        function getdata() {
            if (category) dispatch(getDataByCategory(category))
            if (!category) dispatch(getData())

        }
        getdata()
    }, [dispatch, category])
    const { products, error, isLoading } = useSelector((store) => store.products)
    useEffect(() => {
        document.title = "Shop"
        return () => {
            document.title = "ShopCart"
        }
    }, [])
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    {isLoading && <Loading />}
                    {error && <Error message={error} />}
                    {!error && products.map((el) => {
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
            </div>
        </div>
    )
}
