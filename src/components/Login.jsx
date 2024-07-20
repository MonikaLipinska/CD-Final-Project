import {useState} from "react";
import '@/styles/Login.scss';

const Login = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', email);
        onLogin();

    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                       required/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password" required/>

                <button type="submit">Log In</button>

            </form>
        </div>
    );


};

export default Login;