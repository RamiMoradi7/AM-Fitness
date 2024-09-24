import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { User } from "../../Models/User";
import { selectAuthState } from "../../Redux/AuthSlice";
import { usersService } from "../../Services/UsersService";
import Input from "../Auth/Input";

type EditProfileProps = {
    toggleModal: () => void;
}

export default function EditProfile({ toggleModal }: EditProfileProps): JSX.Element {
    const { _id, imageUrl, firstName, lastName } = useSelector(selectAuthState).user;
    const { handleSubmit, control } = useForm<User>({
        defaultValues: {
            firstName,
            lastName
        }
    });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const updateUser = async (user: User) => {
        try {
            user._id = _id;
            user.image = selectedFile;
            await usersService.editUser(user);
            toggleModal();
            toast.success("פרופיל עודכן בהצלחה!");
        } catch (error: any) {
            const errMsg = error.response?.data || "שגיאה התרחשה במהלך עדכון משתמש.";
            toast.error(errMsg);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">ערוך פרופיל</h2>
            <form onSubmit={handleSubmit(updateUser)} className="space-y-6">
                <div className="flex flex-col items-center mb-4">
                    <div className="relative">
                        <img
                            src={selectedFile ? URL.createObjectURL(selectedFile) : imageUrl}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                        />
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>
                </div>
                <Input
                    control={control}
                    placeholder="שם פרטי"
                    name="firstName"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Input
                    control={control}
                    placeholder="שם משפחה"
                    name="lastName"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    עדכן
                </button>
            </form>
        </div>
    );
}
