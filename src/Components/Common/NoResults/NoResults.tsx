import { useSelector } from "react-redux"
import { selectAuthState } from "../../../Redux/AuthSlice"


export default function NoResults(): JSX.Element {
    const { firstName } = useSelector(selectAuthState).user;

    return (
        <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg shadow-md border border-gray-300">
            <p className="text-xl font-bold text-gray-800 mb-2">
                {firstName}, בשלב זה לא נמצאו נתונים מתאימים עבורך.
            </p>
        </div>
    )
}