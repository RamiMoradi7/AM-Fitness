import { useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { useValidateToken } from '../../hooks/useValidateToken';
import Input from './Input';
import { useResetPasswordForm } from '../../hooks/useResetPasswordForm';


export default function ResetPassword(): JSX.Element {
    useTitle("איפוס סיסמא")
    const { isValid, status, token } = useValidateToken()
    const { handleSubmit, control, isSubmitting, errors,handleResetPassword } = useResetPasswordForm({ token })
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            {isValid && (
                <div className="w-full max-w-md px-6 md:px-8 lg:px-10">
                    <form onSubmit={handleSubmit(handleResetPassword)} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                        <h1 className="text-gray-800 font-bold text-3xl mb-4">איפוס סיסמא</h1>
                        <Input
                            control={control}
                            name='newPassword'
                            type={isHidden ? "password" : "text"}
                            placeholder="סיסמא"
                            error={errors.newPassword?.message}
                        />
                        <Input
                            control={control}
                            name='confirmPassword'
                            type={isHidden ? "password" : "text"}
                            placeholder="חזור שנית על הסיסמא"
                            error={errors.confirmPassword?.message}
                        />
                        <button
                            onClick={() => setIsHidden(prev => !prev)}
                            type="button"
                            className="block w-full bg-green-600 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 text-white font-semibold"
                        >
                            {isHidden ? "הצג סיסמאות" : "הסתר סיסמאות"}
                        </button>
                        <button
                            type="submit"
                            className="block w-full bg-green-600 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 text-white font-semibold"
                        >
                            {isSubmitting ? "טוען..." : "שנה סיסמא"}
                        </button>
                    </form>
                </div>
            )}
            {status === "error" && <div className="text-center text-gray-700">Something went wrong.</div>}
        </div>
    );
}
