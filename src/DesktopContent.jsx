import Navbar from "./components/Navbar";
import NavbarSticky from "./components/NavbarSticky";
import Hero from "./components/Hero";
import HistoryPage from "./components/HistoryPage";
import ClimbPage from "./components/ClimbPage";
import Footer from "./components/Footer";

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
