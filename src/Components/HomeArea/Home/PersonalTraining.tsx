import imageSection from "../../../Assets/Images/section.jpg";

export default function PersonalTraining(): JSX.Element {
    return (
        <section className="relative py-20 bg-black text-white">
            <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px" }}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon
                        className="text-black fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="flex flex-wrap items-center text-center mb-24" data-aos="fade-up">
                    <div className="w-full lg:w-8/12 px-4">
                        <h2 className="text-3xl md:text-4xl font-semibold uppercase">
                            <span className="text-green-500">אימונים </span>אישיים
                        </h2>
                        <p className="text-lg leading-relaxed mt-4 mb-6">
                            אימונים אישיים אחד על אחד בסטודיו
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-5/12 px-4" data-aos="fade-right">
                        <img
                            alt="ציוד חדר כושר"
                            className="max-w-full rounded-lg shadow-lg"
                            src={imageSection}
                        />
                    </div>
                    <div className="w-full md:w-7/12 px-4" data-aos="fade-down-left">
                        <div className="md:pr-12">
                            <small className="text-green-500">קצת על הסטודיו</small>
                            <h3 className="text-3xl md:text-4xl font-bold uppercase"><span className="text-green-500">הסטודיו</span> שלי</h3>
                            <p className="mt-4 text-lg leading-relaxed">
                                יחס אישי והתאמה מלאה: כל לקוח מקבל יחס אישי ומותאם לצרכים, למטרות, וליכולות הפיזיות שלו. התוכניות בנויות בהתאמה אישית, כך שכל מתאמן מתקדם בקצב שלו.                            </p>
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-green-500 font-semibold inline-block py-1 mr-3">
                                                <i className="fas fa-dumbbell fa-2x"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg mr-2">
                                                ציוד חדר כושר מקצועי
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-green-500 font-semibold inline-block py-1 mr-3">
                                                <i className="fas fa-dumbbell fa-2x"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg mr-2">
                                                אימונים אישיים אפקטיביים                                             </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-green-500 font-semibold inline-block py-1 mr-3">
                                                <i className="fas fa-dumbbell fa-2x"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg mr-2">
                                                ליווי אישי בדגש על טכניקת עבודה מושלמת                                            </h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
