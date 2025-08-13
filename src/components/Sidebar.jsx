import { Home, User, Briefcase, Code, Image, BookOpen, Phone } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, text: "HOME" },
    { icon: <User size={20} />, text: "ABOUT" },
    { icon: <Briefcase size={20} />, text: "SERVICES" },
    { icon: <Code size={20} />, text: "SKILLS" },
    { icon: <Image size={20} />, text: "PORTFOLIO" },
    { icon: <BookOpen size={20} />, text: "BLOG" },
    { icon: <Phone size={20} />, text: "CONTACT" },
  ];

  return (
    <div className="bg-[#0d1117] text-white h-screen w-64 flex flex-col items-center py-8">
      {/* Logo */}
      <div className="flex flex-col items-center mb-10 bg-[#151C25]">
        <div className="bg-[#00ff94] px-3 py-2 rounded">
          <span className="text-black font-extrabold text-2xl">///</span>
        </div>
        <span className="font-bold text-lg mt-2">TASK</span>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-5 w-full px-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center w-full border border-[#1a1f27] rounded overflow-hidden group transition"
          >
            <div className="bg-[#1b2029] p-3 flex justify-center items-center group-hover:bg-[#00ff94] group-hover:text-black transition">
              {item.icon}
            </div>
            <span className="ml-4 text-sm font-medium group-hover:text-[#00ff94]">
              {item.text}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
