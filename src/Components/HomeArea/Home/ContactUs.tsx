import ContactUsForm from "./ContactUsForm";



export default function ContactUs(): JSX.Element {
    return (
        <>
            <section className="pb-20 pt-20 lg:pt-0 relative block bg-black text-white">
                <div className="hidden lg:block bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px" }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon
                            className="text-black fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4 lg:pt-24 lg:pb-64" data-aos="zoom-out-down">
                    <div className="flex flex-wrap text-center justify-center">
                        <div id="contact-us" className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold text-white uppercase"><span className="text-green-500">צרו</span> קשר</h2>
                            <p className="text-lg leading-relaxed mt-4 mb-4">
                                צרו קשר לשאול שאלות, לרכוש מנוי, לדבר איתי או כל דבר אחר.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative block py-24 lg:pt-0 bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                        <ContactUsForm />
                    </div>
                </div>
            </section>
        </>
    )
}