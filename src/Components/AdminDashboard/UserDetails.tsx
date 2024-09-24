import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { usersService } from "../../Services/UsersService";
import Error from "../Common/Error/Error";
import Loader from "../Common/Loaders/Loader";
import TrainingPlans from "./TrainingPlans/Plans/TrainingPlans";

export default function UserDetails(): JSX.Element {
    const { _id } = useParams<{ _id: string }>();
    const { data: user, status } = useFetch(() => usersService.getUser(_id), _id)

    if (status === "loading") return <Loader />
    if (status === "error") return <Error />

    if (!user?.trainingPlans.length && status !== "idle") {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 shadow-lg rounded-lg text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">אין תוכנית אימונים</h3>
                    <p className="text-gray-600 text-lg">
                        למשתמש זה אין תוכנית אימונים זמינה בשלב זה.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="py-8 px-4 md:px-12 lg:px-16 bg-gray-100  min-h-screen">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center mt-12">תכניות אימון</h3>
            <TrainingPlans user={user} />
        </div>
    );
}
