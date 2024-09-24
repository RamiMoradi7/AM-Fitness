import { useSelector } from "react-redux";
import { selectAuthState } from "../Redux/AuthSlice";
import { useState } from "react";
import { SectionTypes } from "../pages/UserDashboard";

export const useUserDashboard = () => {
  const { user } = useSelector(selectAuthState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [section, setSection] = useState<SectionTypes>(() => {
    const savedSection = localStorage.getItem("userDashboardSection");
    return savedSection ? (savedSection as SectionTypes) : "proggress";
  });

  const toggleSection = (section: SectionTypes) => {
    setSection(section);
    localStorage.setItem("userDashboardSection", section);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return {
    user,
    isModalOpen,
    section,
    toggleModal,
    toggleSection,
  };
};
