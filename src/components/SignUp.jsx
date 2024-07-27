import {useState} from "react";
import './SignUp.module.scss';
import {useNavigate} from "react-router-dom";


const SignUp = ({onSignUp}) => {
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
        } else {
            onSignUp();
            navigate('/');
        }
    };

    return (
        <div className={signup}>

            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type={email} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                       required/>

                <input type={password} value={password} onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password" required/>

                <button type={submit}>Sign Up</button>
            </form>
        </div>
    );

};


export default SignUp;