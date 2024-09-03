import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import ContactList from './ContactList';
import DashboardHeader from './DashboardHeader';
import NewUser from './NewUser';
import SideBar from './Sidebar';
import UserList from './UserList';
import UserDetails from './UserDetails';
import Exercises from './Exercises/Exercises';
import AddTrainingPlan from './TrainingPlans/AddTrainingPlan';
import EditTrainingPlan from './TrainingPlans/EditTrainingPlan';
import AddExercise from './Exercises/AddExercise';
import EditExercise from './Exercises/EditExercise';

export default function AdminDashboard(): JSX.Element {
    useTitle("Admin Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);


    return (
        <div className="min-h-screen flex overflow-hidden bg-gray-50 mt-24">
            <DashboardHeader sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <SideBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`bg-gray-900 opacity-50 fixed lg:hidden inset-0 z-10 transition-opacity duration-300 ${sidebarOpen ? 'block' : 'hidden'}`} id="sidebarBackdrop"></div>
            <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto">
                <main>
                    <div className="mt-24 px-4">
                        <div className="w-full">
                            <Routes>
                                <Route path="contacts" element={<ContactList />} />
                                <Route path="users" element={<UserList />} />
                                <Route path="exercises" element={<Exercises />} />
                                <Route path="exercises/edit/:_id" element={<EditExercise />} />
                                <Route path="training-programs" element={<AddTrainingPlan />} />
                                <Route path="training-programs/edit/:_id" element={<EditTrainingPlan />} />
                                <Route path="new-user" element={<NewUser />} />
                                <Route path="new-exercise" element={<AddExercise />} />
                                <Route path="user/:_id" element={<UserDetails />} />
                                <Route path="*" element={<ContactList />} />
                            </Routes>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
