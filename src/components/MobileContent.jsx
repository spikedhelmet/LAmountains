import { useState } from "react";
import Footer from "./Footer";
import MobileClimbPage from "./MobileClimbPage";
import MobileHero from "./MobileHero";
import MobileHistoryPage from "./MobileHistoryPage";
import MobileNavbar from "./MobileNavbar";

const MobileContent = () => {
  const [openSection, setOpenSection] = useState("#");

  const handleSectionClick = (sectionId) => {
    setOpenSection(sectionId);
  };

  return (
    <>
      <MobileNavbar handleSectionClick={handleSectionClick} />
      <MobileHero openSection={openSection} />
      <MobileHistoryPage openSection={openSection} />
      <MobileClimbPage openSection={openSection} />
      <Footer />
    </>
  );
};

export default MobileContent;
