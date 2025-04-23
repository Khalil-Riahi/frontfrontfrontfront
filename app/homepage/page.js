// // "use client"
// // import Navbar from "../components/navbar";
// // import Hero from "../components/hero";
// // import Subscriptions from "../components/benefits";
// // import Services from "../components/services";
// // import Footer from "../components/footer";

// // export default function Home() {
// //   return (
   
// // <>
// // <main
// //       className="min-h-screen bg-gradient-to-r text-gray-800 font-sans relative overflow-hidden  h-[600px] mb-20"
// //       style={{
// //         backgroundImage:
// //           "linear-gradient(to right, rgb(241, 249, 248) 0%, #aee6f9 30%, rgb(163, 244, 235) 50%, #62e3cd 100%)",
// //       }}
// //     >
// //        <Navbar />
    
// //     <Hero />
     
// //     </main>
     
// //      <Subscriptions />
// //      <Services />
 
// //      </>
    
// //   );
// // }
"use client";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Subscriptions from "../components/benefits";
import Services from "../components/services";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen bg-gradient-to-r text-gray-800 font-sans relative overflow-hidden h-[600px] mb-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(241, 249, 248) 0%, #aee6f9 30%, rgb(163, 244, 235) 50%, #62e3cd 100%)",
        }}
      >
        <Navbar />
        <Hero />
      </main>

      <Subscriptions />
      <Services />

      {/* Floating Purchase Points Button */}
     <a href="/points">
     <button
        className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg z-50"
      >
        Purchase Points
      </button>
     </a>
    </>
  );
}

