import { useForm } from "react-hook-form";
import { User } from "../../Models/User";
import { usersService } from "../../Services/UsersService";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../Redux/AuthSlice";
import { useState } from "react";
import toast from "react-hot-toast";

export default function EditProfile(): JSX.Element {
    const { handleSubmit, register } = useForm<User>();
    const { _id, imageUrl } = useSelector(selectAuthState).user;
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const updateUser = async (user: User) => {
        try {
            user._id = _id;
            user.image = selectedFile;
            await usersService.editUser(user);
        } catch (error: any) {
            const errMsg = error.response?.data || "שגיאה התרחשה במהלך עדכון משתמש.";
            toast.error(errMsg)
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">ערוך פרופיל</h2>
            <form onSubmit={handleSubmit(updateUser)} className="space-y-4">
                <div className="flex justify-center mb-4">
                    <div className="relative">
                        <img
                            src={selectedFile ? URL.createObjectURL(selectedFile) : imageUrl}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                        />
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    עדכן
                </button>
            </form>
        </div>
    );
}
