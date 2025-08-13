import { FaRegLightbulb, FaTrophy } from "react-icons/fa";
import aboutImage from "../assets/images/My-Image-sec2.png";

const AboutMe = () => {
  return (
    <section className="bg-[#02050A] text-white py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left content */}
        <div>
          <p className="text-green-400 font-medium mb-2">ABOUT ME</p>
          <h2 className="text-4xl font-bold leading-snug mb-10">
            Crafting stories through design and innovation
          </h2>

          {/* Ambition */}
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-green-400/20 p-3 rounded-full">
              <FaRegLightbulb className="text-green-400 text-3xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">My Ambition</h3>
              <p className="text-gray-400 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                fugit sed quia consequuntur magni dolores eos qui ratione voluptatem 
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>

          {/* Purpose */}
          <div className="flex items-start gap-4">
            <div className="bg-green-400/20 p-3 rounded-full">
              <FaTrophy className="text-green-400 text-3xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">My Purpose</h3>
              <p className="text-gray-400 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                fugit sed quia consequuntur magni dolores eos qui ratione voluptatem 
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="relative">
          {/* Dotted background */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[radial-gradient(circle,_#16a34a_1px,_transparent_1px)] [background-size:10px_10px]"></div>

          {/* Image */}
          <img
            src={aboutImage} // replace with your image path
            alt="Profile"
            className="relative z-10 rounded-lg"
          />

          {/* Badge */}
          <div className="absolute bottom-4 -right-4 bg-green-400 text-black px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-20">
            <span className="bg-green-300 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
              </svg>
            </span>
            <div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm font-medium">Years Of Experience</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
