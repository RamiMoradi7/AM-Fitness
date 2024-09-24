import TrainingPlans from "../Components/AdminDashboard/TrainingPlans/Plans/TrainingPlans";
import DashboardHeader from "../Components/App/DashboardHeader";
import EditProfile from "../Components/App/EditProfile";
import WeeklyFitnessSection from "../Components/App/WeeklyFitnessSection";
import Modal from "../Components/Common/Modal";
import { useTitle } from "../hooks/useTitle";
import { useUserDashboard } from "../hooks/useUserDashboard";

export type SectionTypes = "trainingPlans" | "proggress"

export default function UserDashboard(): JSX.Element {
    useTitle("האיזור שלי");
    const { user, section, toggleSection, toggleModal, isModalOpen, } = useUserDashboard()

    return (
        <div className="w-full mx-auto p-4 overflow-x-hidden" id="my-area">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
                <DashboardHeader
                    user={user}
                    toggleSection={toggleSection}
                    toggleModal={toggleModal}
                    section={section} />

                <div className="mt-4 mb-8 p-2 bg-white rounded-lg shadow-lg">
                    {section === "trainingPlans" && <TrainingPlans user={user} />}
                    {section === "proggress" && <WeeklyFitnessSection />}
                </div>

                {isModalOpen && (
                    <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
                        <EditProfile toggleModal={toggleModal} />
                    </Modal>
                )}
            </div>
        </div >
    );
}
