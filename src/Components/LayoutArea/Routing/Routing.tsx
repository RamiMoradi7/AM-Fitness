import { Route, Routes } from "react-router-dom";
import App from "../../App/App";
import Login from "../../../pages/Login";
import Home from "../../HomeArea/Home/Home";
import Page404 from "../page404/page404";
import ProtectedRoute from "./ProtectedRoute";
import ResetPassword from "../../Auth/ResetPassword";
import AdminDashboard from "../../AdminDashboard/AdminDashboard";

type RouteProps = {
    path: string
    element: JSX.Element
    isProtected?: boolean
    requiredRole?: number
}

function Routing(): JSX.Element {
    const routes: RouteProps[] = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/home',
            element: <Home />,
        },
        {
            path: '/admin-dashboard/*',
            element: <AdminDashboard />,
            isProtected: true,
            requiredRole: 1
        },
        {
            path: '/application',
            element: <App />,
            isProtected: true,
        },
        {
            path: '/auth',
            element: <Login />,
        },
        {
            path: '/reset-password',
            element: <ResetPassword />,
        },
        {
            path: '*',
            element: <Page404 />,
        }
    ];


    return (
        <div className="min-h-screen">
            <Routes>
                {routes.map(({ path, element, isProtected, requiredRole }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            isProtected ? (
                                <ProtectedRoute element={element} requiredRole={requiredRole} />
                            ) : (
                                element
                            )
                        }
                    />
                ))}
            </Routes>
        </div>
    );
}

export default Routing;
