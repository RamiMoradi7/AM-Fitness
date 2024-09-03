export default function HighlightsSection(): JSX.Element {
    return (<section className="pb-20 bg-black">
        <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="flex flex-wrap">
                <div className="w-full  md:w-4/12 px-4 text-center" data-aos="fade-up">
                    <div className="relative flex flex-col min-w-0 break-words  w-full mb-8 shadow-lg rounded-full transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="px-4 py-5 flex-auto ">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-green-500">
                                <i className="fas fa-award text-2xl"></i>
                            </div>
                            <h6 className="text-xl text-green-400 font-semibold">הדרכה</h6>
                            <p className="mt-2 mb-4 text-gray-300">
                                ביצוע תרגילים בטכניקת עבודה מושלמת ושמירה על הגוף לצד התקדמות.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/12 px-4 text-center" data-aos="fade-up">
                    <div className="relative flex flex-col min-w-0 break-words  w-full mb-8 shadow-lg rounded-full transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-blue-500">
                                <i className="fas fa-retweet text-2xl"></i>
                            </div>
                            <h6 className="text-xl text-blue-400 font-semibold">מעקב צמוד</h6>
                            <p className="mt-2 mb-4 text-gray-300">
                                בעזרת האפליקציה אוכל לראות ולעקוב אחר כל יום אכילה ואימונים באופן אישי.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/12 px-4 text-center" data-aos="fade-up">
                    <div className="relative flex flex-col min-w-0  break-words  w-full mb-8 shadow-lg rounded-full transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-yellow-500">
                                <i className="fas fa-fingerprint text-2xl"></i>
                            </div>
                            <h6 className="text-xl text-yellow-400 font-semibold"> ליווי אישי</h6>
                            <p className="mt-2 mb-4 text-gray-300">
                                מעקב אישי אחר ההתקדמות שלך לשיפור מתמיד.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}