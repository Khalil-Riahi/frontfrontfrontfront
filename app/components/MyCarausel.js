// "use client";
// import * as React from "react";
// import { useState , useEffect} from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "./ui/carousel";
// import SubscriptionCard from "./SubscriptionCard";

// export function MyCarrousel() {

//   const [fetchedData, setFetchedData] = useState([]);
  

//   useEffect(() => {
//     async function fetchingSubscriptions() {
//       try {
//         const response = await fetch("http://localhost:8000/ELACO/subcription/");
//         if (!response.ok) {
//           throw new Error("Error in fetching subscriptions");
//         }
//         const data = await response.json();
//         setFetchedData(data.data.subscriptions);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchingSubscriptions();
//   }, []);
//   const data = [
//     {
//       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
//       subscriptionType: "daily",
//       price: 10,
//     },
//     {
//       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
//       subscriptionType: "weekly",
//       price: 50,
//     },
//     {
//       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
//       subscriptionType: "monthly (5H)",
//       price: 75,
//     },
//     {
//       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
//       subscriptionType: "monthly",
//       price: 130,
//     },
//   ];

//   return (
//     <Carousel opts={{ align: "start" }} className="w-full overflow-visible">
//       {/* 
//         1) 'px-4' adds padding on the left/right edges so the first and last cards
//            aren't flush with the container edge.
//         2) 'gap-4' adds space between each card so their borders are clearly visible.
//       */}
//       <CarouselContent className="flex px-4">
//         {fetchedData.map((sub, index) => (
//           <CarouselItem
//             key={index}
//             className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
//           >
//             <SubscriptionCard sub={sub} />
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

"use client";
import * as React from "react";
import { useState , useEffect} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SubscriptionCard from "./SubscriptionCard";

export function MyCarrousel({subs , descriptions}) {

  const [modalOpen, setModalOpen] = useState(false);


  // const [fetchedData, setFetchedData] = useState([]);
  

  // useEffect(() => {
  //   async function fetchingSubscriptions() {
  //     try {
  //       const response = await fetch("http://localhost:8000/ELACO/subcription/");
  //       if (!response.ok) {
  //         throw new Error("Error in fetching subscriptions");
  //       }
  //       const data = await response.json();
  //       setFetchedData(data.data.subscriptions);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   fetchingSubscriptions();
  // }, []);
  // const data = [
  //   {
  //     description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
  //     subscriptionType: "daily",
  //     price: 10,
  //   },
  //   {
  //     description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
  //     subscriptionType: "weekly",
  //     price: 50,
  //   },
  //   {
  //     description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
  //     subscriptionType: "monthly (5H)",
  //     price: 75,
  //   },
  //   {
  //     description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
  //     subscriptionType: "monthly",
  //     price: 130,
  //   },
  // ];

  console.log(descriptions)

  return (
    <Carousel opts={{ align: "start" }} className="w-full overflow-visible">
      {/* 
        1) 'px-4' adds padding on the left/right edges so the first and last cards
           aren't flush with the container edge.
        2) 'gap-4' adds space between each card so their borders are clearly visible.
      */}
      <CarouselContent className="flex px-4">
        {subs?.map((sub, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <SubscriptionCard sub={sub} descriptions={descriptions}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}