import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '@/styles/SignUp.module.scss';
import sign from "@/photo/sign.jpeg";

const SignUp = ({handleSignUp}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const signUpError = await handleSignUp(email, password);
        if (signUpError) {
            setError(signUpError);
            console.error("Sign up error", signUpError);
        } else {

            navigate('/login');
        }

    };

    return (
        <>
            <div className={styles.signupContainer}>
                <h2>Sign Up</h2>
                <img src={sign} alt="sign" className={styles.signImage}/>
                {error && <p className={styles.error}>{error}</p>}

                <form className={styles.signForm} onSubmit={handleSubmit}>
                    <label className={styles.label}>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                           required/>
                    <label className={styles.label}>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           placeholder="Password" required/>

                    <button className={styles.buttonSign} type="submit">Sign Up</button>
                </form>

            </div>
        </>
    );

};


export default SignUp;

