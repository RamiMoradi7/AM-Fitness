import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../../../pages/AdminDashboard";
import Home from "../../../pages/Home";
import Login from "../../../pages/Login";
import Page404 from "../../../pages/Page404";
import UserDashboard from "../../../pages/UserDashboard";
import EditPlanWeek from "../../AdminDashboard/TrainingPlans/EditPlanWeek";
import ResetPassword from "../../Auth/ResetPassword";
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
            element: <UserDashboard />,
            isProtected: true,
            requiredRole: 2
        },
        {
            path: "/training-programs/edit/:_id/week/:weekId",
            element: <EditPlanWeek />,
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
