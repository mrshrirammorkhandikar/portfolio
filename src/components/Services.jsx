import { FileText, Cloud, Smartphone } from "lucide-react"; // ✅ added import

const Services = ({ id }) => {
  const serviceCards = [
    {
      icon: <FileText size={40} />,
      title: "WEBSITE DESIGN",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      icon: <Cloud size={40} />,
      title: "LOGO DESIGN",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "APPS DEVELOPMENT",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
  ];

  return (
    <section id={id} className="min-h-screen bg-[#02050A] text-white py-20 flex items-center justify-center">
      {/* ...your same content */}
      <div className="container mx-auto px-6 lg:px-24 text-center">
        <p className="text-[#00ff94] font-medium mb-2">MY SERVICE</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto mb-16">
          Bringing your vision to life with precision and passion
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#151C25] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[#00ff94]/20 p-5 rounded-lg text-[#00ff94]">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
