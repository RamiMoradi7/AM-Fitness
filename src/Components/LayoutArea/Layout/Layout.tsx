import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";

function Layout(): JSX.Element {
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
