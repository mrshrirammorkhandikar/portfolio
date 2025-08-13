import React from "react";
import MyImage from "../assets/images/My-Image-sec2.png"; // ✅ import image

const PortfolioSection = () => {
  return (
    <section className="bg-[#02050A] py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <p className="text-green-400 font-medium mb-2">MY RECENT PORTFOLIO</p>
        <h2 className="text-4xl font-bold leading-snug mb-10 max-w-3xl text-white">
          Elevate your brand to new heights with our portfolio expertise
        </h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
                src={MyImage}
                alt="Sheet Metal Bending"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <div>
                <h3 className="text-xl font-semibold text-white">Sheet Metal Bending</h3>
                <p className="text-sm text-gray-300 transition-colors duration-300  group-hover:text-green-400">
                    Youtube
                </p>
                </div>
            </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
                src="/images/portfolio2.jpg"
                alt="Portfolio 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <div>
                <h3 className="text-xl font-semibold text-white">UI/UX Project</h3>
                <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-green-400">
                    Web App
                </p>
                </div>
            </div>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
                src="/images/portfolio3.jpg"
                alt="Portfolio 3"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <div>
                <h3 className="text-xl font-semibold text-white">Interior Design</h3>
                <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-green-400">
                    3D Modeling
                </p>
                </div>
            </div>
            </div>


        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
