import heroImage from "../assets/images/My_Bg_Image.png";
import RotatingText from "../effect/RotatingText";

const Home = () => {
  return (
    <div
      className="h-screen max-w-max bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="container mx-auto px-8 py-42">
        <div className="flex flex-wrap justify-between px-12">
          {/* Left Section */}
          <div className="w-full md:w-9/12 lg:w-7/12 xl:w-6/12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                HI, I'M Ram! Creative <RotatingText />
            </h1>


              <p className="mt-6 text-gray-300 text-lg">
                I'm a passionate UI/UX designer with a mission to create delightful and intuitive
                digital experiences. With a strong foundation in design principles and a keen eye
                for detail, I specialize in translating complex ideas into user-friendly interfaces
                that captivate and engage.
              </p>

              {/* Buttons */}
              <ul className="mt-8 flex flex-wrap gap-4">
                <li>
                  <a
                    href="/Ram_CV.pdf" // Place your CV in the public folder
                    download="Ram_Morkhandikar_Resume.pdf"
                    className="bg-green-400 text-black px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-500 transition"
                  >
                    Download CV
                    <i className="fa-solid fa-arrow-down-to-line"></i>
                  </a>
                </li>
               {/*<li>
                  <a
                    href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                    className="border border-gray-500 px-6 py-3 rounded-md flex items-center gap-2 text-white hover:border-green-400 transition"
                  >
                    <i className="fas fa-play-circle"></i> Watch The Video
                  </a>
                </li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
