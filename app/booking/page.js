// // "use client";
// // import { useState, useEffect, useRef } from "react";
// // import { useRouter, useSearchParams } from "next/navigation";

// // export default function Add() {
// //   const [responseStatus, setResponseStatus] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [start_timeError, setStart_timeError] = useState("");
// //   const [end_timeError, setEnd_timeError] = useState("");
// //   const [idUser, setIdUser] = useState("");
// //   const [status, setStatus] = useState("");
// //   const [points,setPoints]=useState(0)
// //   const [price, setPrice] = useState(0);
// //   const router = useRouter();
// //   const searchParams = useSearchParams();
// //   const numtable = searchParams.get("numtable");
// //   const [end_time, setEnd_time] = useState("");
// //   const [start_time, setStart_time] = useState("");
// //   const start_time1 = useRef();
// //   const end_time1 = useRef();

// //   useEffect(() => {
// //     async function fetchUserId() {
// //       try {
// //         const response = await fetch("http://localhost:8000/ELACO/getUserId", {
// //           method: "GET",
// //           credentials: "include",
// //         });
// //         if (!response.ok) {
// //           throw new Error(`Failed to fetch user ID: ${response.statusText}`);
// //         }
// //         const userIdData = await response.json();
// //         console.log("User ID:", userIdData.id_user);
// //         setIdUser(userIdData.id_user);
// //       } catch (error) {
// //         console.error("Error fetching user ID:", error);
// //         setError(error.message);
// //       }
// //     }

// //     fetchUserId();
// //   }, []);

// //   useEffect(() => {
// //     if (!idUser) return;

// //     async function fetchStatus() {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:8000/ELACO/userSubscription/available/${idUser}`,
// //           {
// //             method: "GET",
// //             credentials: "include",
// //           }
// //         );
// //         if (!response.ok) {
// //           throw new Error(`Failed to fetch user subscription status: ${response.statusText}`);
// //         }

// //         const data = await response.json();
// //         console.log("Status:", data.status);
// //         setStatus(data.status);
// //       } catch (error) {
// //         console.error("Error fetching status:", error);
// //         setError(error.message);
// //       }
// //     }

// //     fetchStatus();
// //   }, [idUser]);

// //   useEffect(() => {
// //     if (!idUser) return;

// //     async function fetchStatus() {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:8000/ELACO/getPoints/${idUser}`,
// //           {
// //             method: "GET",
// //             credentials: "include",
// //           }
// //         );
// //         if (!response.ok) {
// //           throw new Error(`Failed to fetch user subscription status: ${response.statusText}`);
// //         }

// //         const data = await response.json();
// //         console.log("points:", data.points);
// //         setPoints(data.points);
// //       } catch (error) {
// //         console.error("Error fetching status:", error);
// //         setError(error.message);
// //       }
// //     }

// //     fetchStatus();
// //   }, [idUser]);

// //   const calculatePrice = (start_time, end_time) => {
// //     if (!start_time || !end_time) return 0;
// //     const start = new Date(`1970-01-01T${start_time}:00`);
// //     const end = new Date(`1970-01-01T${end_time}:00`);
// //     const diffInHours = (end - start) / 1000 / 60 / 60;

// //     const calculatedPrice = diffInHours * 1500;
// //     setPrice(calculatedPrice);
// //   };
// //   const calculatePoints = (start_time, end_time) => {
// //     if (!start_time || !end_time) return 0;
// //     const start = new Date(`1970-01-01T${start_time}:00`);
// //     const end = new Date(`1970-01-01T${end_time}:00`);
// //     const diffInHours = (end - start) / 1000 / 60 / 60;

// //     const calculatedPrice = diffInHours * 1500;
// //     if(calculatedPrice>=points*1500){

// //     }else{
// //       message="You don't have enough points to book this time slot"
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData(e.target);

// //     try {
// //       setStart_timeError("");
// //       setEnd_timeError("");
// //       setError(null);

// //       const result = await addBooking(formData);
// //       setResponseStatus(result.status);

// //       if (result.status === 201) {
// //         router.push("/list");
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       if (error.message.includes("Invalid start time")) {
// //         setStart_timeError("Invalid start time.");
// //       } else if (error.message.includes("Invalid end time")) {
// //         setEnd_timeError("Invalid end time.");
// //       } else {
// //         setError("Booking failed. Please try again.");
// //       }
// //     }
// //   };

// //   const addBooking = async (formData) => {
// //     const obj = {
// //       start_time: formData.get("start_time"),
// //       end_time: formData.get("end_time"),
// //       id_user: idUser,
// //       numTable: numtable,
// //       price: price,
// //     };

// //     try {
// //       const response = await fetch("http://localhost:8000/ELACO/booking/", {
// //         method: "POST",
// //         body: JSON.stringify(obj),
// //         headers: { "Content-Type": "application/json" },
// //       });

// //       if (!response.ok) {
// //         throw new Error(`Server error: ${response.statusText}`);
// //       }

// //       const data = await response.json();
// //       return { status: response.status, data };
// //     } catch (error) {
// //       console.error(error);
// //       throw new Error("Booking failed. Please try again.");
// //     }
// //   };

// //   // Handle Payment
// //   async function clickToPay() {
// //     console.log(price);
// //     const obj = {
// //       amount: price,
// //     };
// //     console.log("Start Time:", start_time, "End Time:", end_time);
// //     try {
// //       const response = await fetch(
// //           `http://localhost:8000/ELACO/booking/payment?start_time=${start_time}&end_time=${end_time}&numTable=${numtable}`,
// //           {
// //             method: "POST",
// //             body: JSON.stringify(obj),
// //             credentials: "include",
// //             headers: {
// //               "Content-Type": "application/json",
// //             },
// //           }
// //       );

// //       if (!response.ok) {
// //         throw new Response(JSON.stringify({ message: "error in paying" }));
// //       }
// //       const resData = await response.json();
// //       console.log(resData);
// //       window.location.href = resData.result.payUrl;
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   }

// //   return (
// //       <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
// //         <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg flex overflow-hidden">
// //           <div className="hidden md:flex flex-col justify-center items-start w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 p-7 text-white">
// //             <img
// //                 src="/Capture_d_écran_2025-03-06_225634-removebg-preview.png"
// //                 alt="Booking Illustration"
// //                 className="w-102"
// //             />
// //           </div>
// //           <div className="w-full md:w-1/2 p-10">
// //             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Make a Booking</h2>
// //             <form className="space-y-5" onSubmit={handleSubmit}>
// //               <div>
// //                 <label className="block text-gray-700 font-medium">Check in</label>
// //                 <input
// //                     type="time"
// //                     ref={start_time1}
// //                     className={`w-full border ${start_timeError ? "border-red-500" : "border-gray-300"} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
// //                     name="start_time"
// //                     value={start_time}
// //                     onChange={(e) => {
// //                       setStart_time(e.target.value);
// //                       calculatePrice(e.target.value, end_time);
// //                     }}
// //                     required
// //                 />
// //                 {start_timeError && <p className="text-red-500 text-sm mt-1">{start_timeError}</p>}
// //               </div>
// //               <div>
// //                 <label className="block text-gray-700 font-medium">Check out</label>
// //                 <input
// //                     type="time"
// //                     ref={end_time1}
// //                     className={`w-full border ${end_timeError ? "border-red-500" : "border-gray-300"} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
// //                     name="end_time"
// //                     value={end_time}
// //                     onChange={(e) => {
// //                       setEnd_time(e.target.value);
// //                       calculatePrice(start_time, e.target.value);
// //                     }}
// //                     required
// //                 />
// //                 {end_timeError && <p className="text-red-500 text-sm mt-1">{end_timeError}</p>}
// //               </div>
// //               <div>
// //                 <select>
// //                   <option value="">Online Payment</option>
// //                   <option value="2">Cash Payment</option>
// //                   <option value="3">Points</option>
// //                   <option value="4">Subscription</option>
// //                 </select>
// //               </div>

// //               {/* Show the calculated price */}
// //               <div className="text-xl font-semibold text-gray-800 mt-4">
// //                 Total Price: {price} TND
// //               </div>

// //               {status === "active" ? (
// //                   <button
// //                       type="submit"
// //                       className="w-full bg-indigo-600 py-3 rounded-md text-white font-semibold hover:bg-indigo-700 transition"
// //                   >
// //                     Book Now
// //                   </button>
// //               ) : status === "unavailable" ? (
// //                   <div className="space-y-3">
// //                     <button type="submit" className="w-full bg-gray-400 py-3 rounded-md text-white font-semibold">
// //                       Cash Payment
// //                     </button>
// //                     <button
// //                         type="button"
// //                         className="w-full bg-green-600 py-3 rounded-md text-white font-semibold hover:bg-green-700 transition"
// //                         onClick={clickToPay}
// //                     >
// //                       Other Payment
// //                     </button>
// //                   </div>
// //               ) : (
// //                   <p className="text-red-500 text-sm mt-4 text-center">Subscription status unknown</p>
// //               )}
// //             </form>
// //             {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
// //           </div>
// //         </div>
// //       </div>
// //   );
// // } 
// "use client";
// import { useState, useEffect, useRef } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function Add() {
//   const [responseStatus, setResponseStatus] = useState(null);
//   const [error, setError] = useState(null);
//   const [start_timeError, setStart_timeError] = useState("");
//   const [end_timeError, setEnd_timeError] = useState("");
//   const [idUser, setIdUser] = useState("");
//   const [status, setStatus] = useState("");
//   const [points, setPoints] = useState(0);
//   const [price, setPrice] = useState(0);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
//   const [showSubmit, setShowSubmit] = useState(false);
//   const [paymentError, setPaymentError] = useState("");
//   const [userName, setUserName] = useState("");

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const numtable = searchParams.get("numtable");
//   const [end_time, setEnd_time] = useState("");
//   const [start_time, setStart_time] = useState("");
//   const start_time1 = useRef();
//   const end_time1 = useRef();

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         // Fetch user ID
//         const idResponse = await fetch("http://localhost:8000/ELACO/getUserId", {
//           method: "GET",
//           credentials: "include",
//         });
//         if (!idResponse.ok) {
//           throw new Error(`Failed to fetch user ID: ${idResponse.statusText}`);
//         }
//         const userIdData = await idResponse.json();
//         setIdUser(userIdData.id_user);

//         // Fetch user name
//         const nameResponse = await fetch("http://localhost:8000/ELACO/getUserName", {
//           method: "GET",
//           credentials: "include",
//         });
//         if (nameResponse.ok) {
//           const nameData = await nameResponse.json();
//           setUserName(nameData.name);
//         }

//         // Fetch subscription status
//         const subResponse = await fetch(
//           `http://localhost:8000/ELACO/userSubscription/available/${userIdData.id_user}`,
//           {
//             method: "GET",
//             credentials: "include",
//           }
//         );
//         if (subResponse.ok) {
//           const subData = await subResponse.json();
//           setStatus(subData.status);
//         }

//         // Fetch points
//         const pointsResponse = await fetch(
//           `http://localhost:8000/ELACO/getPoints/${userIdData.id_user}`,
//           {
//             method: "GET",
//             credentials: "include",
//           }
//         );
//         if (pointsResponse.ok) {
//           const pointsData = await pointsResponse.json();
//           setPoints(pointsData.points);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setError(error.message);
//       }
//     }

//     fetchUserData();
//   }, []);

//   const calculatePrice = (start_time, end_time) => {
//     if (!start_time || !end_time) return 0;
//     const start = new Date(`1970-01-01T${start_time}:00`);
//     const end = new Date(`1970-01-01T${end_time}:00`);
//     const diffInHours = (end - start) / 1000 / 60 / 60;
//     return diffInHours * 1500;
//   };

//   useEffect(() => {
//     const calculatedPrice = calculatePrice(start_time, end_time);
//     setPrice(calculatedPrice);
//   }, [start_time, end_time]);

//   const handlePaymentMethodChange = (method) => {
//     setSelectedPaymentMethod(method);
//     setPaymentError("");
//     setShowSubmit(false);

//     // Validate the selected payment method
//     if (method === "subscription") {
//       if (status !== "active") {
//         setPaymentError("You don't have an active subscription. Please choose another payment method.");
//         return;
//       }
//     } else if (method === "points") {
//       if (points * 1500 < price) {
//         setPaymentError("You don't have enough points to book this time slot. Please choose another payment method.");
//         return;
//       }
//     }

//     setShowSubmit(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     try {
//       setStart_timeError("");
//       setEnd_timeError("");
//       setError(null);

//       const obj = {
//         start_time: formData.get("start_time"),
//         end_time: formData.get("end_time"),
//         id_user: idUser,
//         numTable: numtable,
//         price: selectedPaymentMethod === "subscription" || selectedPaymentMethod === "points" ? 0 : price,
//         paymentMethod: selectedPaymentMethod,
//       };

//       const response = await fetch("http://localhost:8000/ELACO/booking/", {
//         method: "POST",
//         body: JSON.stringify(obj),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) {
//         throw new Error(`Server error: ${response.statusText}`);
//       }

//       const data = await response.json();
//       setResponseStatus(response.status);

//       if (response.status === 201) {
//         if (selectedPaymentMethod === "online") {
//           await handleOnlinePayment();
//         } else {
//           router.push("/list");
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       if (error.message.includes("Invalid start time")) {
//         setStart_timeError("Invalid start time.");
//       } else if (error.message.includes("Invalid end time")) {
//         setEnd_timeError("Invalid end time.");
//       } else {
//         setError("Booking failed. Please try again.");
//       }
//     }
//   };

//   const handleOnlinePayment = async () => {
//     const obj = {
//       amount: price,
//     };
    
//     try {
//       const response = await fetch(
//         `http://localhost:8000/ELACO/booking/payment?start_time=${start_time}&end_time=${end_time}&numTable=${numtable}`,
//         {
//           method: "POST",
//           body: JSON.stringify(obj),
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Error in processing payment");
//       }
      
//       const resData = await response.json();
//       window.location.href = resData.result.payUrl;
//     } catch (error) {
//       console.error(error);
//       setError("Payment processing failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
//       <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg flex overflow-hidden">
//         <div className="hidden md:flex flex-col justify-center items-start w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 p-7 text-white relative">
//           <div className="absolute top-5 left-5 right-5">
//             <h1 className="text-2xl font-bold mb-2">Welcome Back{userName ? `, ${userName}` : ''}!</h1>
//             <p className="text-blue-100">Book your table and enjoy your time</p>
//           </div>
//           <img
//             src="/Capture_d_écran_2025-03-06_225634-removebg-preview.png"
//             alt="Booking Illustration"
//             className="w-102 mt-16"
//           />
//         </div>
//         <div className="w-full md:w-1/2 p-10">
//           <h2 className="text-2xl font-semibold mb-6 text-gray-800">Make a Booking</h2>
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-gray-700 font-medium">Check in</label>
//               <input
//                 type="time"
//                 ref={start_time1}
//                 className={`w-full border ${start_timeError ? "border-red-500" : "border-gray-300"} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                 name="start_time"
//                 value={start_time}
//                 onChange={(e) => {
//                   setStart_time(e.target.value);
//                 }}
//                 required
//               />
//               {start_timeError && <p className="text-red-500 text-sm mt-1">{start_timeError}</p>}
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium">Check out</label>
//               <input
//                 type="time"
//                 ref={end_time1}
//                 className={`w-full border ${end_timeError ? "border-red-500" : "border-gray-300"} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                 name="end_time"
//                 value={end_time}
//                 onChange={(e) => {
//                   setEnd_time(e.target.value);
//                 }}
//                 required
//               />
//               {end_timeError && <p className="text-red-500 text-sm mt-1">{end_timeError}</p>}
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
//               <div className="grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   onClick={() => handlePaymentMethodChange("online")}
//                   className={`p-3 border rounded-md ${selectedPaymentMethod === "online" ? "border-indigo-600 bg-indigo-50" : "border-gray-300"} hover:bg-gray-50`}
//                 >
//                   Online Payment
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => handlePaymentMethodChange("cash")}
//                   className={`p-3 border rounded-md ${selectedPaymentMethod === "cash" ? "border-indigo-600 bg-indigo-50" : "border-gray-300"} hover:bg-gray-50`}
//                 >
//                   Cash Payment
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => handlePaymentMethodChange("points")}
//                   className={`p-3 border rounded-md ${selectedPaymentMethod === "points" ? "border-indigo-600 bg-indigo-50" : "border-gray-300"} hover:bg-gray-50`}
//                 >
//                   Points ({points} pts)
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => handlePaymentMethodChange("subscription")}
//                   className={`p-3 border rounded-md ${selectedPaymentMethod === "subscription" ? "border-indigo-600 bg-indigo-50" : "border-gray-300"} hover:bg-gray-50`}
//                 >
//                   Subscription
//                 </button>
//               </div>
//               {paymentError && <p className="text-red-500 text-sm mt-2">{paymentError}</p>}
//             </div>

//             {(selectedPaymentMethod === "online" || selectedPaymentMethod === "cash") && (
//               <div className="text-xl font-semibold text-gray-800">
//                 Total Price: {price} TND
//               </div>
//             )}

//             {showSubmit && (
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 py-3 rounded-md text-white font-semibold hover:bg-indigo-700 transition"
//               >
//                 {selectedPaymentMethod === "online" ? "Proceed to Payment" : "Confirm Booking"}
//               </button>
//             )}
//           </form>
//           {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Add() {
  const [responseStatus, setResponseStatus] = useState(null);
  const [error, setError] = useState(null);
  const [start_timeError, setStart_timeError] = useState("");
  const [end_timeError, setEnd_timeError] = useState("");
  const [idUser, setIdUser] = useState("");
  const [status, setStatus] = useState("");
  const [points, setPoints] = useState(0);
  const [price, setPrice] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [userName, setUserName] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const numtable = searchParams.get("numtable");
  const [end_time, setEnd_time] = useState("");
  const [start_time, setStart_time] = useState("");
  const start_time1 = useRef();
  const end_time1 = useRef();
  const service=useRef();
  useEffect(() => {
        async function fetchUserId() {
          try {
            const response = await fetch("http://localhost:8000/ELACO/getUserId", {
              method: "GET",
              credentials: "include",
            });
            if (!response.ok) {
              throw new Error(`Failed to fetch user ID: ${response.statusText}`);
            }
            const userIdData = await response.json();
            console.log("User ID:", userIdData.id_user);
            setIdUser(userIdData.id_user);
          } catch (error) {
            console.error("Error fetching user ID:", error);
            setError(error.message);
          }
        }
    
        fetchUserId();
      }, []);
    
      // useEffect(() => {
      //   if (!idUser) return;
    
      //   async function fetchStatus() {
      //     try {
      //       const response = await fetch(
      //         `http://localhost:8000/ELACO/userSubscription/available/${idUser}`,
      //         {
      //           method: "GET",
      //           credentials: "include",
      //         }
      //       );
      //       if (!response.ok) {
      //         throw new Error(`Failed to fetch user subscription status: ${response.statusText}`);
      //       }
    
      //       const data = await response.json();
      //       console.log("Status:", data.status);
      //       setStatus(data.status);
      //     } catch (error) {
      //       console.error("Error fetching status:", error);
      //       setError(error.message);
      //     }
      //   }
    
      //   fetchStatus();
      // }, [idUser]);
    
      useEffect(() => {
        if (!idUser) return;
    
        async function fetchStatus() {
          try {
            const response = await fetch(
              `http://localhost:8000/ELACO/Points/${idUser}`,
              {
                method: "GET",
                credentials: "include",
              }
            );
            if (!response.ok) {
              throw new Error(`Failed to fetch user subscription status: ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log("points:", data.points);
            setPoints(data.points);
          } catch (error) {
            console.error("Error fetching status:", error);
            setError(error.message);
          }
        }
    
        fetchStatus();
      }, [idUser]);
      
  const calculatePrice = (start_time, end_time,service) => {
    if (!start_time || !end_time) return 0;
    const start = new Date(`1970-01-01T${start_time}:00`);
    const end = new Date(`1970-01-01T${end_time}:00`);
    const diffInHours = (end - start) / 1000 / 60 / 60;
  

    return diffInHours * 1500;
  };

  useEffect(() => {
    const calculatedPrice = calculatePrice(start_time, end_time);
    setPrice(calculatedPrice);
  }, [start_time, end_time]);

  
  const handlePaymentMethodChange = (method) => {
    console.log("Selected method:", method);
    setSelectedPaymentMethod(method);
    setPaymentError("");
    setShowSubmit(false);
  
    if (!method) return;
  
    if (method === "subscription") {
      if (status !== "active") {
        setPaymentError("You don't have an active subscription...");
        return;
      }
    } else if (method === "points") {
      if (points * 1500 < price) {
        setPaymentError("You don't have enough points...");
        return;
      }
    }
  
    console.log("Setting showSubmit to true for method:", method);
    setShowSubmit(true);
  };
  useEffect(() => {
    if (selectedPaymentMethod && start_time && end_time) {
      const calculatedPrice = calculatePrice(start_time, end_time);
      setPrice(calculatedPrice);
      
      // Re-validate payment method when times change
      handlePaymentMethodChange(selectedPaymentMethod);
    }
  }, [start_time, end_time, selectedPaymentMethod]);

  
  const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
    
        try {
          setStart_timeError("");
          setEnd_timeError("");
          setError(null);
    
          const result = await addBooking(formData);
          setResponseStatus(result.status);
    
          if (result.status === 201) {
            router.push("/list");
          }
        } catch (error) {
          console.error(error);
          if (error.message.includes("Invalid start time")) {
            setStart_timeError("Invalid start time.");
          } else if (error.message.includes("Invalid end time")) {
            setEnd_timeError("Invalid end time.");
          } else {
            setError("Booking failed. Please try again.");
          }
        }
      };
    
      const addBooking = async (formData) => {
        console.log("methoddd"+selectedPaymentMethod)
      
        const obj = {
          check_in: formData.get("start_time"),
          check_out: formData.get("end_time"),
          id_user: idUser,
          numTable: numtable,
          price: selectedPaymentMethod === "subscription" ||selectedPaymentMethod === "points"? 0: price,
          paymentMethod: selectedPaymentMethod,
        };
        console.log("objj", obj); // Use comma instead of + to log the object properly    
        try {
          const response = await fetch("http://localhost:8000/ELACO/booking/", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" },
          });
    
          if (!response.ok) {
            throw new Error(`Server error: ${response.statusText}`);
          }
    
          const data = await response.json();
          return { status: response.status, data };
        } catch (error) {
          console.error(error);
          throw new Error("Booking failed. Please try again.");
        }
      };

  const handleOnlinePayment = async () => {
    const obj = {
      amount: price,
    };
    
    try {
      const response = await fetch(
        `http://localhost:8000/ELACO/booking/payment?start_time=${start_time}&end_time=${end_time}&numTable=${numtable}`,
        {
          method: "POST",
          body: JSON.stringify(obj),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error in processing payment");
      }
      
      const resData = await response.json();
      window.location.href = resData.result.payUrl;
    } catch (error) {
      console.error(error);
      setError("Payment processing failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg flex overflow-hidden">
        <div className="hidden md:flex flex-col justify-center items-start w-1/2 bg-gradient-to-r from-blue-500 to-[#62e3cd] p-7 text-white relative">
          <div className="absolute top-5 left-5 right-5">
            <h1 className="text-2xl font-bold mb-2">Welcome Back{userName ? `, ${userName}` : ''}!</h1>
            <p className="text-blue-100">Book your table {numtable} and enjoy your time</p>
          </div>
          <img
            src="/Capture_d_écran_2025-03-06_225634-removebg-preview.png"
            alt="Booking Illustration"
            className="w-102 mt-16"
          />
        </div>
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Make a Booking</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-900 font-medium">Check in</label>
              <input required
                type="time" max="21:00" min="8:00"
                ref={start_time1}
                className={`w-full border ${start_timeError ? "border-red-500" : "border-gray-300"} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black`}
                name="start_time"
                value={start_time}
                onChange={(e) => {
                  setStart_time(e.target.value);
                }}
                
              />
              {start_timeError && <p className="text-red-500 text-sm mt-1">{start_timeError}</p>}
            </div>
            <div>
              <label className="block text-gray-900 font-medium">Check out</label>
              <input required
                type="time" max="21:00" min="8:00"
                ref={end_time1}
                className={`w-full border  ${end_timeError ? "border-red-500" : "border-gray-300"} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black `}
                name="end_time"
                value={end_time}
                onChange={(e) => {
                  setEnd_time(e.target.value);
                }}
              />
              {end_timeError && <p className="text-red-500 text-sm mt-1">{end_timeError}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Service</label>
              <select  ref={service}
                value={selectedPaymentMethod}
                onChange={(e) => handlePaymentMethodChange(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              >
                <option value="">Select Service</option>
                <option value="online">Meeting Room 1: 15 DT/h (1h = 15 000 DT, 2h = 25 000 DT)</option>
                <option value="cash">Private Office Premium Plus (2 pers): 1h = 5 000 DT, Day 20 DT</option>
                <option value="points">Open Space: 1h = 1 500 DT, minimum 10 DT</option>
              </select>
              {paymentError && <p className="text-red-500 text-sm mt-2">{paymentError}</p>}
            </div>


            <div>
              <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
              <select
                value={selectedPaymentMethod}
                onChange={(e) => handlePaymentMethodChange(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              >
                <option value="">Select a payment method</option>
                <option value="online">Online Payment</option>
                <option value="cash">Cash Payment</option>
                <option value="points">Points ({points} pts)</option>
                <option value="subscription">Subscription</option>
              </select>
              {paymentError && <p className="text-red-500 text-sm mt-2">{paymentError}</p>}
            </div>

            {(selectedPaymentMethod === "online" || selectedPaymentMethod === "cash") && (
              <div className="text-xl font-semibold text-gray-800">
                Total Price: {price} TND
              </div>
            )}
                    {showSubmit && (
  <div className="mt-6">
    {selectedPaymentMethod === "online" ? (
      <button
        type="button"
        onClick={handleOnlinePayment}
        className="w-full bg-indigo-600 py-3 rounded-md text-white font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
      >
        Pay Online
      </button>
    ) : (
      <button
        type="submit"
        className="w-full bg-indigo-600 py-3 rounded-md text-white font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {selectedPaymentMethod === "cash" ? "Confirm Cash Payment" : "Confirm Booking"}
      </button>
    )}
  </div>
)}            
          </form>
          {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
}