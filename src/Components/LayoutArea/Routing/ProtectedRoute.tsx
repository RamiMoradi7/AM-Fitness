import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { selectAuthState } from "../../../Redux/AuthSlice";
import Loader from "../../Common/Loaders/Loader";
import { useEffect } from "react";
import { authService } from "../../../Services/AuthService";

type ProtectedRouteProps = {
    element: JSX.Element;
    requiredRole?: number;
};

export default function ProtectedRoute({ element, requiredRole }: ProtectedRouteProps): JSX.Element {
    const { isAuthenticated, user, isLoading } = useSelector(selectAuthState);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        authService.initializeUserFromSession()
            .catch((err: any) => {
                console.log(err);
                navigate("/403")
            })
    }, [])

    if (isLoading || (!isAuthenticated && user === null)) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <Loader />
            </div>
        );
    }


    if (!isAuthenticated) {
        return <Navigate to={"/auth"} state={{ from: location }} replace />;
    }


    if (requiredRole && user.roleId !== requiredRole) {
        return <Navigate to={"/"} replace />;
    }

    return element;
}
