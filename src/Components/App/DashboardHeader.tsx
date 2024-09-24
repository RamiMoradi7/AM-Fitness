import { User } from "../../Models/User";
import { SectionTypes } from "../../pages/UserDashboard";
import defaultUserProfile from "../../Assets/Images/defaultUserProfile.jpg"

type DashboardHeaderProps = {
    user: User
    section: SectionTypes;
    toggleSection: (section: SectionTypes) => void;
    toggleModal: () => void
}

export default function DashboardHeader({ user, section, toggleSection, toggleModal }: DashboardHeaderProps): JSX.Element {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
                <div className="flex items-center mb-4 sm:mb-0 space-x-3">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gray-300 shadow-md transition-transform duration-200 hover:scale-105">
                        <img
                            src={user?.imageUrl || defaultUserProfile}
                            alt="User Profile"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="text-gray-800 text-lg sm:text-xl font-semibold flex items-center">
                        <span className="text-green-500 mr-3">/</span>
                        <span className=" mr-3">{user?.firstName} {user.lastName}</span>
                    </div>
                </div>
                <div className="flex space-x-3 sm:space-x-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>

                    <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none" onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>

                </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 border-[3px] border-green-500 rounded-xl select-none">
                <SectionButton
                    section={section}
                    sectionValue={"trainingPlans"}
                    toggleSection={() => toggleSection("trainingPlans")}
                    title="תוכניות האימונים שלי"
                />
                <SectionButton
                    section={section}
                    sectionValue={"proggress"}
                    toggleSection={() => toggleSection("proggress")}
                    title="מעקב שבועי"
                />
            </div>
        </>
    )
}

type SectionButtonProps = {
    section: SectionTypes;
    sectionValue: SectionTypes
    toggleSection: () => void;
    title: string;
}

function SectionButton({ section, sectionValue, toggleSection, title }: SectionButtonProps) {
    const isChecked = section === sectionValue
    return (
        <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
            <input
                type="radio"
                name="radio"
                value={title}
                className="peer hidden"
                checked={isChecked}
                onChange={toggleSection}
            />
            <span
                className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-green-500 peer-checked:via-green-400 peer-checked:to-green-300 peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out hover:bg-gradient-to-r hover:from-green-400 hover:to-green-300 hover:text-white"
            >
                {title}
            </span>
        </label>
    )
}
