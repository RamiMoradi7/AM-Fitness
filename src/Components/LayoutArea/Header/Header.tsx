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

    const isAdmin = user?.roleId === 1;

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOut = () => {
        authService.logOut();
        toast.success("התנתקת בהצלחה.");
    };

    const menuItems = [
        { title: "דף הבית", link: "/", hash: "#home" },
        { title: "הסיפור שלי", link: "/", hash: "#about" },
        { title: "צור קשר", link: "/", hash: "#contact-us" },
        user && !isAdmin && { title: "האיזור שלי", link: "/application", hash: "#my-area" },
        isAdmin && { title: "ממשק מנהל", link: "/admin-dashboard/", hash: "#admin-dashboard" },
        user ? { title: "התנתק", link: "/auth", onClick: handleSignOut } : { title: "התחברות", link: "/auth", hash: "#login" },
    ].filter(Boolean);

    return (
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center bg-gradient-to-t from-gray-900 to-black justify-between px-4 py-5">
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

                {/* Menu for larger screens */}
                <div className="hidden lg:flex flex-grow items-center lg:shadow-none">
                    <ul className="flex list-none lg:ml-auto">
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

                {/* Mobile menu */}
                <div className={`lg:hidden flex-grow items-center transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <ul onClick={handleToggle} className="flex flex-col list-none">
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
