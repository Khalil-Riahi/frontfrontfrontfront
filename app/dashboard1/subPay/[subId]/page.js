// "use client";

// import Link from "next/link";
// import { useParams, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function PaymentSub({ params }) {
//   const [isWorked, setIsWorked] = useState(null);
//   const [idUser, setIdUser] = useState(null);
//   const [error, setError] = useState(null);

//   const paramss = useParams();
//   const searchParams = useSearchParams();
//   const payment_ref = searchParams.get("payment_ref");

//   useEffect(() => {
//     async function fetchUserId() {
//       try {
//         const response = await fetch("http://localhost:3001/api/v1/users/getUserId", {
//           method: "GET",
//           credentials: "include",
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to fetch user ID: ${response.statusText}`);
//         }

//         const userIdData = await response.json();
//         setIdUser(userIdData.id_user);
//       } catch (error) {
//         console.error("Error fetching user ID:", error);
//         setError(error.message);
//         setIsWorked(false); // ✅ Ensuring failure is handled
//       }
//     }

//     fetchUserId();
//   }, []);

    // setIdUser(localStorage.getItem('userId'))
//     useEffect(() => {
//         const id = localStorage.getItem("userId")
//         if(id){
//           setIdUser(id)
          
//         }
//       } , [])

//   useEffect(() => {
//     if (!idUser || !paramss.subId || !payment_ref) {
//       console.warn("Waiting for required parameters...");
//       return;
//     }

//     async function getStatus() {
//       try {
//         // Fetch payment status
//         const response = await fetch(`http://localhost:8000/ELACO/subcription/verify/${payment_ref}`, {
//           method: "GET",
//           credentials: "include",
//         });

//         if (!response.ok) {
//           throw new Error("You cannot pay for now");
//         }

//         const resData = await response.json();
//         console.log("Payment status:", resData.result.payment.transactions[0].status);

//         // If payment is NOT successful, set failure state
//         if (resData.result.payment.transactions[0].status !== "success") {
//           throw new Error("Payment was not successful");
//         }

//         console.log("Subscription ID:", paramss.subId);

//         // Fetch subscription details
//         const response1 = await fetch(`http://localhost:3001/api/v1/subscriptions/${paramss.subId}`, {
//           method: "GET",
//           credentials: "include",
//         });

//         if (!response1.ok) {
//           throw new Error("Failed to get the subscription");
//         }

//         const resData1 = await response1.json();

//         let end_date;
//         if (resData1.subscription.subscriptionType.startsWith("monthly")) {
//           end_date = new Date(new Date().setDate(new Date().getDate() + 30)).toISOString();
//         } else if (resData1.subscription.subscriptionType.startsWith("weekly")) {
//           end_date = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString();
//         } else if (resData1.subscription.subscriptionType.startsWith("daily")) {
//           end_date = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString();
//         }

//         // Create user subscription
//         const obj = {
//           start_date: new Date().toISOString(),
//           end_date: end_date,
//           id_subscription: paramss.subId,
//           id_user: idUser,
//         };

//         const response2 = await fetch("http://localhost:3001/api/v1/userSubscription", {
//           method: "POST",
//           body: JSON.stringify(obj),
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//         });

//         const resData2 = await response2.json();

//         if (resData2.status === "success") {
//           setIsWorked(true);
//         } else {
//           throw new Error("User subscription failed");
//         }
//       } catch (error) {
//         console.error("Error processing payment:", error);
//         setError(error.message);
//         setIsWorked(false); // ✅ Ensuring failure is handled
//       }
//     }

//     getStatus();
//   }, [idUser, paramss.subId, payment_ref]);

//   return (
//     <>
//       {/* ✅ Waiting Message */}
//       {isWorked === null && <p>Waiting...</p>}

//       {/* ✅ Success Message */}
//       {isWorked === true && (
//         <div
//           className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
//           role="alert"
//         >
//           <span className="font-medium">Success alert!</span> Payment successful.
//         </div>
//       )}

//       {/* ✅ Failure Message */}
//       {isWorked === false && (
//         <div
//           className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
//           role="alert"
//         >
//           <span className="font-medium">Danger alert!</span> {error || "Payment failed. Please try again."}
//         </div>
//       )}

//       <Link href="/homepage">Go Back to homepage </Link>
//     </>
//   );
// }
