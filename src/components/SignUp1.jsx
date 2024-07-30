import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {supabase} from '@/supabase';
import styles from '@/styles/SignUp1.module.scss';


const SignUp = ({onSignUp}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("null");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const {error} = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) {
            setError(error.message);
        } else {
            onSignUp(user);
            navigate('/');
        }
    };
    return (
        <div className={styles['signup-container']}>
            <div className={styles['signup-form']}>
                <h2>Sign Up</h2>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <form onSubmit={handleSignUp}>
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
                    <button type="submit">Sign Up</button>
                </form>
               
            </div>
        </div>
    );
};

export default SignUp;