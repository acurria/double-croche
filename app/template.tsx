"use client";

import './globals.css'

import {QueryClient, QueryClientProvider} from 'react-query'
import Navigation from "@/src/components/organisms/navigation";
import Footer from "@/src/components/organisms/footer";

const queryClient = new QueryClient()


export default function RootTemplate({children}:any) {
    return (
        <QueryClientProvider client={queryClient}>
            <nav id="nav-section" className='sticky top-0 z-20'>
                <Navigation/>
            </nav>
                {children}
            <footer id="footer-section">
                <Footer/>
            </footer>
        </QueryClientProvider>
    )
}