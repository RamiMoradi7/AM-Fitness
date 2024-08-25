import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../Services/AuthService';
import Input from '../Auth/Input';

interface RegisterUserFormValues {
    firstName: string;
    lastName: string
    email: string
    password: string
    gender: "male" | "female" | "other"
}


const NewUser: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { handleSubmit, formState: { isSubmitting }, control, reset } = useForm<RegisterUserFormValues>()
    const navigate = useNavigate()
    const register = async (newUser: RegisterUserFormValues) => {
        try {
            console.log(newUser)
            await authService.register(newUser)
            toast.success(`${newUser.firstName} התווסף בהצלחה, מנווט לדף משתמשים.`)
            navigate("/admin-dashboard/users")
            reset()

        } catch (err: any) {
            const errMessage = err.response?.data || "Some Error."
            toast.error(errMessage)

        }
    }

    return (
        <div className="bg-gray-200 w-full  flex items-center justify-center">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">יצירת משתמש חדש</h2>
                <form onSubmit={handleSubmit(register)} className="my-8 text-sm">
                    <div className="flex">
                        <div className="flex-1 space-x-2">
                            <label className="text-gray-700">שם פרטי</label>
                            <Input
                                control={control}
                                name='firstName'
                                placeholder='הכנס שם פרטי'
                                type='text' />
                        </div>
                        <div className="flex-1">
                            <label className="text-gray-700">שם משפחה</label>
                            <Input
                                control={control}
                                name='lastName'
                                placeholder='הכנס שם משפחה'
                                type='text' />
                        </div>
                    </div>
                    <div className="flex flex-col my-4">
                        <label className="text-gray-700">כתובת אימייל</label>
                        <Input
                            control={control}
                            name='email'
                            placeholder='הכנס כתובת אימייל'
                            type='email' />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="password" className="text-gray-700">סיסמא</label>
                        <div className="relative flex items-center mt-2">
                            <Input
                                name='password'
                                className='flex-1 p-2 border pr-10 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900'
                                placeholder='הכנס סיסמא'
                                control={control} type={showPassword ? "text" : "password"}

                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-2.5 right-2 bg-transparent flex items-center justify-center text-gray-700"
                            >
                                {!showPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="gender" className="text-gray-700">מין</label>
                            <select
                                name="gender"
                                id="gender"
                                defaultValue={""}
                                {...control.register("gender")}
                                className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            >
                                <option disabled value={""}>בחר מין</option>
                                <option value={"male"}>זכר</option>
                                <option value={"female"}>נקבה</option>
                                <option value={"other"}>אחר</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-4 flex items-center justify-end space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 text-white">{isSubmitting ? "שולח..." : "שלח"}</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default NewUser;
