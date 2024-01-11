import Navbar from "./Navbar";
import NavbarSticky from "./NavbarSticky";
import Hero from "./Hero";
import HistoryPage from "./HistoryPage";
import ClimbPage from "./ClimbPage";
import Footer from "./Footer";

const DesktopContent = ({ isSticky }) => {
  return (
    <>
      {isSticky ? <NavbarSticky /> : <Navbar />}
      <Hero />
      <HistoryPage />
      <ClimbPage />
      <Footer />
    </>
  );
};

export default DesktopContent;
