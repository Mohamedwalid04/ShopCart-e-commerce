import { Link } from 'react-router-dom'
import styles from './HomeCard.module.css'
export default function HomeCard({ children, className, backgroundImage, link }) {

    return (
        <Link to={link} style={{
            backgroundImage: `url(${backgroundImage})`
        }} className={`${styles.card} ${className}`}>
            {children}
        </Link>
    )
}
