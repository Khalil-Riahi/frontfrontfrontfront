import { Button } from "./../components/ui/button";
import Image from "next/image";
import Container from "./Container";
import heroImg1 from "../../public/oo.png"; // Ensure this path is correct
import { Link } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px]">
      <div className="absolute left-12 top-[42%] translate-y-[-40%] z-10  space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 max-w-3xl">
        Elevate Your Workday
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Step into a dynamic coworking environment built for thinkers, doers, and innovators. 
          Flexible spaces. Inspiring design. A community that fuels your ambition.
        </p>
        <div className="flex gap-4">
          <a href='\booking'>
          <Button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold">
            Reserve
          </Button>
          </a>
          <a href="#subscriptions">
          <Button
            variant="outline"
            className="border-blue-500 text-blue-600 font-semibold"
                >
                  Explore subscription 

                </Button>
          </a>
              </div>
            </div>
    
            {/* Right Image - pushed further right */}
            <div className="absolute bottom-0 right-[-100px] md:right-[-50px] lg:right-[-80px] z-0 lg:translate-y-40 translate-y-12 md:translate-y-20">
              <Image
                src="/elacoo.png"
                alt="Coworking Space"
                width={900}
                height={500}
                className="object-contain"
              />
            </div>
          </section>
  );
}
