import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            setIsBannerVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsBannerVisible(false);
        window.location.reload();
    };

    if (!isBannerVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 text-center z-50">
            <p className="inline-block">
                האתר משתמש בקבצי עוגיות כדי להבטיח לך את חוויית הגלישה הטובה ביותר.
            </p>
            <button
                onClick={acceptCookies}
                className="mr-4 bg-green-500  text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
            >
                אישור
            </button>
        </div>
    );
};

export default CookieConsent;
