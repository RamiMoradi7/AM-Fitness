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
    }];

    return (
        <footer className="relative bg-gradient-to-t from-gray-900 to-black text-white pt-8 pb-6 z-50 flex justify-center items-center">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <div className="w-full lg:w-6/12 mb-12">
                    <h4 className="text-3xl lg:text-4xl font-bold mb-6">הישארו מעודכנים</h4>
                    <p className="mb-4 text-sm">אני כאן כדי לתמוך בכם בכל שלב של הדרך. תוכלו למצוא אותי גם ברשתות החברתיות</p>
                    <div className="flex justify-center mb-4">
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
                <hr className="my-6 border-gray-700 w-full" />
                <div className="w-full md:w-4/12">
                    <div className="text-sm text-gray-400 font-semibold py-1">
                        &copy; {new Date().getFullYear()} מתן עמרני פיטנס. כל הזכויות שמורות.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
