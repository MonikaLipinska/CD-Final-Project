import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from '@/styles/Login.module.scss';
import PropTypes from "prop-types";
import Vermeer from "@/photo/Vermeer.jpg";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginError = await handleLogin(email, password);
        if (loginError) {
            setError(loginError);
            console.error("Login error", loginError);
        } else {
            navigate("/");
        }
    };


    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            <img src={Vermeer} alt="A girl with a pearl earring ai" className={styles.loginImage}/>
            {error && <p className={styles.error}>{error}</p>}
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label className={styles.label}>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                       required/>
                <label className={styles.label}>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password" required/>
                <button type="submit">Login</button>
            </form>
            <button onClick={() => navigate("/signup")}>or Sign Up</button>
        </div>

    );

};

Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};
export default Login;



