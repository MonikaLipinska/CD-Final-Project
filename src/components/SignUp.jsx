import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '@/styles/SignUp.module.scss';

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
                {error && <p className={styles.error}>{error}</p>}

                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                           required/>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           placeholder="Password" required/>

                    <button type="submit">Sign Up</button>
                </form>

            </div>
        </>
    );

};


export default SignUp;


{/*const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignUp = async (e) => {
        e.preventDefault();
        const {error} = await supabase.auth.signUp({email, password});
        if (error) {
            alert(error.message);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
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
                <button type="submit">Sign Up</button>

            </form>
            <button onClick={() => navigate('/login')}>Back to Login</button>
        </div>
    );
};

export default SignUp;

{/*const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error} = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) {
            setError(error.message);
            //return
        } else {

            navigate('/login');
        }
    };

    return (
        <>
            <div className={"signup"}>
                <h2>Sign Up</h2>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                           required/>

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           placeholder="Password" required/>

                    <button type="submit">Sign Up</button>
                </form>

            </div>
        </>
    );

};


export default SignUp; */
}