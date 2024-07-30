import {useEffect, useState} from 'react';
import {supabase} from '@/supabase';

export const useAuth = () => {
    const [session, setSession] = useState(null);

    //useEffect(() => {
    //  const session = supabase.auth.session();
    //setSession(session);

    // const {data: listener} = supabase.auth.onAuthStateChange((_event, session) => {
    //   setSession(session);
    //});

    useEffect(() => {
        const getSession = async () => {
            const {data: {session}} = await supabase.auth.getSession();
            console.log("useAuth initial session:", session);
            setSession(session);
        };

        getSession();

        const {data: authListener} = supabase.auth.onAuthStateChange((_event, session) => {
            console.log("useAuth session changed:", session);
            setSession(session);
        });

        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, []);

    return {session};
};