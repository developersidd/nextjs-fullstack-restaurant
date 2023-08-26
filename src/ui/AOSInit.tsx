"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

//useEffect
const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, [])
    return null
}

export default AOSInit