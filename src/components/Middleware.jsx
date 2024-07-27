import {Navigate, Outlet} from "react-router-dom";
import "@/components/Login.jsx";

const Middleware = () => {
    const user = supabase.auth.user();

    if (!user) {
        return <Navigate to="/login"/>;
    }

    return <Outlet/>;
};


{/*const Middleware = () => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return <Navigate to='/login'/>;
    }

    return <Outlet/>;
}
{/* return <Navigate to="/homepage" /> */
}

export default Middleware;