import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import DashboardHeader from '../Components/AdminDashboard/DashboardHeader';
import SideBar from '../Components/AdminDashboard/Sidebar';
import ContactList from '../Components/AdminDashboard/ContactList';
import UserList from '../Components/AdminDashboard/UserList';
import Exercises from '../Components/AdminDashboard/Exercises/Exercises';
import EditExercise from '../Components/AdminDashboard/Exercises/EditExercise';
import EditTrainingPlan from '../Components/AdminDashboard/TrainingPlans/EditTrainingPlan';
import AddTrainingPlan from '../Components/AdminDashboard/TrainingPlans/AddTrainingPlan';
import AddExercise from '../Components/AdminDashboard/Exercises/AddExercise';
import NewUser from '../Components/AdminDashboard/NewUser';
import UserDetails from '../Components/AdminDashboard/UserDetails';

export default function AdminDashboard(): JSX.Element {
    useTitle("ממשק מנהל");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div id='admin-dashboard' className="min-h-screen flex bg-gray-100">
            {/* Header */}
            <DashboardHeader sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Sidebar */}
            <SideBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />


            {/* Main Content */}
            <div id="main-content" className="flex-1 flex flex-col relative z-10 overflow-y-auto transition-all duration-300 bg-white">
                <main className="flex-1 p-6 lg:p-8">
                    {/* Top margin to avoid overlap with fixed header */}
                    <div className="mt-16">
                        <Routes>
                            <Route path="contacts" element={<ContactList />} />
                            <Route path="users" element={<UserList />} />
                            <Route path="exercises" element={<Exercises />} />
                            <Route path="exercises/edit/:_id" element={<EditExercise />} />
                            <Route path="training-plans/edit/:_id" element={<EditTrainingPlan />} />
                            <Route path="training-programs" element={<AddTrainingPlan />} />
                            <Route path="new-user" element={<NewUser />} />
                            <Route path="new-exercise" element={<AddExercise />} />
                            <Route path="user/:_id" element={<UserDetails />} />
                            <Route path="*" element={<Navigate to={"/admin-dashboard/users"} replace />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    );
}
