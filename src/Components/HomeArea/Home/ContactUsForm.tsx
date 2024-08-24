import { useForm } from "react-hook-form"
import { contactUsService } from "../../../Services/ContactUsService";
import toast from "react-hot-toast";
import Input from "../../Auth/Input";

export interface ContactFormValues {
    fullName: string;
    email: string;
    phone: string
    message: string
}
export default function ContactUsForm(): JSX.Element {
    const { control, handleSubmit, reset } = useForm<ContactFormValues>()
    const handleSubmitForm = async (formData: ContactFormValues) => {
        try {
            console.log(formData)
            await contactUsService.handleContactForm(formData)
            toast.success("הטופס נשלח בהצלחה!")
            reset()

        } catch (err: any) {
            const errorMessage = err?.response?.data.message || err.message || 'Failed to send email';
            toast.error(errorMessage)
        }
    }

    return (<div className="w-full lg:w-6/12 px-4">
        <form onSubmit={handleSubmit(handleSubmitForm)} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-500 opacity-75 text-white" data-aos="zoom-in-up">
            <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">מעוניינ/ת להצטרף אליי?</h4>
                <p className="leading-relaxed mt-1 mb-4">
                    מלאו את הטופס הזה ואחזיר לכם תשובה תוך 24 שעות.
                </p>

                <div className="relative w-full mb-3 mt-8">
                    <label className="block uppercase text-xs font-bold mb-2" htmlFor="full-name">
                        שם מלא
                    </label>
                    <Input control={control} name="fullName" placeholder="שמך המלא" type="text" />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-xs font-bold mb-2" htmlFor="email">
                        אימייל
                    </label>
                    <Input control={control} name="email" placeholder="אימייל" type="email" />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-xs font-bold mb-2" htmlFor="phone">
                        נייד
                    </label>
                    <Input control={control} name="phone" placeholder="טלפון נייד" type="text" />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-xs font-bold mb-2" htmlFor="message">
                        הודעה
                    </label>
                    <Input control={control} name="message" type="textarea" aria-rowspan={4} aria-colspan={80} placeholder="השאר/י הודעה ואחזור אליך בהקדם" />
                </div>

                <div className="text-center mt-6">
                    <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit" style={{ transition: "all 0.15s ease 0s" }}>
                        שלח
                    </button>
                </div>
            </div>
        </form>
    </div>)
}