import SocialButtons, { SocialButtonsProps } from "./SocialButtons";

function Footer(): JSX.Element {
    const socialButtons: SocialButtonsProps[] = [{
        href: "https://www.facebook.com/matan.amrani.3",
        iconClass: "fa-facebook-square",
        textColor: "blue-600",
        bgColor: "white"
    }, {
        href: "https://wa.me/+9720526465015",
        iconClass: "fa-whatsapp",
        textColor: "pink-400",
        bgColor: "white"
    },
    {
        href: "https://www.instagram.com/matanamranii",
        iconClass: "fa-instagram",
        textColor: "gray-900",
        bgColor: "white"
    }]



    return (
        <footer className="relative bg-black text-white pt-8 z-50 pb-6">
            <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px" }}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon
                        className="text-black fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4" data-aos="zoom-in-right">
                        <h4 className="text-3xl font-semibold">עקבו אחריי !</h4>
                        <div className="mt-6">
                            {socialButtons.map((btn) => <SocialButtons key={btn.href} href={btn.href} iconClass={btn.iconClass} textColor={btn.textColor} bgColor={btn.bgColor} />)}

                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4" data-aos="zoom-in-left">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">

                                <ul className="list-unstyled">
                                    <li>
                                        <div className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" >
                                            אודות
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" >
                                            Blog
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm" >
                                            צור קשר
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-400" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-600 font-semibold py-1">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
