import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Search.module.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Search() {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search Product" />
            <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} fixedWidth />
        </div>
    )
}
