import { useSelector } from "react-redux"
import { selectUser } from "../../Redux/AuthSlice"
import AdminDashboard from "./AdminDashboard"

export default function App(): JSX.Element {
    const user = useSelector(selectUser)

    return (<><div className="mt-24">{user.roleId === 1 && <AdminDashboard />}</div></>)
}