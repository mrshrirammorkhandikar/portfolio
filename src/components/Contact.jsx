import { Phone, Map, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#02050A] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <div className="bg-[#11151b] p-8 text-center rounded-lg">
            <Phone className="mx-auto mb-4 text-green-400" size={40} />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-400 mb-3">
              Lorem ipsum eros justo, posuer oborti viverra laor house of street
            </p>
            <p className="text-white font-medium">123-45664-746846</p>
          </div>

          {/* Location */}
          <div className="bg-[#11151b] p-8 text-center rounded-lg">
            <Map className="mx-auto mb-4 text-green-400" size={40} />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-400 mb-3">
              Dhaka 102, m eros justo, posuer oborti viverra laor house of street
            </p>
            <p className="text-green-400 font-medium cursor-pointer">
              View on map
            </p>
          </div>

          {/* Email */}
          <div className="bg-[#11151b] p-8 text-center rounded-lg">
            <Mail className="mx-auto mb-4 text-green-400" size={40} />
            <h3 className="text-lg font-semibold mb-2">Monday - Sunday</h3>
            <p className="text-gray-400 mb-3">
              Dhaka 102, m eros justo, posuer oborti viverra laor house of street
            </p>
            <p className="text-green-400 font-medium">
              hfavouriteemail@gmail.com
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-green-400"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Your Website"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-green-400"
            />
          </div>

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-green-400"
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-green-500 transition"
            >
              submit now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
