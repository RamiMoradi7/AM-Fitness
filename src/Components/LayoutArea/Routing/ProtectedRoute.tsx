import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { selectAuthState } from "../../../Redux/AuthSlice"

type ProtectedRouteProps = {
    element: JSX.Element
    requiredRole?: number
}


export default function ProtectedRoute({ element, requiredRole }: ProtectedRouteProps): JSX.Element {
    const { isAuthenticated, user } = useSelector(selectAuthState)
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to={"/auth"} state={{ from: location }} replace />
    }
    
    if (requiredRole && user.roleId !== requiredRole) {
        return <Navigate to={"/"} replace />
    }

    return element


}