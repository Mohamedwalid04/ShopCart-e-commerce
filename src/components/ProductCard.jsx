import styles from './ProductCard.module.css'
export default function ProductCard({ children, width = 250, height = 450 }) {
    const style = {
        width: `${width}px`,
        height: `${height}`
    }
    return (
        <div style={style} className={`${styles.Card}`}>
            {children}
        </div>
    )
}
