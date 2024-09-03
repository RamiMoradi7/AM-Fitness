import SocialButtons, { SocialButtonsProps } from "./SocialButtons";

function Footer(): JSX.Element {
    const socialButtons: SocialButtonsProps[] = [{
        href: "https://www.facebook.com/matan.amrani.3",
        iconClass: "fa-facebook-square",
        textColor: "text-blue-600",
        bgColor: "bg-white"
    }, {
        href: "https://wa.me/+9720526465015",
        iconClass: "fa-whatsapp",
        textColor: "text-green-500",
        bgColor: "bg-white"
    },
    {
        href: "https://www.instagram.com/matanamranii",
        iconClass: "fa-instagram",
        textColor: "text-pink-500",
        bgColor: "bg-white"
    }]

    return (
        <footer className="relative bg-gradient-to-t from-gray-900 to-black text-white pt-8 pb-6 z-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 text-center mb-12 lg:mb-0">
                        <h4 className="text-3xl lg:text-4xl font-bold mb-6">עקבו אחריי!</h4>
                        <div className="flex justify-center">
                            {socialButtons.map((btn) => (
                                <SocialButtons
                                    key={btn.href}
                                    href={btn.href}
                                    iconClass={btn.iconClass}
                                    textColor={btn.textColor}
                                    bgColor={btn.bgColor}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap justify-center lg:justify-start mb-6">
                            <div className="w-full lg:w-4/12 px-4">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm">אודות</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm">צור קשר</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-400 font-semibold py-1">
                            &copy; {new Date().getFullYear()} מתן עמרני פיטנס.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
