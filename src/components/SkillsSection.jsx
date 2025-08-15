import { useState } from "react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const tabs = ["Education", "Skills", "Experience"];

const educationData = [
  {
    title: "BE",
    subtitle: "Marathwada Mtra Mandal's Institute Of Technology, Pune",
    year: "2023",
    description:
      "Bachelor’s in Computer Science, specializing in software development, algorithms, and modern web technologies. Completed multiple academic projects demonstrating problem-solving and innovative thinking.",
  },
  {
    title: "HSC",
    subtitle: "Keshavraj Mahavidyalaya, Latur",
    year: "2016 - 2018",
    description:
      "Higher Secondary Certificate in Science with a focus on Physics, Chemistry, and Mathematics. Developed analytical skills and a strong foundation for engineering studies.",
  },
  {
    title: "SSC",
    subtitle: "Anjani Prashala, Naldurg",
    year: "2016",
    description:
      "Successfully completed Secondary School Certificate with distinction, building a strong academic base and interest in technology and problem-solving.",
  },
];


  const skillsData = [
  {
    title: "Python",
    subtitle: "Programming Language",
    year: "★★★☆☆",
    description: "Solid foundation in Python for backend development, scripting, and automation.",
  },
  {
    title: "JavaScript",
    subtitle: "Programming Language",
    year: "★★★★☆",
    description: "Strong skills in JavaScript for web development and interactive UI components.",
  },
  {
    title: "React",
    subtitle: "Frontend Framework",
    year: "★★★☆☆",
    description: "Proficient in building dynamic and responsive web apps using React.",
  },
  {
    title: "Node.js",
    subtitle: "Backend Runtime",
    year: "★★★☆☆",
    description: "Experience in developing scalable backend services and APIs using Node.js.",
  },
];


  const experienceData = [
    {
      title: "Freelancing",
      subtitle: "Freelance Designer & Developer",
      year: "2020 - Present",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thsinquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
      progress: 20,
    },
    
  ];

  const renderContent = () => {
    let data;
    if (activeTab === "Education") data = educationData;
    if (activeTab === "Skills") data = skillsData;
    if (activeTab === "Experience") data = experienceData;

    return (
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {data.map((item, idx) => (
          <div key={idx} className="bg-[#0d1117] p-6 rounded-lg border border-gray-800">
            <p className="text-green-400 font-medium">» {item.title}</p>
            <h3 className="text-xl font-bold mt-2">{item.subtitle}</h3>
            <p className="text-gray-400 text-sm mb-4">{item.year}</p>
            <p className="text-gray-400">{item.description}</p>
            {item.progress !== undefined && (
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-1">Performance</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-400 h-2 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-[#02050A] text-white py-20">
      <div className="container mx-auto px-6 justify-center items-center text-center">
        <p className="text-green-400 font-medium mb-2">MY SKILLS</p>
        <h2 className="text-4xl font-bold leading-snug mb-8">
          Crafting Stories through Design and Imagination
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-md font-medium transition ${
                activeTab === tab
                  ? "bg-green-400 text-black"
                  : "bg-[#1a1f27] text-white hover:bg-green-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {renderContent()}
      </div>
    </section>
  );
};

export default SkillsSection;
