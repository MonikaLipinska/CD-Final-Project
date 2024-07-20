import React, {useState} from "react";
import './SignUp.scss';


const SignUp = ( {onSignUp}) => {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault();
        localStorage.setItem("user", email);
        onSignUp();

    };

    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input type="email" value={email} onChange={ (e)  => setEmail(e.target.value)} placeholder= "Email" required/>

            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder = "Password" required={}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );

};




export default SignUp;