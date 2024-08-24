import { useSelector } from "react-redux"
import { selectIsAuthenticated } from "../../../Redux/AuthSlice"
import { Navigate, useLocation } from "react-router-dom"

type ProtectedRouteProps = {
    element: JSX.Element
}


export default function ProtectedRoute({ element }: ProtectedRouteProps): JSX.Element {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to={"/auth"} state={{ from: location }} replace />
    }

    return element


}