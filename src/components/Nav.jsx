import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Nav.module.css'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../features/productsSlice'
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const { categories } = useSelector((store) => store.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [dispatch])
    return (
        <nav className={`${styles.nav}`} >
            <ul>
                <li>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <span style={{ marginRight: "5px" }}>Category</span>
                        <span><FontAwesomeIcon icon={faChevronDown} fixedWidth /></span>
                    </div>
                    {isOpen && <div className={`${styles.categories} box-shadow`}>
                        <span onClick={() => setIsOpen(false)} style={{ float: "right" }}>❌</span>
                        {categories.map((cat, i) => <Link to={`/shop/category/${cat}`} key={i}>
                            <img src="../assets/cyber-monday-shopping-sales.jpg" alt="" />
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
        </nav>
    )
}
