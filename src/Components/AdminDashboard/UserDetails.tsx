import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { trainingPlansService } from "../../Services/TrainingPlansService";
import Loader from "../Common/Loader/Loader";
import TrainingPlans from "./TrainingPlans/Plans/TrainingPlans";
import { useSelector } from "react-redux";
import { AppState } from "../../Redux/AppState";

export default function UserDetails(): JSX.Element {
    const { _id } = useParams<{ _id: string }>();
    const { status: plansStatus } = useFetch(() => trainingPlansService.getTrainingPlans(_id));
    const { trainingPlans } = useSelector((appState: AppState) => appState.trainingPlans);
    const trainingPlansArray = Object.values(trainingPlans);

    if (!trainingPlansArray?.length) {
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
            {plansStatus === "loading" && (
                <div className="flex justify-center">
                    <Loader />
                </div>
            )}
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center mt-12">תכניות אימון</h3>
            <TrainingPlans trainingPlans={trainingPlansArray} />
        </div>
    );
}
