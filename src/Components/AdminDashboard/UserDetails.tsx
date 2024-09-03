import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { usersService } from "../../Services/UsersService";
import Loader from "../Common/Loader/Loader";
import TrainingPlans from "./TrainingPlans/TrainingPlans";

export default function UserDetails(): JSX.Element {
    const { _id } = useParams<{ _id: string }>();
    const { data: user, status } = useFetch(() => usersService.getUser(_id));

    if (status === 'loading') return <Loader />;
    if (!user) return <div className="text-center text-gray-700 text-lg">No user found</div>;
    if (!user.trainingPlans.length) return <div className="text-center text-gray-700 text-lg">למשתמש זה אין תוכנית אימונים.</div>;

    return (
        <div className="py-8 px-8 bg-gray-100 min-h-screen">
            <TrainingPlans trainingPlans={user?.trainingPlans} />
        </div>
    );
}
