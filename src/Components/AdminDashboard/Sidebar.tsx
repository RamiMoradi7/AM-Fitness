import { NavLink } from "react-router-dom"

type SidebarProps = {
    sidebarOpen: boolean
    toggleSidebar: () => void
}

export default function SideBar({ sidebarOpen, toggleSidebar }: SidebarProps): JSX.Element {

    const sidebarItems = [
        {
            title: "הוספת משתמש חדש",
            link: "new-user"
        },
        {
            title: "הוספת תרגיל חדש",
            link: "new-exercise"
        },
        {
            title: "לקוחות שיצרו קשר",
            link: "contacts"
        },
        {
            title: "משתמשים",
            link: "users"
        },
        {
            title: "תרגילים",
            link: "exercises"
        },
        {
            title: "תוכניות אימון",
            link: "training-programs"
        }

    ]

    return (
        <aside
            id="sidebar"
            className={`fixed top-0 left-0 w-2/4 z-20 h-full mt-24 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:flex lg:flex-shrink-0 lg:w-64`}
            aria-label="Sidebar"
        >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div className="flex-1 flex flex-col mt-20 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 bg-white divide-y space-y-1">
                        <ul className="space-y-2 pb-2">
                            {sidebarItems.map((item, index) => (
                                <NavLink key={index} to={`${item.link}`}
                                    className={({ isActive }) =>
                                        `text-base font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group ${isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                                        }`
                                    }
                                    onClick={toggleSidebar}
                                >
                                    {item.title}
                                </NavLink>

                            ))}
                        </ul>
                        <div className="space-y-2 pt-2">
                            {/* Additional sidebar items */}
                        </div>
                    </div>
                </div>
            </div>
        </aside >
    )
}
