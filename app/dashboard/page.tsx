"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
    const router = useRouter()

    useEffect(() => 
        {
        const loggedIn = localStorage.getItem("Logged");
        console.log(loggedIn)
        if (!loggedIn) {
            router.replace("/login")
        
        }}, [])

    return (<>
    
    <h1> FUISTE REDIRIGIDO AL DASHBOARD </h1>
    
    
    
    </>)
    }

    export default Dashboard;