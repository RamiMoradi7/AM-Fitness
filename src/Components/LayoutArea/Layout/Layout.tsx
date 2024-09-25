import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import { useEffect } from "react";
import axios from "axios";
import { appConfig } from "../../../Utils/AppConfig";

function Layout(): JSX.Element {
    useEffect(() => {
        const fetchCsrfToken = async () => {
            const { data } = await axios.get(appConfig.csrfTokenUrl)
            if (data.csrfToken) {
                window.csrfToken = data.csrfToken;
                console.log(window.csrfToken);
            }
        }
        fetchCsrfToken();
    }, [])


    return (
        <div className="bg-zinc-100 text-zinc-900">
            <Header />
            <div className="min-h-screen mt-20">
                <Toaster position="top-right" />
                < Routing />
            </div>
            <Footer />
        </div >
    );
}

export default Layout;
