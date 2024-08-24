import { Toaster } from "react-hot-toast";
import Routing from "../Routing/Routing";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout(): JSX.Element {
    return (
        <div className="bg-zinc-100 text-zinc-900">
            <Header />
            <Toaster position="top-right" />
            < Routing />
            <Footer />
        </div >
    );
}

export default Layout;
