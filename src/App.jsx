import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services"; // ✅ fixed name
import SkillsSection from "./components/SkillsSection.jsx";
import PortfolioSection from "./components/PortfolioSection.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="bg-[#02050A] text-white flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="sticky top-0 w-1/5 h-screen">
        <Sidebar />
      </div>

      {/* Scrollable Content */}
      <div className="w-4/5 overflow-y-auto">
        <Home />
        <AboutMe />
        <Services />
        <SkillsSection/>
        <PortfolioSection/> {/* ✅ fixed name */}
        <Contact/>
      </div>
    </div>
  );
}

export default App;
