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
                I strive to create designs that not only look beautiful but also tell meaningful stories. My goal is to bridge creativity and functionality, so every project becomes an experience that connects with people on a deeper level. I want my work to inspire, spark curiosity, and leave a lasting impression — not just on the screen, but in the hearts and minds of those who interact with it.
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
                My purpose is to use design as a tool for positive change — shaping ideas into experiences that matter. Whether it’s solving a problem, communicating a complex message, or simply bringing joy, I believe design has the power to influence how we think, feel, and act. Every project is an opportunity to make an impact, to give meaning to details, and to turn vision into reality.
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
