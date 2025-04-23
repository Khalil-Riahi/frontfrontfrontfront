// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { createPortal } from 'react-dom';
// // import { format } from "date-fns";
// // import { CalendarIcon } from "lucide-react";

// // import { Calendar } from "./ui/calendar";
// // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // import { Button } from "./ui/button";
// // import { cn } from "@/lib/utils";
// // import { useRouter } from 'next/navigation';
// // // import { start } from 'repl';

// // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// //   const [selectedDate, setSelectedDate] = useState(null);
// //   const [price, setPrice] = useState(0);
// //   const [numPersons, setNumPersons] = useState(1);

// //   const router = useRouter();

// //   useEffect(() => {
// //     if (selectedDate) {
// //       setPrice(sub.price * numPersons);
// //     } else {
// //       setPrice(0);
// //     }
// //   }, [sub.price, selectedDate , numPersons]);

// //   async function clickToPay() {
// //     const obj = {
// //       subId: sub._id,
// //       amount: sub.price * 1000,
// //       description: `${sub.subscriptionType} subscription`,
// //       start_date: selectedDate
// //     //   numPersons,
// //     };
// //     try {
// //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// //         method: "POST",
// //         body: JSON.stringify(obj),
// //         credentials: "include",
// //         headers: { "Content-Type": "application/json" },
// //       });
// //       if (!response.ok) {
// //         throw new Error("Error in paying");
// //       }
// //       const resData = await response.json();
// //       window.location.href = resData.result.payUrl;
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   }

// //   if (!isOpen1) return null;

// //   return createPortal(
// //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// //         >
// //           &times;
// //         </button>

// //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// //           {/* Left Side */}
// //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// //             <div className="flex flex-col items-center">
// //               <img
// //                 src="/openspace1.jpg"
// //                 alt="Pack Full Time"
// //                 className="w-full h-[300px] rounded-xl"
// //               />
// //               <h2 className="text-xl font-semibold mt-4">
// //                 {sub.roomType} / {sub.subscriptionType}
// //               </h2>
// //               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

// //               <div className="text-sm text-gray-700 mt-4">
// //                 <p>We offer you a comfortable and well-equipped workspace:</p>
// //                 <ul className="list-disc pl-6 mt-2 space-y-1">
// //                   {sub.description.map((des, index) => (
// //                     <li key={index}>{des}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Side */}
// //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// //             <div className="space-y-4">
// //               {/* Date Picker */}
// //               <div>
// //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// //                   Start Date:
// //                 </label>
// //                 <Popover modal={false}>
// //                   <PopoverTrigger asChild>
// //                     <Button
// //                       variant="outline"
// //                       className={cn(
// //                         "w-full justify-start text-left font-normal",
// //                         !selectedDate && "text-muted-foreground"
// //                       )}
// //                     >
// //                       <CalendarIcon className="mr-2 h-4 w-4" />
// //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// //                     </Button>
// //                   </PopoverTrigger>
// //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// //                     <Calendar
// //                       mode="single"
// //                       selected={selectedDate}
// //                       onSelect={setSelectedDate}
// //                       initialFocus
// //                     />
// //                   </PopoverContent>
// //                 </Popover>
// //               </div>

// //               {/* Number of Persons */}
// //               {sub.roomType !== "openspace" ? <div>
// //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// //                   Number of Persons
// //                 </label>
                
// //                 <input
// //                   type="number"
// //                   min="1"
// //                   value={numPersons}
// //                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
// //                   className="w-full mt-1 p-2 border rounded-md"
// //                   placeholder="Enter number of persons"
// //                 />
// //               </div>: null}

// //               {/* Pricing */}
// //               <div>
// //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// //                 <p className="text-sm">Prix par mois d'abonnement</p>
// //                 <p className="text-xl font-bold">{price} DT/Mois</p>

// //                 <button
// //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// //                   onClick={() => {
// //                     const id = localStorage.getItem('userId');
// //                     if (id) {
// //                       clickToPay();
// //                     } else {
// //                       router.push('/login');
// //                     }
// //                   }}
// //                 >
// //                   Pay
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>,
// //     document.getElementById('modal')
// //   );
// // }


// 'use client';

// import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';
// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";

// import { Calendar } from "./ui/calendar";
// import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// import { Button } from "./ui/button";
// import { cn } from "@/lib/utils";
// import { useRouter } from 'next/navigation';
// // import { start } from 'repl';

// export default function SubscriptionModal({ isOpen1, onClose, sub }) {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [price, setPrice] = useState(0);
//   const [numPersons, setNumPersons] = useState(1);

//   const router = useRouter();

//   useEffect(() => {
//     if (selectedDate) {
//       setPrice(sub.price * numPersons);
//     } else {
//       setPrice(0);
//     }
//   }, [sub.price, selectedDate , numPersons]);

//   async function clickToPay() {
//     const obj = {
//       subId: sub._id,
//       amount: sub.price * 1000,
//       description: `${sub.subscriptionType} subscription`,
//       start_date: selectedDate
//     //   numPersons,
//     };
//     try {
//       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
//         method: "POST",
//         body: JSON.stringify(obj),
//         credentials: "include",
//         headers: { "Content-Type": "application/json" },
//       });
//       if (!response.ok) {
//         throw new Error("Error in paying");
//       }
//       const resData = await response.json();
//       window.location.href = resData.result.payUrl;
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   if (!isOpen1) return null;

//   return createPortal(
//     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
//       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
//         >
//           &times;
//         </button>

//         <div className="flex flex-col lg:flex-row gap-6 mt-6">
//           {/* Left Side */}
//           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
//             <div className="flex flex-col items-center">
//               <img
//                 src="/openspace1.jpg"
//                 alt="Pack Full Time"
//                 className="w-full h-[300px] rounded-xl"
//               />
//               <h2 className="text-xl font-semibold mt-4">
//                 {sub.roomType} / {sub.subscriptionType}
//               </h2>
//               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

//               <div className="text-sm text-gray-700 mt-4">
//                 <p>We offer you a comfortable and well-equipped workspace:</p>
//                 <ul className="list-disc pl-6 mt-2 space-y-1">
//                   {sub.description.map((des, index) => (
//                     <li key={index}>{des}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
//             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

//             <div className="space-y-4">
//               {/* Date Picker */}
//               <div>
//                 <label className="text-sm font-medium text-gray-700 block mb-1">
//                   Start Date:
//                 </label>
//                 <Popover modal={false}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className={cn(
//                         "w-full justify-start text-left font-normal",
//                         !selectedDate && "text-muted-foreground"
//                       )}
//                     >
//                       <CalendarIcon className="mr-2 h-4 w-4" />
//                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
//                     <Calendar
//                       mode="single"
//                       selected={selectedDate}
//                       onSelect={setSelectedDate}
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>

//               {/* Number of Persons */}
//               {sub.roomType !== "openspace" ? <div>
//                 <label className="text-sm font-medium text-gray-700 block mb-1">
//                   Number of Persons
//                 </label>
                
//                 <input
//                   type="number"
//                   min="1"
//                   value={numPersons}
//                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
//                   className="w-full mt-1 p-2 border rounded-md"
//                   placeholder="Enter number of persons"
//                 />
//               </div>: null}

//               {/* Pricing */}
//               <div>
//                 <h4 className="font-semibold text-gray-800">Prix</h4>
//                 <p className="text-sm">Prix par mois d'abonnement</p>
//                 <p className="text-xl font-bold">{price} DT/Mois</p>

//                 <button
//                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
//                   onClick={() => {
//                     const id = localStorage.getItem('userId');
//                     if (id) {
//                       clickToPay();
//                     } else {
//                       router.push('/login');
//                     }
//                   }}
//                 >
//                   Pay
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,
//     document.getElementById('modal')
//   );
// }

// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { createPortal } from 'react-dom';
// // import { format } from "date-fns";
// // import { CalendarIcon } from "lucide-react";

// // import { Calendar } from "./ui/calendar";
// // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // import { Button } from "./ui/button";
// // import { cn } from "@/lib/utils";
// // import { useRouter } from 'next/navigation';
// // // import { start } from 'repl';

// // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// //   const [selectedDate, setSelectedDate] = useState(null);
// //   const [price, setPrice] = useState(0);
// //   const [numPersons, setNumPersons] = useState(1);

// //   const router = useRouter();

// //   useEffect(() => {
// //     if (selectedDate) {
// //       setPrice(sub.price * numPersons);
// //     } else {
// //       setPrice(0);
// //     }
// //   }, [sub.price, selectedDate , numPersons]);

// //   async function clickToPay() {
// //     const obj = {
// //       subId: sub._id,
// //       amount: sub.price * 1000,
// //       description: `${sub.subscriptionType} subscription`,
// //       start_date: selectedDate
// //     //   numPersons,
// //     };
// //     try {
// //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// //         method: "POST",
// //         body: JSON.stringify(obj),
// //         credentials: "include",
// //         headers: { "Content-Type": "application/json" },
// //       });
// //       if (!response.ok) {
// //         throw new Error("Error in paying");
// //       }
// //       const resData = await response.json();
// //       window.location.href = resData.result.payUrl;
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   }

// //   if (!isOpen1) return null;

// //   return createPortal(
// //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// //         >
// //           &times;
// //         </button>

// //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// //           {/* Left Side */}
// //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// //             <div className="flex flex-col items-center">
// //               <img
// //                 src="/openspace1.jpg"
// //                 alt="Pack Full Time"
// //                 className="w-full h-[300px] rounded-xl"
// //               />
// //               <h2 className="text-xl font-semibold mt-4">
// //                 {sub.roomType} / {sub.subscriptionType}
// //               </h2>
// //               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

// //               <div className="text-sm text-gray-700 mt-4">
// //                 <p>We offer you a comfortable and well-equipped workspace:</p>
// //                 <ul className="list-disc pl-6 mt-2 space-y-1">
// //                   {sub.description.map((des, index) => (
// //                     <li key={index}>{des}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Side */}
// //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// //             <div className="space-y-4">
// //               {/* Date Picker */}
// //               <div>
// //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// //                   Start Date:
// //                 </label>
// //                 <Popover modal={false}>
// //                   <PopoverTrigger asChild>
// //                     <Button
// //                       variant="outline"
// //                       className={cn(
// //                         "w-full justify-start text-left font-normal",
// //                         !selectedDate && "text-muted-foreground"
// //                       )}
// //                     >
// //                       <CalendarIcon className="mr-2 h-4 w-4" />
// //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// //                     </Button>
// //                   </PopoverTrigger>
// //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// //                     <Calendar
// //                       mode="single"
// //                       selected={selectedDate}
// //                       onSelect={setSelectedDate}
// //                       initialFocus
// //                     />
// //                   </PopoverContent>
// //                 </Popover>
// //               </div>

// //               {/* Number of Persons */}
// //               {sub.roomType !== "openspace" ? <div>
// //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// //                   Number of Persons
// //                 </label>
                
// //                 <input
// //                   type="number"
// //                   min="1"
// //                   value={numPersons}
// //                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
// //                   className="w-full mt-1 p-2 border rounded-md"
// //                   placeholder="Enter number of persons"
// //                 />
// //               </div>: null}

// //               {/* Pricing */}
// //               <div>
// //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// //                 <p className="text-sm">Prix par mois d'abonnement</p>
// //                 <p className="text-xl font-bold">{price} DT/Mois</p>

// //                 <button
// //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// //                   onClick={() => {
// //                     const id = localStorage.getItem('userId');
// //                     if (id) {
// //                       clickToPay();
// //                     } else {
// //                       router.push('/login');
// //                     }
// //                   }}
// //                 >
// //                   Pay
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>,
// //     document.getElementById('modal')
// //   );
// // }


// 'use client';

// import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';
// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";

// import { Calendar } from "./ui/calendar";
// import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// import { Button } from "./ui/button";
// import { cn } from "@/lib/utils";
// import { useRouter } from 'next/navigation';
// // import { start } from 'repl';

// export default function SubscriptionModal({ isOpen1, onClose, sub }) {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [price, setPrice] = useState(0);
//   const [numPersons, setNumPersons] = useState(1);

//   const router = useRouter();

//   let image

//   if(sub.subscriptionType === "daily" && sub.roomType === "openspace"){
//     image = "/openSpaceDaily.png"
//   }else if(sub.subscriptionType === "weekly" && sub.roomType === "openspace"){
//     image = "/openSpaceWeekly.png"
//   }else if(sub.subscriptionType === "monthly" && sub.roomType === "openspace"){
//     image = "/openSpaceMonthly.png"
//   }

//   useEffect(() => {
//     if (selectedDate) {
//       setPrice(sub.price * numPersons);
//     } else {
//       setPrice(0);
//     }
//   }, [sub.price, selectedDate , numPersons]);

//   async function clickToPay() {
//     const obj = {
//       subId: sub._id,
//       amount: sub.price * 1000,
//       description: `${sub.subscriptionType} subscription`,
//       start_date: selectedDate
//     //   numPersons,
//     };
//     try {
//       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
//         method: "POST",
//         body: JSON.stringify(obj),
//         credentials: "include",
//         headers: { "Content-Type": "application/json" },
//       });
//       if (!response.ok) {
//         throw new Error("Error in paying");
//       }
//       const resData = await response.json();
//       window.location.href = resData.result.payUrl;
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   if (!isOpen1) return null;

//   return createPortal(
//     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
//       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
//         >
//           &times;
//         </button>

//         <div className="flex flex-col lg:flex-row gap-6 mt-6">
//           {/* Left Side */}
//           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
//             <div className="flex flex-col items-center">
//               <img
//                 src={image}
//                 alt="Pack Full Time"
//                 className="w-full h-[300px] rounded-xl"
//               />
//               <h2 className="text-xl font-semibold mt-4">
//                 {sub.roomType} / {sub.subscriptionType}
//               </h2>
//               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

//               <div className="text-sm text-gray-700 mt-4">
//                 <p>We offer you a comfortable and well-equipped workspace:</p>
//                 <ul className="list-disc pl-6 mt-2 space-y-1">
//                   {sub.description.map((des, index) => (
//                     <li key={index}>{des}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
//             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

//             <div className="space-y-4">
//               {/* Date Picker */}
//               <div>
//                 <label className="text-sm font-medium text-gray-700 block mb-1">
//                   Start Date:
//                 </label>
//                 <Popover modal={false}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className={cn(
//                         "w-full justify-start text-left font-normal",
//                         !selectedDate && "text-muted-foreground"
//                       )}
//                     >
//                       <CalendarIcon className="mr-2 h-4 w-4" />
//                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
//                     <Calendar
//                       mode="single"
//                       selected={selectedDate}
//                       onSelect={setSelectedDate}
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>

//               {/* Number of Persons */}
//               {sub.roomType !== "openspace" ? <div>
//                 <label className="text-sm font-medium text-gray-700 block mb-1">
//                   Number of Persons
//                 </label>
                
//                 <input
//                   type="number"
//                   min="1"
//                   value={numPersons}
//                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
//                   className="w-full mt-1 p-2 border rounded-md"
//                   placeholder="Enter number of persons"
//                 />
//               </div>: null}

//               {/* Pricing */}
//               <div>
//                 <h4 className="font-semibold text-gray-800">Prix</h4>
//                 <p className="text-sm">Prix par mois d'abonnement</p>
//                 <p className="text-xl font-bold">{price} DT/Mois</p>

//                 <button
//                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
//                   onClick={() => {
//                     const id = localStorage.getItem('userId');
//                     if (id) {
//                       clickToPay();
//                     } else {
//                       router.push('/login');
//                     }
//                   }}
//                 >
//                   Pay
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,
//     document.getElementById('modal')
//   );
// }


// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { createPortal } from 'react-dom';
// // import { format } from "date-fns";
// // import { CalendarIcon } from "lucide-react";

// // import { Calendar } from "./ui/calendar";
// // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // import { Button } from "./ui/button";
// // import { cn } from "@/lib/utils";
// // import { useRouter } from 'next/navigation';
// // // import { start } from 'repl';

// // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// //   const [selectedDate, setSelectedDate] = useState(null);
// //   const [price, setPrice] = useState(0);
// //   const [numPersons, setNumPersons] = useState(1);

// //   const router = useRouter();

// //   useEffect(() => {
// //     if (selectedDate) {
// //       setPrice(sub.price * numPersons);
// //     } else {
// //       setPrice(0);
// //     }
// //   }, [sub.price, selectedDate , numPersons]);

// //   async function clickToPay() {
// //     const obj = {
// //       subId: sub._id,
// //       amount: sub.price * 1000,
// //       description: `${sub.subscriptionType} subscription`,
// //       start_date: selectedDate
// //     //   numPersons,
// //     };
// //     try {
// //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// //         method: "POST",
// //         body: JSON.stringify(obj),
// //         credentials: "include",
// //         headers: { "Content-Type": "application/json" },
// //       });
// //       if (!response.ok) {
// //         throw new Error("Error in paying");
// //       }
// //       const resData = await response.json();
// //       window.location.href = resData.result.payUrl;
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   }

// //   if (!isOpen1) return null;

// //   return createPortal(
// //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// //         >
// //           &times;
// //         </button>

// //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// //           {/* Left Side */}
// //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// //             <div className="flex flex-col items-center">
// //               <img
// //                 src="/openspace1.jpg"
// //                 alt="Pack Full Time"
// //                 className="w-full h-[300px] rounded-xl"
// //               />
// //               <h2 className="text-xl font-semibold mt-4">
// //                 {sub.roomType} / {sub.subscriptionType}
// //               </h2>
// //               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

// //               <div className="text-sm text-gray-700 mt-4">
// //                 <p>We offer you a comfortable and well-equipped workspace:</p>
// //                 <ul className="list-disc pl-6 mt-2 space-y-1">
// //                   {sub.description.map((des, index) => (
// //                     <li key={index}>{des}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Side */}
// //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// //             <div className="space-y-4">
// //               {/* Date Picker */}
// //               <div>
// //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// //                   Start Date:
// //                 </label>
// //                 <Popover modal={false}>
// //                   <PopoverTrigger asChild>
// //                     <Button
// //                       variant="outline"
// //                       className={cn(
// //                         "w-full justify-start text-left font-normal",
// //                         !selectedDate && "text-muted-foreground"
// //                       )}
// //                     >
// //                       <CalendarIcon className="mr-2 h-4 w-4" />
// //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// //                     </Button>
// //                   </PopoverTrigger>
// //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// //                     <Calendar
// //                       mode="single"
// //                       selected={selectedDate}
// //                       onSelect={setSelectedDate}
// //                       initialFocus
// //                     />
// //                   </PopoverContent>
// //                 </Popover>
// //               </div>

// //               {/* Number of Persons */}
// //               {sub.roomType !== "openspace" ? <div>
// //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// //                   Number of Persons
// //                 </label>
                
// //                 <input
// //                   type="number"
// //                   min="1"
// //                   value={numPersons}
// //                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
// //                   className="w-full mt-1 p-2 border rounded-md"
// //                   placeholder="Enter number of persons"
// //                 />
// //               </div>: null}

// //               {/* Pricing */}
// //               <div>
// //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// //                 <p className="text-sm">Prix par mois d'abonnement</p>
// //                 <p className="text-xl font-bold">{price} DT/Mois</p>

// //                 <button
// //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// //                   onClick={() => {
// //                     const id = localStorage.getItem('userId');
// //                     if (id) {
// //                       clickToPay();
// //                     } else {
// //                       router.push('/login');
// //                     }
// //                   }}
// //                 >
// //                   Pay
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>,
// //     document.getElementById('modal')
// //   );
// // }


// 'use client';

// import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';
// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";

// import { Calendar } from "./ui/calendar";
// import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// import { Button } from "./ui/button";
// import { cn } from "@/lib/utils";
// import { useRouter } from 'next/navigation';
// // import { start } from 'repl';

// export default function SubscriptionModal({ isOpen1, onClose, sub }) {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [price, setPrice] = useState(0);
//   const [numPersons, setNumPersons] = useState(1);

//   const router = useRouter();

//   useEffect(() => {
//     if (selectedDate) {
//       setPrice(sub.price * numPersons);
//     } else {
//       setPrice(0);
//     }
//   }, [sub.price, selectedDate , numPersons]);

//   async function clickToPay() {
//     const obj = {
//       subId: sub._id,
//       amount: sub.price * 1000,
//       description: `${sub.subscriptionType} subscription`,
//       start_date: selectedDate
//     //   numPersons,
//     };
//     try {
//       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
//         method: "POST",
//         body: JSON.stringify(obj),
//         credentials: "include",
//         headers: { "Content-Type": "application/json" },
//       });
//       if (!response.ok) {
//         throw new Error("Error in paying");
//       }
//       const resData = await response.json();
//       window.location.href = resData.result.payUrl;
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   let image

//   if(sub.subscriptionType === 'daily' && sub.roomType){
//     image = '/openspacedaily.png'
//   }

//   if (!isOpen1) return null;

//   return createPortal(
//     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
//       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
//         >
//           &times;
//         </button>

//         <div className="flex flex-col lg:flex-row gap-6 mt-6">
//           {/* Left Side */}
//           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
//             <div className="flex flex-col items-center">
//               {/* <img
//                 src={image}
//                 alt="Pack Full Time"
//                 className="w-full h-[300px] rounded-xl"
//               /> */}
//               <img
//   src={image}
//   alt="Pack Full Time"
//   className="w-full max-w-[400px] h-auto rounded-xl object-contain"
// />
//               <h2 className="text-xl font-semibold mt-4">
//                 {sub.roomType} / {sub.subscriptionType}
//               </h2>
//               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

//               <div className="text-sm text-gray-700 mt-4">
//                 <p>We offer you a comfortable and well-equipped workspace:</p>
//                 <ul className="list-disc pl-6 mt-2 space-y-1">
//                   {sub.description.map((des, index) => (
//                     <li key={index}>{des}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
//             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

//             <div className="space-y-4">
//               {/* Date Picker */}
//               <div>
//                 <label className="text-sm font-medium text-gray-700 block mb-1">
//                   Start Date:
//                 </label>
//                 <Popover modal={false}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className={cn(
//                         "w-full justify-start text-left font-normal",
//                         !selectedDate && "text-muted-foreground"
//                       )}
//                     >
//                       <CalendarIcon className="mr-2 h-4 w-4" />
//                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
//                     <Calendar
//                       mode="single"
//                       selected={selectedDate}
//                       onSelect={setSelectedDate}
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>

//               {/* Number of Persons */}
//               {sub.roomType !== "openspace" ? <div>
//                 <label className="text-sm font-medium text-gray-700 block mb-1">
//                   Number of Persons
//                 </label>
                
//                 <input
//                   type="number"
//                   min="1"
//                   value={numPersons}
//                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
//                   className="w-full mt-1 p-2 border rounded-md"
//                   placeholder="Enter number of persons"
//                 />
//               </div>: null}

//               {/* Pricing */}
//               <div>
//                 <h4 className="font-semibold text-gray-800">Prix</h4>
//                 <p className="text-sm">Prix par mois d'abonnement</p>
//                 <p className="text-xl font-bold">{price} DT/Mois</p>

//                 <button
//                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
//                   onClick={() => {
//                     const id = localStorage.getItem('userId');
//                     if (id) {
//                       clickToPay();
//                     } else {
//                       router.push('/login');
//                     }
//                   }}
//                 >
//                   Pay
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,
//     document.getElementById('modal')
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "./ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';

export default function SubscriptionModal({ isOpen1, onClose, sub }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [price, setPrice] = useState(0);
  const [numPersons, setNumPersons] = useState(1);
  const [desolage , setDesolage] = useState(null)

  const router = useRouter();

  useEffect(() => {
    if (selectedDate) {
      setPrice(sub.price * numPersons);
    } else {
      setPrice(0);
    }
  }, [sub.price, selectedDate, numPersons]);

  async function clickToPay() {
    const obj = {
      subId: sub._id,
      amount: sub.price * 1000,
      description: `${sub.subscriptionType} subscription`,
      start_date: selectedDate
    };

    try {
      const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
        method: "POST",
        body: JSON.stringify(obj),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Error in paying: " + response.statusText);
      }

      const resData = await response.json();
      console.log(response.status)

      console.log('url: '+resData?.result?.payUrl)

      if(response.status === 210){
        console.log(resData.message)
        setDesolage(resData.message)
        
      }else if(response.status === 200){
        console.log('hi i am here')
        window.location.href = resData.result.payUrl;
      }
      console.log(resData)
    } catch (err) {
      console.error(err);
    }
  }

  let image;
  if (sub.subscriptionType === 'daily' && sub?.table_id?.type === 'openspace') {
    image = '/openspacedaily.png';
  }else if(sub.subscriptionType === 'weekly' && sub?.table_id?.type === 'openspace'){
    image = '/openspaceweekly.png'
  }else if(sub.subscriptionType === 'monthly (5h)' && sub?.table_id?.type === 'openspace'){
    image='/openspacemonthly5h.png'
  }else if(sub.subscriptionType === 'monthly' && sub?.table_id?.type === 'openspace'){
    image='/openspacemonthly.png'
  }else if(sub.subscriptionType === '1/2 day' && sub?.table_id?.Name === 'Meeting Room 1'){
    image='/meetingroom1halfday.png'
  }else if(sub.subscriptionType === 'day' && sub?.table_id?.Name === 'Meeting Room 1'){
    image='/meetingroom1daily.png'
  }else if(sub.subscriptionType === 'day' && sub?.table_id?.Name === 'Meeting Room 2'){
    image='/meetingroom1day.png'
  }else if(sub.subscriptionType === 'weekly' && sub?.table_id?.Name === 'private office '){
    image='/officeroomweekly.png'
  }else if(sub.subscriptionType === 'monthly' && sub?.table_id?.Name === 'private office '){
    image='/officeroommonthly.png'
  }

  if (!isOpen1) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl p-2">
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt="Pack Full Time"
                className="w-full max-w-[400px] h-auto rounded-xl object-contain"
              />
              <h2 className="text-xl font-semibold mt-4">
                {sub?.table_id?.Name ? sub.table_id.Name : 'openspace'} / {sub.subscriptionType}
              </h2>

              
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

            <div className="space-y-4">
              {/* Date Picker */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Start Date:
                </label>
                <Popover modal={false}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Number of Persons */}
              {sub.roomType !== "openspace" && (
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    Number of Persons
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={numPersons}
                    onChange={(e) => setNumPersons(parseInt(e.target.value))}
                    className="w-full mt-1 p-2 border rounded-md"
                    placeholder="Enter number of persons"
                  />
                </div>
              )}

              {/* Pricing */}
              <div>
                <h4 className="font-semibold text-gray-800">Prix</h4>
                <p className="text-sm">Prix par mois d'abonnement</p>
                <p className="text-xl font-bold">{price} DT/Mois</p>


                <button
                  className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
                  onClick={() => {
                    const id = localStorage.getItem('userId');
                    if (id) {
                      clickToPay();
                    } else {
                      router.push('/login');
                    }
                  }}
                >
                  Pay
                </button>

                {/* <p className=''>{desolage}</p> */}
                <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                    <span class="font-medium">{desolage}</span> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}
