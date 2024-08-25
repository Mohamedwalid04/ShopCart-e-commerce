import { Link, useNavigate } from 'react-router-dom'
import styles from './Form.module.css'
import { useEffect, useState } from 'react'
import Eye from '../components/Eye'
export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    function hundleSubmit(e) {
        e.preventDefault()
        if (!form.email || !form.password) return;
        navigate("/")
    }
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        document.title = "Login"
        return () => {
            document.title = "ShopCart"
        }
    }, [])
    return (
        <>
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.link}>
                        <h3>ShopCart</h3>
                        <div className={styles.changeLink}>
                            <h2>New Customer</h2>
                            <p>Start be a part of a big family</p>
                            <Link to="/register">
                                <button>Sign in</button>
                            </Link>
                        </div>
                    </div>
                    <form onSubmit={hundleSubmit} className={styles.form}>
                        <h2>Welcome Back</h2>
                        <div className={styles.socials}>
                            <h3>Login in with:</h3>
                            <Link to={""} >Facebook</Link >
                            <Link to={""} >Google</Link >
                        </div>
                        <input name='email' type="email" value={form.email} onChange={handleChange} placeholder='Enter your Email' required />
                        <div className={`${styles.pass}`}>
                            <input name='password' type={show ? "text" : "password"} value={form.password} onChange={handleChange} placeholder='Enter your password' required />
                            <Eye className={styles.eye} setShow={setShow} show={show} />
                        </div>
                        <button type="submit">Login</button>
                        <Link className={styles.forget} to={""}>Forget Password</Link>
                    </form>
                </div>

            </div>
            <footer className={styles.footer}>
                <p>all copy right</p>
            </footer>
        </>

    )
}
