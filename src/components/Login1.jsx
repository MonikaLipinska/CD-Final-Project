import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {supabase} from '@/supabase';
import styles from "@/styles/Login1.module.scss"


const Login = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("null");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const {error, user} = await supabase.auth.signInWithPassword({email, password,});

        if (error) {
            setError(error.message);
        } else {
            onLogin(user);
            navigate('/');
        }
    };

    return (
        <div className={styles['login-container']}>
            <div className={styles['login-form']}>
                <h2>Login</h2>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                {/*} {error && <p>{error}</p>}
                <button className={styles['signup-link']} onClick={() => navigate('/signup')}>Or Sign Up</button> */}
            </div>
        </div>
    );
};

export default Login;