import { useNavigate } from "react-router-dom"

type SidebarProps = {
    sidebarOpen: boolean
    toggleSidebar: () => void
    activeSection: string
}

export default function SideBar({ sidebarOpen, toggleSidebar, activeSection }: SidebarProps): JSX.Element {
    const navigate = useNavigate()

    const handleClick = (section: string) => {
        navigate(`/admin-dashboard/${section}`)
        toggleSidebar()
    }

    const sidebarItems = [
        {
            title: "הוספת משתמש חדש",
            icon: <div>+</div>,
            section: "new-user"
        },
        {
            title: "לקוחות שיצרו קשר",
            icon: (
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
            ),
            section: "contacts"
        },
        {
            title: "משתמשים",
            icon: (
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
            ),
            section: "users"
        },
        {
            title: "תוכניות אימון",
            icon: (
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                </svg>
            ),
            section: "training-programs"
        }
    ]

    return (
        <aside
            id="sidebar"
            className={`fixed top-0 left-0 z-20 h-full mt-24 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:flex lg:flex-shrink-0 lg:w-64`}
            aria-label="Sidebar"
        >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div className="flex-1 flex flex-col mt-20 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 bg-white divide-y space-y-1">
                        <ul className="space-y-2 pb-2">
                            {sidebarItems.map((item, index) => (
                                <li key={index}>
                                    <div className={`text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group ${activeSection === item.section ? "bg-gray-200" : ""}`}
                                        onClick={() => handleClick(item.section)}>
                                        {item.icon}
                                        <span className="ml-3">{item.title}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-2 pt-2">
                            {/* Additional sidebar items */}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
