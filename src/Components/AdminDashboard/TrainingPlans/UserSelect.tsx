import { Control } from "react-hook-form"
import { TrainingPlan } from "../../../Models/TrainingPlan"
import { User } from "../../../Models/User"
import { Status } from "../../../hooks/useFetch"

type UserSelectProps = {
    control: Control<TrainingPlan>
    users: User[]
    status: Status

}

export default function UserSelect({ users, control, status }: UserSelectProps): JSX.Element {

    return (<>
        <label className="block text-gray-700 font-semibold mb-2">בחר משתמש</label>
        <select
            defaultValue=""
            {...control.register("user")}
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="" disabled>{status === "loading" ? "טוען..." : "בחר משתמש"}</option>
            {users?.map((user) => <option key={user._id} value={user._id}>{user.firstName}</option>)}
            {status === "error" && <option value="err">אירעה שגיאה, נסה שנית מאוחר יותר.</option>}
        </select>
    </>)
}