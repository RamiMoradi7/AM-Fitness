import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import { useEffect } from "react";
import axios from "axios";
import { appConfig } from "../../../Utils/AppConfig";
import CookieConsent from "../../App/CockieConsect";

function Layout(): JSX.Element {

    useEffect(() => {
        const fetchCsrfToken = async () => {
            try {
                const { data } = await axios.get(appConfig.csrfTokenUrl, { withCredentials: true });
                if (data.csrfToken) {
                    window.csrfToken = data.csrfToken;
                    console.log('CSRF Token:', window.csrfToken);
                }
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        };
        fetchCsrfToken();
    }, []);

    return (
        <div className="bg-zinc-100 text-zinc-900">
            <Header />
            <div className="min-h-screen mt-20">
                <Toaster position="top-right" />
                <CookieConsent />
                < Routing />
            </div>
            <Footer />
        </div >
    );
}

export default Layout;
