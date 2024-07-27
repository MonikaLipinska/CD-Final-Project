import {useState} from "react";
import '@/styles/Login.module.scss';
import {useNavigate} from "react-router-dom";


const Login = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error} = await supabase.auth.signInWithPassword({email, password,});

        if (error) {
            setError(error.message);
        } else {
            onLogin();
            navigate("/");
        }
    };

    return (
        <div className={login}>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type={email} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                       required/>
                <input type={password} value={password} onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password" required/>
                <button type={submit}>Login</button>
            </form>
        </div>

    );

};


export default Login;





