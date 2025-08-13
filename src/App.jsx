import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import SkillsSection from "./components/SkillsSection.jsx";
import PortfolioSection from "./components/PortfolioSection.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="bg-[#02050A] text-white flex h-screen overflow-hidden">
      {/* Sidebar - hidden on mobile, fixed on desktop */}
      <div className="hidden md:block sticky top-0 h-screen w-64">
        <Sidebar />
      </div>

      {/* Scrollable Content */}
      <div className="w-full md:w-[calc(100%-16rem)] overflow-y-auto">
        <Home />
        <AboutMe />
        <Services />
        <SkillsSection />
        <PortfolioSection />
        <Contact />
      </div>
    </div>
  );
}

export default App;
