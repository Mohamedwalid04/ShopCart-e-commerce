import { Link } from 'react-router-dom'
import styles from './MainSection.module.css'
export default function MainSection() {
    return (
        <section>
            <div className={`container ${styles.sec} p-relative flex-columns-mobile w-full`}>
                <div className={`${styles.box}`}>
                    <h2 className='mb-20 f-bold'>Shopping And Departement Shop</h2>
                    <p className='fs-20 mb-20'>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <Link to={"/shop"}><button>Shop now</button></Link>
                </div>
                <div className={`${styles.box} p-absolute`}>
                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage.png" alt="" />
                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e660afc23a10a53523_other-min.png" alt="" />
                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e75b939fd1159c029e_tour-min.png" alt="" />
                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9c0607f75e4aad54b94a0_ele.png" alt="" />
                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e7037f3b07ebcf202d_snaks-min.png" alt="" />
                </div>
            </div>
        </section>
    )
}
