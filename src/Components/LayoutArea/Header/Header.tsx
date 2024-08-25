import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectAuthState } from '../../../Redux/AuthSlice';
import { authService } from '../../../Services/AuthService';
import MenuButton from './MenuButton';

export default function Header(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useSelector(selectAuthState);
    const location = useLocation();

    const isAdmin = user?.roleId === 1

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOut = () => {
        authService.logOut();
        toast.success("התנתקת בהצלחה.");
    };

    const menuItems = [
        { title: "דף הבית", link: "/", hash: "#home" },
        { title: "קצת עליי", link: "/", hash: "#about" },
        { title: "צור קשר", link: "/", hash: "#contact-us" },
        user && !isAdmin && { title: "האיזור שלי", link: "/application" },
        isAdmin && { title: "ממשק משתמש", link: "/admin-dashboard/" },
        user ? { title: "התנתק", link: "/auth", onClick: handleSignOut } : { title: "התחברות", link: "/auth" },
    ].filter(Boolean);

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]);

    return (
        <nav className="top-0 fixed  z-50 w-full flex flex-wrap items-center justify-between px-4 py-5 bg-black">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full flex items-center justify-between lg:w-auto lg:static lg:justify-between">
                    <div className="lg:hidden">
                        <button
                            className="text-white px-3 py-4 flex items-center text-xs uppercase font-bold"
                            type="button"
                            onClick={handleToggle}
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-lg font-bold leading-relaxed py-2 whitespace-nowrap uppercase text-green-500">
                        Matan Amrani Fitness
                    </p>
                </div>
                <div className={`lg:flex flex-grow items-center lg:bg-black lg:shadow-none ${isOpen ? 'block' : 'hidden'}`}>
                    <ul onClick={handleToggle} className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {menuItems.map((item) => (
                            <MenuButton
                                item={item.title}
                                link={item.link}
                                hash={item.hash}
                                key={item.title}
                                onClick={item.onClick}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
