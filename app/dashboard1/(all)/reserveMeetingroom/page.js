// // "use client"
// // import {
// //     Calendar,
// //     ChevronRight,
// //     Layers,
// //     User,
// //   } from "lucide-react";
// //   import DatePicker from "react-datepicker";
// //   import { useRef, useState } from "react";
// //   import TimePicker from "./TimePicker"; // adjust the path if needed





// //   const RoomCard = () => {
// //     const times = Array.from({ length: 24 }, (_, i) => `${i}:00`);
// //     const [selectedDate, setSelectedDate] = useState(new Date());
// //     const [showCalendar, setShowCalendar] = useState(false);
// //     const scrollRef = useRef(null);
// //     const [meetingRoom,setMeetingRoom]=useState([])


// // useEffect(() => {
// //         async function getMeetingRoom() {
// //           try {
// //             const response = await fetch("localhost:8000/ELACO/table/meetingRoom");
// //             if (!response.ok) {
// //               throw new Error("Error in fetching subscriptions");
// //             }
// //             const data = await response.json();
// //             setMeetingRoom(data.meetingRoom);
// //           } catch (err) {
// //             console.error(err);
// //           }
// //         }
// //         getMeetingRoom();
// //       }, []);




  
// //     const scrollRight = () => {
// //       scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
// //     };
  
// //     return (
// //       <div className="flex border rounded-xl overflow-hidden shadow bg-white max-w-full mx-auto my-6">
// //         {/* Left: Image with overlays */}
// //         <div className="relative w-[300px] h-[230px] flex-shrink-0 rounded-l-xl overflow-hidden">
// //           <img
// //             src="/path-to-your-image.jpg"
// //             alt="Salle IKIGAI"
// //             className="object-cover w-full h-full"
// //           />
  
// //           {/* Calendar Icon */}
// //           <div
// //             className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md cursor-pointer"
// //             onClick={() => setShowCalendar((prev) => !prev)}
// //           >
// //             <Calendar size={22} className="text-black" />
// //           </div>
  
// //           {showCalendar && (
// //             <div className="absolute top-16 left-4 z-10">
// //               <DatePicker
// //                 selected={selectedDate}
// //                 onChange={(date) => {
// //                   setSelectedDate(date);
// //                   setShowCalendar(false);
// //                 }}
// //                 inline
// //               />
// //             </div>
// //           )}
  
// //           {/* Rates */}
// //           <div className="absolute bottom-14 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
// //             20.00DT/Heure
// //           </div>
// //           <div className="absolute bottom-4 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
// //             160.00DT/Jour
// //           </div>
// //         </div>
  
// //         {/* Right: Content */}
// //         <div className="flex-1 p-4 flex flex-col justify-between overflow-hidden">
// //           <div>
// //             <div className="flex items-center gap-2 mb-1">
// //               <h2 className="text-lg font-semibold">Salle IKIGAI (WZ 1.0)</h2>
// //               <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
// //             </div>
  
// //             <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
// //               <span className="flex items-center gap-1">
// //                 <Layers size={16} /> <span>WZ 1 - Étage 8</span>
// //               </span>
// //               <span className="flex items-center gap-1">
// //                 <User size={16} /> <span>6</span>
// //               </span>
// //             </div>
  
// //             {/* Features */}
// //             <div className="flex flex-wrap gap-2 mb-2">
// //               {meetingRoom.map((feature) => (
// //                 <span
// //                   key={feature}
// //                   className="bg-gray-100 text-sm px-2 py-1 rounded-md"
// //                 >
// //                   {feature}
// //                 </span>
// //               ))}
// //             </div>
  
// //             {/* Description */}
// //             <p className="text-gray-400 text-sm truncate w-[90%]">
// //               Il s'agit d'une salle de réunion bien équipée et aménagée pour
// //               accueillir 6 personnes. Adresse : Wo...
// //             </p>
  
// //             {/* Time slots scroll */}
// //             <div className="mt-4 flex items-center">
// //             <TimePicker/>
// //               </div>
// //           </div>
  
// //           {/* Reservation button */}
// //           <div className="flex justify-end mt-4">
// //             <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow text-sm whitespace-nowrap">
// //               Réserver sam. 12 avr., 0:00 → 1:00
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };
  
// //   export default RoomCard;
//   "use client";
// import { useEffect, useState } from "react";
// import RoomCard from "./RoomCard"; // adjust the path

// const RoomList = () => {
//   const [meetingRooms, setMeetingRooms] = useState([]);

//   useEffect(() => {
//     async function getMeetingRoom() {
//       try {
//         const response = await fetch("http://localhost:8000/ELACO/table/meetingRoom");
//         if (!response.ok) {
//           throw new Error("Error fetching meeting rooms");
//         }
//         const data = await response.json();
//         setMeetingRooms(data.meetingRoom);
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     getMeetingRoom();
//   }, []);

//   return (
//     <div className="flex">
//       {meetingRooms.map((room) => (
//         <RoomCard key={room._id} room={room} />
//       ))}
//     </div>
//   );
// };

// // export default RoomList;
// "use client";
// import { useEffect, useState } from "react";
// import RoomCard from "./RoomCard"; // adjust the path

// const RoomList = () => {
//   const [meetingRooms, setMeetingRooms] = useState([]);

//   useEffect(() => {
//     async function getMeetingRoom() {
//       try {
//         const response = await fetch("http://localhost:8000/ELACO/table/meetingRoom");
//         if (!response.ok) {
//           throw new Error("Error fetching meeting rooms");
//         }
//         const data = await response.json();
//         setMeetingRooms(data.meetingRoom);
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     getMeetingRoom();
//   }, []);
// const images=[
//   "/meetingRoom1.jpg",
//   "/meetingRoom2.jpg"
// ]
//   return (
//     <div className="flex flex-col gap-6">
//       {meetingRooms.map((room,index) => (
//         <RoomCard key={room._id} room={room} image={images[index % images.length]}  />
//       ))}
//     </div>
//   );
// };

// export default RoomList;
"use client";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard"; // adjust the path

const RoomList = () => {
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [Reservations,setReservations]=useState([])

  useEffect(() => {
    async function getMeetingRoom() {
      try {
        const response = await fetch("http://localhost:8000/ELACO/table/meetingRoom");
        if (!response.ok) {
          throw new Error("Error fetching meeting rooms");
        }
        const data = await response.json();
        setMeetingRooms(data.meetingRoom);
      } catch (err) {
        console.error(err);
      }
    }

    getMeetingRoom();
  }, []);
  useEffect(() => {
    async function getReservations() {
      try {
        const response = await fetch("http://localhost:8000/ELACO/booking/getReservation");
        if (!response.ok) {
          throw new Error("Error fetching Reservations ");
        }
        const data = await response.json();
        setReservations(data.data);
      } catch (err) {
        console.error(err);
      }
    }

    getReservations();
  }, []);
  
  const images = [
    "/meetingRoom1.jpg",
    "/meetingRoom2.jpg"
  ];

  return (
    <div className="flex flex-col ">
      {meetingRooms.map((room, index) => (
        <RoomCard key={room._id} room={room} image={images[index % images.length]} reservation={Reservations[index % Reservations.length ]}  />
      ))}
    </div>
  );
};

export default RoomList;
