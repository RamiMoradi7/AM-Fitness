import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTitle } from '../../../hooks/useTitle';
import About from './About';
import ContactUs from "./ContactUs";
import HeroSection from "./HeroSection";

export default function Home(): JSX.Element {
    useTitle("AM Fitness");

    return (
        <div id='home' className="text-gray-800 antialiased overflow-x-hidden">
            <HeroSection />

            <section className="pb-20 bg-black -mt-24">
                <div className="container mx-auto px-4 max-w-screen-xl">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-4/12 px-4 text-center" data-aos="fade-up">
                            <div className="relative flex flex-col min-w-0 break-words bg-gray-900 opacity-85 w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <h6 className="text-xl text-green-500 font-semibold">דוגמה</h6>
                                    <p className="mt-2 mb-4 text-white">
                                        Our gym is the recipient of 5 prestigious awards in recreational health.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 px-4 text-center" data-aos="fade-up">
                            <div className="relative flex flex-col min-w-0 break-words bg-gray-900 opacity-85 w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                        <i className="fas fa-retweet"></i>
                                    </div>
                                    <h6 className="text-xl text-green-500 font-semibold">דוגמה</h6>
                                    <p className="mt-2 mb-4 text-white">
                                        We give you up to two months to get acquainted with our services and find the regimen that best suits your lifestyle.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 px-4 text-center" data-aos="fade-up">
                            <div className="relative flex flex-col min-w-0 break-words bg-gray-900 opacity-85 w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                        <i className="fas fa-fingerprint"></i>
                                    </div>
                                    <h6 className="text-xl text-green-500 font-semibold">דוגמה</h6>
                                    <p className="mt-2 mb-4 text-white">
                                        Our services are recognised by the ministry of health, medical practitioners, physical therapists and nutritionists countrywide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <About />
                </div>
            </section>

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
                            <h2 className="text-3xl md:text-4xl font-semibold uppercase">About our <span className="text-green-500">gym</span></h2>
                            <p className="text-lg leading-relaxed mt-4 mb-6">
                                We offer a professional and modern environment for body building and fitness. Join us to experience the best workout sessions with top-notch equipment and expert trainers.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-5/12 px-4" data-aos="fade-right">
                            <img
                                alt="Gym equipment"
                                className="max-w-full rounded-lg shadow-lg"
                                src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                            />
                        </div>
                        <div className="w-full md:w-7/12 px-4" data-aos="fade-down-left">
                            <div className="md:pr-12">
                                <small className="text-green-500">About our gym</small>
                                <h3 className="text-3xl md:text-4xl font-bold uppercase"><span className="text-green-500">Safe</span> Body Building</h3>
                                <p className="mt-4 text-lg leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sint quis doloremque iusto molestias praesentium sed nisi ex laborum enim.
                                </p>
                                <ul className="list-none mt-6">
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                                                <span className="text-green-500 font-semibold inline-block py-1 mr-3">
                                                    <i className="fas fa-dumbbell fa-2x"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg">
                                                    The latest and greatest gym equipment
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                                                <span className="text-green-500 font-semibold inline-block py-1 mr-3">
                                                    <i className="fas fa-hard-hat fa-2x"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg">
                                                    Five inch quality form floor padding
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                                                <span className="text-green-500 font-semibold inline-block py-1 mr-3">
                                                    <i className="fas fa-users fa-2x"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg">
                                                    Three professional trainers
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-20 pb-48 bg-black text-white">
                <div className="container mx-auto px-4 max-w-screen-xl">
                    <div className="flex flex-wrap justify-center text-center mb-24" data-aos="fade-up">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-3xl md:text-4xl font-semibold uppercase">Meet our <span className="text-green-500">trainers</span></h2>
                            <p className="text-lg leading-relaxed m-4">
                                Our trainers are here to dedicate the time and effort that you need to get in the best shape of your life
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="fade-right">
                            <div className="px-6">
                                <img
                                    alt="Steve Rogers"
                                    src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwbWFufGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    className="shadow-lg rounded max-w-full mx-auto"
                                    style={{ maxWidth: "250px" }}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Steve Rogers</h5>
                                    <p className="mt-1 text-sm text-green-500 uppercase font-semibold">
                                        "Train hard or go home"
                                    </p>
                                    <div className="mt-6">
                                        <button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                                        <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                        <button className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                            <i className="fab fa-dribbble"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="zoom-in">
                            <div className="px-6">
                                <img
                                    alt="Aleen Shortcake"
                                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                    className="shadow-lg rounded max-w-full mx-auto"
                                    style={{ maxWidth: "250px" }}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Aleen Shortcake</h5>
                                    <p className="mt-1 text-sm text-green-500 uppercase font-semibold">
                                        "Certified Badass"
                                    </p>
                                    <div className="mt-6">
                                        <button className="bg-green-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                            <i className="fab fa-google"></i>
                                        </button>
                                        <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="fade-left">
                            <div className="px-6">
                                <img
                                    alt="Ron McNeally"
                                    src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                    className="shadow-lg rounded max-w-full mx-auto"
                                    style={{ maxWidth: "250px" }}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Ron McNeally</h5>
                                    <p className="mt-1 text-sm text-green-500 uppercase font-semibold">
                                        "Can't mess with this one"
                                    </p>
                                    <div className="mt-6">
                                        <button className="bg-green-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                            <i className="fab fa-google"></i>
                                        </button>
                                        <button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                                        <button className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                            <i className="fab fa-instagram"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactUs />
        </div>
    );
}
