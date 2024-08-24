import { Route, Routes } from "react-router-dom";
import App from "../../App/App";
import Login from "../../../pages/Login";
import Home from "../../HomeArea/Home/Home";
import Page404 from "../page404/page404";
import ProtectedRoute from "./ProtectedRoute";
import ResetPassword from "../../Auth/ResetPassword";

type RouteProps = {
    path: string
    element: JSX.Element
    isProtected?: boolean
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
            path: '/application',
            element: <App />,
            isProtected: true
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
                {routes.map(({ path, element, isProtected }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            isProtected ? (
                                <ProtectedRoute element={element} />
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
