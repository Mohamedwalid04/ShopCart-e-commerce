import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.css'
import Nav from './Nav'
import Search from './Search'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../features/productsSlice'
export default function Header({ style }) {
    const { setIsOpen } = useCart()
    const [size, setSize] = useState(window.innerWidth)
    const [showNav, setShowNav] = useState(false)
    const [showCat, setShowCat] = useState(false)
    const { cartList } = useSelector((store) => store.cart)
    const { categories } = useSelector((store) => store.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [dispatch])
    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize(window.innerWidth)
        })
    }, [])
    function handleCategory() {
        setShowCat((cat) => !cat)
    }
    return (
        <div style={style} className='box-shadow w-full'>
            <div className={`${styles.subHeader} container flex-columns-mobile gap-20`}>
                <h4>Shop number</h4>
                <h4>Get 50% off on selected Items | ShopNow</h4>
                <div className={`${styles.option}`}>
                    <select name="lang" id="lang">
                        <option value="Eng">English</option>
                        <option value="Arb">Arabic</option>
                    </select>
                </div>

            </div>
            <header className={`container mb-5`}>
                <div className={styles.leftSide}>
                    <div className={`${styles.logo}`}>
                        <Link to={"/"}><h1 className='c-main'>ShopCart</h1></Link>
                        {size < 530 && (
                            <>
                                <div className={styles.bars} onClick={() => {
                                    setShowNav((show) => !show)
                                    setShowCat(false)
                                }} >
                                    <FontAwesomeIcon icon={faBars} fixedWidth />
                                </div>
                                {showNav && <div className={`${styles.Nav} box-shadow p-10`}>
                                    <span style={{ float: "right" }} onClick={() => setShowNav(false)}>❌</span>
                                    <ul>
                                        <li>
                                            <span onClick={handleCategory}>Category</span>
                                            {showCat && <div className={`${styles.categories} box-shadow p-10`}>
                                                <span onClick={handleCategory} style={{ float: "right" }}>❌</span>
                                                {categories.map((cat, i) => <Link className={styles.category} to={`/shop/category/${cat}`} key={i}>
                                                    <div className={styles.details}>
                                                        <h5>{cat}</h5>
                                                    </div>
                                                </Link>)}
                                            </div>}
                                        </li>
                                        <li>Deal</li>
                                        <li>What&apos;s New</li>
                                        <li>Delivery</li>
                                    </ul>
                                </div>}

                            </>

                        )}
                    </div>
                    <Nav />
                </div>
                <Search />
                <div className={styles.rightSide}>
                    <div className={styles.user}>
                        <Link to={"/login"}><span><FontAwesomeIcon icon={faUser} fixedWidth /></span>
                            <span>Account</span>
                        </Link>
                    </div>
                    <div className={styles.cart} onClick={() => {
                        setIsOpen((isOpen) => !isOpen)
                    }}>
                        <span className={styles.cartOption}>
                            <FontAwesomeIcon icon={faCartShopping} fixedWidth />
                            {cartList.length > 0 ? <div className={styles.cartNum}>
                                {cartList.length}
                            </div> : ""}
                        </span>
                        <span>Cart</span>
                    </div>
                    {size < 915 && size > 530 && (<>
                        <div onClick={() => {
                            setShowNav((show) => !show)
                            setShowCat(false)
                        }} className={styles.bars} >
                            <FontAwesomeIcon icon={faBars} fixedWidth />
                        </div>
                        {showNav && <div className={`${styles.Nav} box-shadow`}>
                            <ul>
                                <li>
                                    <span onClick={handleCategory}>Category</span>
                                    {showCat && <div className={`${styles.categories} box-shadow`}>
                                        <span onClick={handleCategory} style={{ float: "right" }}>❌</span>
                                        {categories.map((cat, i) => <Link className={styles.category} to={`/shop/category/${cat}`} key={i}>
                                            <div className={styles.details}>
                                                <h5>{cat}</h5>
                                            </div>
                                        </Link>)}
                                    </div>}
                                </li>
                                <li>Deal</li>
                                <li>What&apos;s New</li>
                                <li>
                                    <Link to={"#delivery"}>
                                        Delivery
                                    </Link>
                                </li>
                            </ul>
                        </div>}
                    </>)}
                </div>
            </header>
        </div>
    )
}
