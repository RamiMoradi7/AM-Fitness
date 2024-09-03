import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home";
import Login from "../../../pages/Login";
import AdminDashboard from "../../AdminDashboard/AdminDashboard";
import App from "../../App/App";
import ResetPassword from "../../Auth/ResetPassword";
import Page404 from "../page404/page404";
import ProtectedRoute from "./ProtectedRoute";

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
    );
}

export default Routing;
