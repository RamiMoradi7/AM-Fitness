import { useSelector } from "react-redux"
import { useFetch } from "../../hooks/useFetch"
import { fitnessDataService } from "../../Services/FitnessDataService"
import { selectAuthState } from "../../Redux/AuthSlice"

export default function WeeklyFitnessData(): JSX.Element {
    const user = useSelector(selectAuthState).user
    const { data: weeklyFitnessData } = useFetch(() => fitnessDataService.getRecentWeekFitnessData(user?._id))

    console.log(weeklyFitnessData)

    return (<></>)
}