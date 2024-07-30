import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';
import HomePage from '@/components/HomePage.jsx';
import HeaderLayout from "@/components/HeaderLayout.jsx";
//import {Outlet} from "react-router-dom";
import Browse from "@/components/Browse.jsx";
import About from "@/components/About.jsx";
import Contact from '@/components/Contact.jsx';
import Help from "@/components/Help.jsx";
import Login from "@/components/Login.jsx";
import SignUp from "@/components/SignUp.jsx";
import {supabase} from "@/supabase.js";
import Middleware from "@/components/Middleware.jsx";


// czy jestes zalogowany
// if (true) {
//     return <Navigate to="/login" />
// }


function App() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            const {data: {session}} = await supabase.auth.getSession();
            console.log("First session", session);
            setSession(session);
        };

        getSession();

        const {data: authListener} = supabase.auth.onAuthStateChange((_event, session) => {
            console.log("Session changed", session);
            setSession(session);
        });

        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, []);

    const handleLogin = async (email, password) => {
        const {data, error} = await supabase.auth.signInWithPassword({email, password});
        if (error) {
            console.error("Login error:", error);
            return error.message;
        }
        setSession(data);
        return null;
    };

    const handleSignUp = async (email, password) => {
        const {error} = await supabase.auth.signUp({email, password});
        if (error) {
            console.error("Sign up error:", error);
            return error.message;
        }
        return null;
    };


    return (

        <Router>
            <Routes>
                <Route path="/login" element={<Login handleLogin={handleLogin}/>}/>
                <Route path="/signup" element={<SignUp handleSignUp={handleSignUp}/>}/>
                <Route path="/" element={session ? <Middleware/> : <Navigate to="/login"/>}>
                    <Route element={<HeaderLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/browse" element={<Browse/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/help" element={<Help/>}/>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}


// return (
//    <Router>
//       <Routes>
//          <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
//        <Route path="/signup" element={<SignUp onSignUp={handleSignUp}/>}/>
//         <Route path="/" element={session ? <Middleware/> : <Navigate to="/login"/>}>
//              <Route element={<HeaderLayout/>}>
//                  <Route index element={<HomePage/>}/>
//                  <Route path="/about" element={<About/>}/>
//                 <Route path="/browse" element={<Browse/>}/>
//                 <Route path="/contact" element={<Contact/>}/>
//                <Route path="/help" element={<Help/>}/>
//            </Route>
//        </Route>
//
//   </Routes>
//  </Router>
// );
//}


export default App;


