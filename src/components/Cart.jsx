import { useDispatch, useSelector } from 'react-redux'
import styles from './Cart.module.css'
import { removeFromCart } from '../features/cartSlice'
export default function Cart() {
    const { cartList, total } = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    return (
        <aside className={styles.cart}>
            <h2>Cart</h2>
            <ul className={styles.list}>
                {cartList.length === 0 && <p>There&apos;s no items</p>}
                {cartList.length > 0 && cartList?.map((el, i) => (<li key={i}>
                    <div className={styles.img}>
                        <img src={el.image} alt="" />
                    </div>
                    <div className={styles.details}>
                        <h5 className='mb-10'>{el.title}</h5>
                        <h4 className='mb-10'>Price: {el.price}</h4>
                        <h4>piece: {el.Count}</h4>
                    </div>
                    <span onClick={() => dispatch(removeFromCart(el.id, el.price))} style={{ cursor: "pointer" }}>❌</span>
                </li>))}
            </ul>
            <div style={{ marginTop: "auto", }}>
                <h4 className='mb-20'>Total: {total}</h4>

                <button >Checkout</button>
            </div>
        </aside>
    )
}
