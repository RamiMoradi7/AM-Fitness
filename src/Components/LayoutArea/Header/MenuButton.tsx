import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

type MenuButtonProps = {
    item: string;
    link: string;
    hash?: string;
    onClick?: () => void;
};

export default function MenuButton({ item, link, hash, onClick }: MenuButtonProps): JSX.Element {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (hash) {
            e.preventDefault();
            navigate(link, { replace: true });
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            if (onClick) {
                onClick();
            }
            navigate(link);
        }
    };

    return (
        <li className="flex items-center">
            <Link to={link} onClick={handleClick} className="text-white px-3 py-4 flex items-center text-xs uppercase font-bold">
                <span className="inline-block mr-2">{item}</span>
            </Link>
        </li>
    );
}
