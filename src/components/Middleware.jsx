import {Navigate, Outlet} from "react-router-dom";


const Middleware = () => {
    const isLoggedIn = true;
    if(!isLoggedIn) {
        return <Navigate to='/login'/>;
    }

    return <Outlet/>;
    {/* return <Navigate to="/homepage" /> */}
}


export default Middleware;