import {Outlet} from "react-router-dom";
//import {supabase} from "@/supabase.js";


const Middleware = () => {
    {/*const {session} = useAuth();
    console.log("Middleware session", session);

    if (!session) {
        return <Navigate to="/login"/>;
    }
*/
    }

    return <Outlet/>;

}

export default Middleware;


//return user ? <Outlet/> : <Navigate to="/login"/>;
//import {useEffect, useState} from "react";