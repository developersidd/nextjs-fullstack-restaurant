import React from 'react'
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default layout;