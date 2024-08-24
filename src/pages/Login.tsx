import { useTitle } from "../hooks/useTitle";
import LoginForm from "../Components/Auth/LoginForm";

export default function Login(): JSX.Element {
    useTitle("התחברות")

    return (
        <div className="h-screen flex">
            <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center">
                <div
                    className="bg-black opacity-20 inset-0 z-0">
                </div>
            </div>
            <LoginForm />
        </div>
    );
};

