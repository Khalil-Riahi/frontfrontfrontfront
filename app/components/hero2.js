import Image from "next/image";
import Container from "./Container";
// import heroImg2 from "../../public/openspace.jpg"; // Ensure this path is correct

export default function Hero2({image}) {
  return (
    <div className="h-[690px] text-gray-900 mb-20 bg-opacity-50">
      {/* Large Screen Layout */}
      <div
        className="hidden md:block h-full bg-cover bg-center "
        // style={{ backgroundImage: `url(${image.src})`}}

      >
        <div className="w-full max-w-screen-xl mx-4 px-4 xl:px-8 flex flex-wrap h-full">
          <div className="flex items-center w-full lg:px-1">
            <div className="max-w-xl mb-16">
              <h1 className="text-3xl font-bold text-blue-950 leading-snug tracking-tight lg:text-4xl">
                {/* Welcome to <br /> Elaco Coworking Space */}
              </h1>
              <p className="py-5 text-lg text-white leading-relaxed text-justify ">
                {/* Elaco is a modern coworking space where creativity meets productivity. Whether you
                are a freelancer, startup, or remote team, Elaco offers flexible workspaces and a
                vibrant community to help you grow. */}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <a
                  href="#"
                  className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                >
                  {/* Reserve Now */}
                </a>
                <a
                  href="#"
                  className="px-6 py-3 text-lg font-medium text-white bg-amber-500 rounded-md flex items-center space-x-2 hover:bg-amber-600 transition"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    {/* <title>Explore</title> */}
                  </svg>
                  {/* <span>Explore Subscriptions</span> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="md:hidden flex flex-col items-center justify-center h-full px- text-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to <br /> Elaco Coworking Space
        </h1>
        <p className="py-4 text-lg text-gray-700 leading-relaxed">
          Elaco is a modern coworking space where creativity meets productivity.
          Whether you are a freelancer, startup, or remote team, Elaco offers flexible workspaces and a vibrant community.
        </p>
        <div className="flex flex-col items-center space-y-3">
          <a href="#" className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition">
            Reserve Now
          </a>
          <a href="#" className="px-6 py-3 text-lg font-medium text-white bg-amber-500 rounded-md flex items-center space-x-2 shadow-md hover:bg-amber-600 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <title>Explore</title>
            </svg>
            <span>Explore Subscriptions</span>
          </a>
        </div>
      </div>
    </div>
  )
}