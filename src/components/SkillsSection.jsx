import { useState } from "react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const tabs = ["Education", "Biography", "Experience"];

  const educationData = [
    {
      title: "MBA",
      subtitle: "University of Dhaka",
      year: "2009 - 2012",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thsinquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
    },
    {
      title: "HSC",
      subtitle: "Govt Bangala College",
      year: "2007 - 2009",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thsinquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
    },
    {
      title: "SSC",
      subtitle: "Govt Bangala College",
      year: "2005 - 2007",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thsinquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
    },
  ];

  const biographyData = [
    {
      title: "MBA",
      subtitle: "University of Dhaka",
      year: "2009 - 2012",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thsinquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
    },
    {
      title: "BBA",
      subtitle: "University of Dhaka",
      year: "2009 - 2012",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thsinquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
    },
  ];

  const experienceData = [
    {
      title: "Creative Agency",
      subtitle: "Framer Designer & Developer",
      year: "2019 - Present",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thsinquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
      progress: 20,
    },
    {
      title: "Apple Technology",
      subtitle: "Web Application Manager",
      year: "2009 - 2012",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thsinquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
      progress: 80,
    },
  ];

  const renderContent = () => {
    let data;
    if (activeTab === "Education") data = educationData;
    if (activeTab === "Biography") data = biographyData;
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
