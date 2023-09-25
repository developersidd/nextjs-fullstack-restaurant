import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Providers } from '@/redux/features/provider';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Providers>
            <Navbar />
            {children}
            <Footer />
        </Providers>
    )
}

export default layout;