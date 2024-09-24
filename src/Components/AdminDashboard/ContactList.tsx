import { useFetch } from "../../hooks/useFetch";
import { contactUsService } from "../../Services/ContactUsService";
import Error from "../Common/Error/Error";
import Loader from "../Common/Loaders/Loader";



const ContactList: React.FC = () => {
    const { data: contacts, status } = useFetch(contactUsService.getContacts)

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">אנשים שהשאירו לך הודעה</h2>
            {status === "loading" && <Loader />}
            {status === "error" && <Error />}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contacts?.map((contact) => (
                    <div key={contact.createdAt.toString()} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{contact.fullName}</h3>
                            <p className="text-gray-600 mb-2"><strong>אימייל:</strong> {contact.email}</p>
                            <p className="text-gray-600 mb-2"><strong>טלפון:</strong> {contact.phone}</p>
                            <p className="text-gray-600 mb-2"><strong>הודעה:</strong> {contact.message}</p>
                            <p className="text-gray-500 text-sm mt-4">התקבל בתאריך: {new Date(contact.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;