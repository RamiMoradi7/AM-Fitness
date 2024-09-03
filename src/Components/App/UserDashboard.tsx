import { useSelector } from "react-redux";
import TrainingPlans from "../AdminDashboard/TrainingPlans/TrainingPlans";
import { selectAuthState } from "../../Redux/AuthSlice";
import { useState } from "react";
import Modal from "../Common/Modal";
import EditProfile from "./EditProfile";
import WeeklyFitnessData from "./WeeklyFitnessData";

export default function UserDashboard(): JSX.Element {
    const trainingPlans = useSelector(selectAuthState).user.trainingPlans
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => setIsModalOpen(!isModalOpen)

    return (<>
        <div className="w-full  mx-auto p-4">
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-8">
                    <div className="text-gray-600 text-lg font-semibold">האיזור שלי</div>
                    <div className="flex space-x-4">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100" onClick={toggleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="text-4xl font-thin mb-4">תכניות אימונים</div>
                <TrainingPlans trainingPlans={trainingPlans} />
                {isModalOpen && <Modal children={<EditProfile />} isOpen={isModalOpen} toggleModal={toggleModal} />}
                <WeeklyFitnessData />
            </div>
        </div>
    </>)
}