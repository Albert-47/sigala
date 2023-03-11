import Navbar from './Navbar.js';
import Footer from './Footer.js';
import CssBaseline from '@mui/material/CssBaseline';

export default function Layout({ children }) {
    return (
        <>
            <CssBaseline>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </CssBaseline>
        </>
    );
}
