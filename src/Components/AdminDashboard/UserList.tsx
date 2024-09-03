import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { usersService } from "../../Services/UsersService";
import Error from "../Common/Error/Error";
import Loader from "../Common/Loader/Loader";

const UserList: React.FC = () => {
    const { data: users, status } = useFetch(usersService.getUsers);
    const navigate = useNavigate();
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">משתמשים</h2>
            {status === "loading" && <Loader />}
            {status === "error" && <Error />}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users?.map((user) => (
                    <div
                        onClick={() => navigate(`/admin-dashboard/user/${user._id}`)}
                        key={user._id}
                        className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 ease-in-out"
                    >
                        <div className="flex items-center p-6">
                            <img
                                src={user.imageUrl || "https://via.placeholder.com/150"}
                                alt={`${user.firstName} ${user.lastName}`}
                                className="w-24 h-24 rounded-full mr-4"
                            />
                            <div className=" mr-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                    {user.firstName} {user.lastName}
                                </h3>
                                <p className="text-gray-600 mb-1">
                                    <strong>אימייל:</strong> {user.email}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    התווסף בתאריך: {new Date(user.createdAt).toLocaleDateString()}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    נראה לאחרונה: {new Date(user.lastLogin).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
