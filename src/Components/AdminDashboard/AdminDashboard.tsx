import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import ContactList from './ContactList';
import DashboardHeader from './DashboardHeader';
import AddExercise from './Exercises/AddExercise';
import EditExercise from './Exercises/EditExercise';
import Exercises from './Exercises/Exercises';
import NewUser from './NewUser';
import SideBar from './Sidebar';
import AddTrainingPlan from './TrainingPlans/AddTrainingPlan';
import UserDetails from './UserDetails';
import UserList from './UserList';

export default function AdminDashboard(): JSX.Element {
    useTitle("Admin Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);


    return (
        <div className="min-h-screen flex overflow-hidden bg-gray-50 mt-12">
            <DashboardHeader sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <SideBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`bg-gray-900 opacity-50 fixed lg:hidden inset-0 z-10 transition-opacity duration-300 ${sidebarOpen ? 'block' : 'hidden'}`} id="sidebarBackdrop"></div>
            <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto">
                <main>
                    <div className="mt-16 px-4">
                        <div className="w-full">
                            <Routes>
                                <Route path="contacts" element={<ContactList />} />
                                <Route path="users" element={<UserList />} />
                                <Route path="exercises" element={<Exercises />} />
                                <Route path="exercises/edit/:_id" element={<EditExercise />} />
                                <Route path="training-programs" element={<AddTrainingPlan />} />
                                <Route path="new-user" element={<NewUser />} />
                                <Route path="new-exercise" element={<AddExercise />} />
                                <Route path="user/:_id" element={<UserDetails />} />
                                <Route path="*" element={<Navigate to={"/admin-dashboard/contacts"} replace />} />
                            </Routes>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
