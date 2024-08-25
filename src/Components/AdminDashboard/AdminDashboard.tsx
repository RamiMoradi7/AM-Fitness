import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import ContactList from './ContactList';
import DashboardHeader from './DashboardHeader';
import NewUser from './NewUser';
import SideBar from './Sidebar';
import UserList from './UserList';

export default function AdminDashboard(): JSX.Element {
    useTitle("Admin Dashboard")
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("contacts")
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const location = useLocation();


    useEffect(() => {
        if (location.pathname.startsWith("/admin-dashboard/user/")) {
            setActiveSection("selected-user");
        } else {
            switch (location.pathname) {
                case "/admin-dashboard/contacts":
                    setActiveSection("contacts");
                    break;
                case "/admin-dashboard/users":
                    setActiveSection("users");
                    break;
                case "/admin-dashboard/training-programs":
                    setActiveSection("training-programs");
                    break;
                case "/admin-dashboard/new-user":
                    setActiveSection("new-user");
                    break;
                default:
                    setActiveSection("contacts");
            }
        }
    }, [location.pathname]);

    const renderContent = () => {
        return (
            <>
                {activeSection === "contacts" && <ContactList />}
                {activeSection === "users" && <UserList />}
                {activeSection === "training-programs" && <div>Training Programs Content</div>}
                {activeSection === "new-user" && <NewUser />}
                {activeSection === "selected-user" && <div>פרטים אישיים</div>}
            </>
        );
    };


    return (
        <div className="h-screen flex overflow-hidden bg-gray-50 mt-24">
            <DashboardHeader sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <SideBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} activeSection={activeSection} />
            <div className={`bg-gray-900 opacity-50 fixed lg:hidden inset-0 z-10 transition-opacity duration-300 ${sidebarOpen ? 'block' : 'hidden'}`} id="sidebarBackdrop"></div>
            <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                <main>
                    <div className="mt-24 px-4">
                        <div className="w-full">
                            {renderContent()}
                        </div>
                    </div>
                </main>
            </div>
        </div >
    );
}
