import homepageWallpaper from "../../../Assets/Images/homepage.jpg";

export default function HeroSection(): JSX.Element {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen lg:h-95vh">
            <div
                className="absolute top-0 w-full h-full bg-top bg-cover"
                style={{
                    backgroundImage: `url(${homepageWallpaper})`,
                }}
            >
                <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black"></span>
            </div>
            <div className="container relative mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-6/12 px-4 text-center" data-aos="fade-in">
                        <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                            AM
                            <span className="text-green-500">Fitness</span>
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-white font-light">
                            הורדתי 59 ק"ג וסבלתי מכל רגע, היום אני אעשה הכל כדי שאתם לא תסבלו !
                        </p>
                        <p className="mt-2 text-lg sm:text-xl lg:text-2xl text-white font-light">
                            עוזר לאנשים במשקל עודף להתחטב ולפתח שרירים
                        </p>
                        <div className="mt-6 flex justify-center animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" className="text-white">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M2.017 20.305c1.13 1.614 6.042 2.882 8.362-.14c2.51 1.2 6.65.828 10.02-1.052c.468-.261.912-.591 1.183-1.054c.613-1.045.628-2.495-.49-4.634c-1.865-4.655-5.218-8.74-6.572-10.383c-.278-.254-2.052-.614-3.133-.96c-.478-.147-1.367-.246-2.431 1.156c-.505.665-2.796 2.297.111 3.395c.45.115.782.326 2.836-.05c.268-.046.936 0 1.407.827l.983 1.406a.96.96 0 0 1 .17.44c.172 1.5.166 3.376 1.002 4.326c-1.291-.933-4.664-2.042-7.206 1.113M2.001 12.94a6.714 6.714 0 0 1 8.416-.419"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
