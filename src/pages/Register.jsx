import { Link, useNavigate } from 'react-router-dom'
import styles from './Form.module.css'
import { useEffect, useState } from 'react'
import Eye from '../components/Eye'
export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    function hundleSubmit(e) {
        e.preventDefault()
        if (!form.name || !form.email || !form.password) return;
        navigate("/")
    }
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        document.title = "Register"
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
                            <h2>Welcome Back</h2>
                            <p>to keep connecting with us please Login with your Personal info</p>
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </div>
                    </div>
                    <form onSubmit={hundleSubmit} className={styles.form}>
                        <h2>Create new Account</h2>
                        <div className={styles.socials}>
                            <h3>Sign in with:</h3>
                            <Link to={""} >Facebook</Link >
                            <Link to={""} >Google</Link >
                        </div>
                        <input name='name' type="text" value={form.name} onChange={handleChange} placeholder='Enter your Name' required />
                        <input name='email' type="email" value={form.email} onChange={handleChange} placeholder='Enter your Email' required />
                        <div className={`${styles.pass}`}>
                            <input name='password' type={show ? "text" : "password"} value={form.password} onChange={handleChange} placeholder='Enter your password' required />
                            <Eye className={styles.eye} setShow={setShow} show={show} />
                        </div>
                        <button type="submit">Sign in</button>
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
