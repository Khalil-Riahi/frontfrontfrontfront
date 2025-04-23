// // "use client";
// // import {
// //   ChevronRight,
// //   Layers,
// //   User,
// // } from "lucide-react";
// // import DatePicker from "react-datepicker";
// // import React, { useRef, useState } from "react";
// // import TimePicker from "./TimePicker"; // adjust the path
// // import { Calendar } from "@/components/ui/calendar"

// // const RoomCard = ({ room }) => {

// //   const [selectedDate, setSelectedDate] = useState(new Date());
// //   const [showCalendar, setShowCalendar] = useState(false);
// //   const scrollRef = useRef(null);
// //   const [date, setDate] = useState(new Date());


// //   const scrollRight = () => {
// //     scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
// //   };

// //   return (
// //     <div className="flex border rounded-xl overflow-hidden shadow bg-white max-w-full mx-auto my-6">
// //       {/* Left: Image with overlays */}
// //       <div className="relative w-[300px] h-[230px] flex-shrink-0 rounded-l-xl overflow-hidden">
// //         <img
// //           src="/path-to-your-image.jpg"
// //           alt={room.Name}
// //           className="object-cover w-full h-full"
// //         />

// //         {/* Calendar Icon */}
// //         <div
// //           className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md cursor-pointer"
// //           onClick={() => setShowCalendar((prev) => !prev)}
// //         >
// //            <Calendar
// //       mode="single"
// //       selected={date}
// //       onSelect={setDate}
// //       className="rounded-md border shadow"
// //     />
// //         </div>

// //         {showCalendar && (
// //           <div className="absolute top-16 left-4 z-10">
// //             <DatePicker
// //               selected={selectedDate}
// //               onChange={(date) => {
// //                 setSelectedDate(date);
// //                 setShowCalendar(false);
// //               }}
// //               inline
// //             />
// //           </div>
// //         )}

// //         {/* Rates - Static placeholders (you can also pass them via props) */}
// //         <div className="absolute bottom-14 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
// //           20.00DT/Heure
// //         </div>
// //         <div className="absolute bottom-4 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
// //           160.00DT/Jour
// //         </div>
// //       </div>

// //       {/* Right: Content */}
// //       <div className="flex-1 p-4 flex flex-col justify-between overflow-hidden">
// //         <div>
// //           <div className="flex items-center gap-2 mb-1">
// //             <h2 className="text-lg font-semibold">{room.Name}</h2>
// //             <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
// //           </div>

// //           <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
// //             <span className="flex items-center gap-1">
// //               <Layers size={16} /> <span>{room.type}</span>
// //             </span>
// //             <span className="flex items-center gap-1">
// //               <User size={16} /> <span>{room.capacity}</span>
// //             </span>
// //           </div>

// //           {/* Features */}
// //           <div className="flex flex-wrap gap-2 mb-2">
// //             {room.description.map((feature, idx) => (
// //               <span
// //                 key={idx}
// //                 className="bg-gray-100 text-sm px-2 py-1 rounded-md"
// //               >
// //                 {feature}
// //               </span>
// //             ))}
// //           </div>

// //           {/* Description (Optional) */}
// //           <p className="text-gray-400 text-sm truncate w-[90%]">
// //             {room.description[0]}
// //           </p>

// //           {/* Time slots scroll */}
// //           <div className="mt-4 flex items-center">
// //             <TimePicker />
// //           </div>
// //         </div>

// //         {/* Reservation button */}
// //         <div className="flex justify-end mt-4">
// //           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow text-sm whitespace-nowrap">
// //             Réserver {selectedDate.toDateString()}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RoomCard;
// "use client";
// import {
//   Calendar as CalendarIcon,
//   Layers,
//   User,
// } from "lucide-react";
// import DatePicker from "react-datepicker";
// import React, { useRef, useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from "./TimePicker"; // adjust the path
// import Reserve from "./reserve"
// const RoomCard = ({ room ,image}) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);
//   const scrollRef = useRef(null);
//   const [showModal, setShowModal] = useState(false);


//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
//   };

//   return (
//     <div className="flex border rounded-xl overflow-hidden shadow bg-white max-w-full mx-auto my-6">
//        <Reserve room={room} isOpen1={showModal} onClose={() => setShowModal(false)} />

//       {/* Left: Image with overlays */}
//       <div className="relative  w-[300px] h-[320px] flex-shrink-0 p-2 rounded-xl overflow-hidden">
//         <img
//           src={image}
//           alt={room.Name}
//           className="object-cover w-full h-full rounded-xl"
//         />

//         {/* Calendar Icon Toggle */}
//         <div
//           className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md cursor-pointer"
//           onClick={() => setShowCalendar((prev) => !prev)}
//         >
//           <CalendarIcon size={22} className="text-black" />
//         </div>

//         {/* Calendar Picker */}
//         {showCalendar && (
//           <div className="absolute top-16 left-4 z-10 bg-white shadow-lg rounded-lg">
//             <DatePicker
//               selected={selectedDate}
//               onChange={(date) => {
//                 setSelectedDate(date);
//                 setShowCalendar(false);
//               }}
//               inline
//             />
//           </div>
//         )}

//         {/* Rates */}
//         <div className="absolute bottom-4 left-3 flex flex-col gap-1">
//   {room.prices?.map((p, idx) => (
//     <div
//       key={idx}
//       className="bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded"
//     >
//       {p.price}.00DT / {p.duration}
//     </div>
//   ))}
// </div>
//       </div>

//       {/* Right: Content */}
//       <div className="flex-1 p-4 flex flex-col justify-between overflow-hidden">
//         <div>
//           <div className="flex items-center gap-2 mb-1">
//             <h2 className="text-lg font-semibold">{room.Name}</h2>
//             <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
//           </div>

//           <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
//             <span className="flex items-center gap-1">
//               <Layers size={16} /> <span>{room.type}</span>
//             </span>
//             <span className="flex items-center gap-1">
//               <User size={16} /> <span>{room.capacity}</span>
//             </span>
//           </div>

//           {/* Features */}
//           <div className="flex flex-wrap gap-2 mb-2">
//             {room.description.map((feature, idx) => (
//               <span
//                 key={idx}
//                 className="bg-gray-100 text-sm px-2 py-1 rounded-md"
//               >
//                 {feature}
//               </span>
//             ))}
//           </div>

//           {/* Description */}
//           <p className="text-gray-400 text-sm truncate w-[90%]">
//             {room.description[0]}
//           </p>

//           {/* Time slots scroll */}
//           <div className="mt-4 flex items-center">
//             <TimePicker />
//           </div>
//         </div>

//         {/* Reservation button */}
//         <div className="flex justify-end mt-4">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow text-sm whitespace-nowrap"  onClick={() => setShowModal(true)}>
//             Réserver {selectedDate.toLocaleDateString("fr-FR")}
           
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomCard;


import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeSelector from "./TimePicker"; // adjust the path accordingly
import Reserve from "./reserve";

import {
  Calendar as CalendarIcon,
  Layers,
  User,
} from "lucide-react";

const RoomCard = ({ room, image ,reservation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState(null);
  const scrollRef = useRef(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };
  console.log("selected code "+selectedDate)

  return (
    <div className="flex border rounded-xl overflow-hidden shadow bg-white max-w-full mx-auto my-1">
      {/* Pass selectedTimeRange as a prop to Reserve */}
    
      <Reserve
  room={room}
  isOpen1={showModal}
  onClose={() => {
    setShowModal(false);
    setSelectedTimeRange(null); // Optional: clear selection
    setRefreshKey(prev => prev + 1); // Trigger TimeSelector refresh
  }}
  initialTimeRange={selectedTimeRange}
  reservation={reservation}
  Datecalender={selectedDate}
/>


      {/* Left: Image and overlays */}
      <div className="relative w-[300px] h-[300px] flex-shrink-0 p-2 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={room.Name}
          className="object-cover w-full h-full rounded-xl"
        />
        <div
          className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md cursor-pointer"
          onClick={() => setShowCalendar((prev) => !prev)}
        >
          <CalendarIcon size={22} className="text-black" />
        </div>
        {showCalendar && (
          <div className="absolute top-16 left-4 z-10 bg-white shadow-lg rounded-lg">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setShowCalendar(false);
              }}
              inline
            />
          </div>
        )}
        <div className="absolute bottom-4 left-3 flex flex-col gap-1">
          {room.prices?.map((p, idx) => (
            <div
              key={idx}
              className="bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded"
            >
              {p.price}.00DT / {p.duration}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Room details and TimeSelector */}
      <div className="flex-1 p-4 flex flex-col justify-between overflow-hidden">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-lg font-semibold">{room.Name}</h2>
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
          </div>
          <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
            <span className="flex items-center gap-1">
              <Layers size={16} /> <span>{room.type}</span>
            </span>
            <span className="flex items-center gap-1">
              <User size={16} /> <span>{room.capacity}</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {room.description.map((feature, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-sm px-2 py-1 rounded-md"
              >
                {feature}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm truncate w-[90%]">
            {room.description[0]}
          </p>

          {/* Time slots scroll: use TimeSelector instead of TimePicker */}
          <div className="mt-4 flex items-center">
            {/* <TimeSelector
              onTimeSelect={(range) => {
                // Save the selected time range and open the reservation modal
                setSelectedTimeRange(range);
                setShowModal(true);
              }}
              Datecalender={selectedDate}

              reservation={reservation}
            /> */}
            <TimeSelector
  key={refreshKey}
  onTimeSelect={(range) => {
    setSelectedTimeRange(range);
    setShowModal(true);
  }}
  Datecalender={selectedDate}
  reservation={reservation}
/>

          </div>
        </div>

        {/* Optionally, the normal "Réserver" button can remain */}
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow text-sm whitespace-nowrap"
            onClick={() => setShowModal(true)}
          >
            Réserver {selectedDate.toLocaleDateString("fr-FR")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
