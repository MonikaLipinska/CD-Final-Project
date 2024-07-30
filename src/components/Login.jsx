import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from '@/styles/Login.module.scss';
import PropTypes from "prop-types";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    {/*const handleLogin = async (e) => {
        e.preventDefault();*/
    }

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

    //const {error} = await supabase.auth.signInWithPassword({email, password,});

    {/*} const error = await supabase.auth.signInWithPassword({email: email, password: password,});

        if (error) {
            setError(error);
            console.error("Login error", error);

            if (error === "invalid login") {
                navigate("/signup");
            }
        } else {

            navigate('/');
        }
    };*/
    }

    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
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


{/*const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const {error} = await supabase.auth.signInWithPassword({email, password});
        if (error) {

            navigate('/signup');
        } else {
            navigate('/');
        }
    };


    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>Password
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login</button>


            </form>
            <button onClick={() => navigate('/signup')}>Or Sign Up</button>
        </div>
    );
};

export default Login;*/
}
{/*const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error} = await supabase.auth.signInWithPassword({email, password,});

        if (error) {
            setError(error.message);

            if (error.message === "invalid login credentials") {
                navigate("/signup");
            }
        } else {

            navigate('/');
        }
    };

    return (
        <div className={"login"}>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                       required/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password" required/>
                <button type="submit">Login</button>
            </form>
            <button onClick={() => navigate("/signup")}>or Sign Up</button>
        </div>

    );

};


export default Login; */
}






