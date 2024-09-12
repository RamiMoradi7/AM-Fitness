import beforeAfter from "../../../Assets/Images/before-after.jpg"

export default function About(): JSX.Element {

    return (
        <section className="bg-black">
            <div className="flex flex-wrap items-center">
                <div id='about' className="w-full md:w-5/12 px-4 mr-auto ml-auto" data-aos="fade-left">

                    <h3 className="mt-8 text-3xl md:text-4xl text-green-500 mb-2 font-semibold leading-normal">
                        הסיפור שלי                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                        אי פעם חלמתם על גוף בריא, חזק, חטוב ובאחוז שומן נמוך?<br />
                        גם אני! והגשמתי את החלום.<br />
                        שמי מתן עמרני, ואני גאה לשתף שירדתי 59 ק"ג.<br />
                        כיום אני מאמן כושר המתמחה בתהליכי חיטוב וירידה במשקל,<br />
                        ואם אתם חולמים לעבור תהליך כזה בעצמכם - אני בטוח שהסטודיו שלי הוא הכתובת שלכם.<br />
                        למה אני כל כך בטוח?<br />
                        כי בסטודיו שלי תקבלו ליווי אישי עד להשגת המטרה:<br />
                        ✅ אימונים אישיים עם תוכנית אימונים מותאמת בדיוק למטרות שלכם.<br />
                        ✅ מסגרת תזונתית גמישה במיוחד - ללא וויתורים כלל! אפשר לאכול בחוץ, ליהנות ממגוון סוגי מזון, ולשמור על ארוחות משפחתיות.<br />
                        ✅ פגישות מעקב הכוללות לקיחת היקפי גוף, מעקב תמונות, שקילות גוף ומעקבים תזונתיים.<br />
                        ✅ תמיכה וליווי צמוד לכל אורך התהליך, עם מענה לכל שאלה שתהיה, כך שלא תצטרכו לחכות לפגישות שלנו עם שאלות לא פתורות.<br />
                        ✅ והכי חשוב - תצאו מהתהליך עם כלים שיישארו איתכם לכל החיים - כלים שיסייעו לכם לשמר אורח חיים חטוב אחת ולתמיד.<br />
                        חושבים שכל זה יכול להביא אתכם אל המטרה שלכם?<br />
                        אני לא חושב, אני בטוח - מנסיון!<br />
                        אם אתם מעוניינים לדבר איתי, אני מזמין אתכם לפגישת ייעוץ חינמית על כוס קפה בסטודיו שלי,<br />
                        כך שתוכלו לראות את המסגרת, לשאול שאלות ולקבל תשובות.<br />
                    </p>
                    <div className="font-bold text-green-500 mt-8">אז למה אתם מחכים? הרשמו עכשיו!</div>
                </div>
                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto" data-aos="fade-left">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-500">
                        <img
                            alt="before and after"
                            src={beforeAfter}
                            className="w-full h-auto align-middle rounded-t-lg"
                        />
                        <blockquote className="relative p-8 mb-4">
                            <svg
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 583 95"
                                className="absolute left-0 w-full block"
                                style={{ height: "95px", top: "-94px" }}
                            >
                                <polygon
                                    points="-30,95 583,95 583,65"
                                    className="text-green-500 fill-current"
                                ></polygon>
                            </svg>
                            <h4 className="text-xl font-bold text-black">
                                השאירו פרטים ואחזור אליכם
                            </h4>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>

    )
}