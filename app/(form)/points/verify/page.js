// 'use client';
// import { useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function PaymentVerify() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const status = searchParams.get('status');
//   const paymentId = searchParams.get('paymentId');
//   const userId = searchParams.get('userId');
//   const points = searchParams.get('points');

//   useEffect(() => {
//     async function verifyPayment() {
//       if (status === 'success' && paymentId && userId && points) {
//         try {
//           const response = await fetch(
//             `http://localhost:8000/ELACO/verify/${paymentId}?userId=${userId}&points=${points}`
//           );
          
//           if (!response.ok) throw new Error('Payment verification failed');
          
//           const data = await response.json();
//           console.log("dddd"+data);
//           if (data.status == 'success') {
//             toast.success(`Success! ${points} points added to your account.`);
//             console.log()
//             // setTimeout(() => router.push('/list'), 1500);
//           } else {
//             toast.error('Payment verification failed');
//             // setTimeout(() => router.push('/buypoints'), 1500);
//           }
//         } catch (error) {
//           console.error(error);
//           toast.error('An error occurred during verification');
//         //   setTimeout(() => router.push('/buypoints'), 1500);
//         }
//       } else if (status === 'failed') {
//         toast.error('Payment failed. Please try again.');
//         // setTimeout(() => router.push('/buypoints'), 1500);
//       } else {
//         // Invalid parameters, redirect to payment page
//         // router.push('/buypoints');
//       }
//     }
    
//     verifyPayment();
//   }, [status, paymentId, userId, points, router]);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
//         {status =='success' ? (
//           <>
//             <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
//             <p className="mb-4">Your transaction is being processed. You'll receive your points shortly.</p>
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
//             <p className="text-sm text-gray-600">Redirecting to dashboard...</p>
//           </>
//         ) : (
//           <>
//             <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Failed</h1>
//             <p className="mb-4">We couldn't process your payment. Please try again.</p>
//             <p className="text-sm text-gray-600">Redirecting to payment page...</p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// import { ToastContainer, toast } from "react-toastify"; // Added ToastContainer to imports

// export default function PaymentVerify() {
//   const [isWorked, setIsWorked] = useState(null);
//   const [idUser, setIdUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [pointsAdded, setPointsAdded] = useState(0);

//   const searchParams = useSearchParams();
//   const status = searchParams.get("status");
//   const paymentId = searchParams.get("paymentId");
//   const userId = searchParams.get("userId");
//   const points = searchParams.get("points");

//   // Process Payment and Add Points
//   useEffect(() => {
//     // Check if all required parameters are available
//     if (status !== "success" || !paymentId || !(idUser || userId) || !points) {
//       if (status === "failed") {
//         setIsWorked(false);
//         setError("Payment failed. Please try again.");
//       }
//       return;
//     }

//     async function verifyAndAddPoints() {
//       try {
//         // Verify payment with backend
//         const response = await fetch(
//           `http://localhost:8000/ELACO/verify/${paymentId}?userId=${userId}&points=${points}`,
//           {
//             method: "GET",
//             credentials: "include",
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Payment verification failed");
//         }

//         const resData = await response.json();
//         console.log("nourr"+resData)

//         if (resData.status !== "success") {
//           throw new Error("Payment was not successful");
//         }

//         // If verification was successful
//         setPointsAdded(points);
//         setIsWorked(true);
//         toast.success(`Success! ${points} points added to your account.`);
//       } catch (error) {
//         console.error("Error processing payment:", error);
//         setError(error.message);
//         setIsWorked(false);
//         toast.error(error.message);
//       }
//     }

//     verifyAndAddPoints();
//   }, [status, paymentId, idUser, userId, points]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
//         {/* Waiting Message */}
//         {isWorked === null && status === "success" && (
//           <div className="space-y-4">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
//             <p className="text-gray-600 text-lg">Verifying your payment...</p>
//             <p className="text-sm text-gray-500">Purchasing {points} points</p>
//           </div>
//         )}

//         {/* Success Message */}
//         {isWorked === true && (
//           <div className="space-y-4">
//             <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
//             <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
//             <p className="text-gray-600">
//               {pointsAdded} points have been added to your account.
//             </p>
//             <button
//               onClick={() => window.location.href = "/list"}
//               className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
//             >
//               Go to Dashboard
//             </button>
//           </div>
//         )}

//         {/* Failure Message */}
//         {isWorked === false && (
//           <div className="space-y-4">
//             <FaTimesCircle className="text-6xl text-red-500 mx-auto animate-shake" />
//             <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
//             <p className="text-gray-600">
//               {error || "Something went wrong. Please try again."}
//             </p>
//             <button
//               onClick={() => window.location.href = "/buypoints"}
//               className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//             >
//               Try Again
//             </button>
//           </div>
//         )}

//         {/* Immediate Failure (status=failed case) */}
//         {status === "failed" && isWorked === null && (
//           <div className="space-y-4">
//             <FaTimesCircle className="text-6xl text-red-500 mx-auto animate-shake" />
//             <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
//             <p className="text-gray-600">
//               The payment was not completed successfully.
//             </p>
//             <button
//               onClick={() => window.location.href = "/buypoints"}
//               className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//             >
//               Try Again
//             </button>
//           </div>
//         )}
//       </div>
//       <ToastContainer position="bottom-right" autoClose={5000} />
//     </div>
//   );
// }
'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function PaymentVerify() {
  const [isWorked, setIsWorked] = useState(null);
  const [error, setError] = useState(null);
  const [pointsAdded, setPointsAdded] = useState(0);

  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const paymentId = searchParams.get("payment_ref");
  const userId = searchParams.get("userId");
  const points = searchParams.get("points");

  // Debug: Log all incoming parameters
  useEffect(() => {
    console.log('Received parameters:', {
      status,
      paymentId,
      userId,
      points
    });
  }, []);

  // Process Payment and Add Points
  useEffect(() => {
    console.log('Verification useEffect triggered');
    
    // Immediate failure case
    if (status === "failed") {
      console.log('Immediate failure detected');
      setIsWorked(false);
      setError("Payment failed. Please try again.");
      return;
    }

    // Check if all required parameters are available
    if (status !== "success" || !paymentId || !userId || !points) {
      console.log('Missing required parameters:', {
        hasStatus: !!status,
        hasPaymentId: !!paymentId,
        hasUserId: !!userId,
        hasPoints: !!points
      });
      return;
    }

    async function verifyAndAddPoints() {
      console.log('Starting verification...');
      try {
        const url = `http://localhost:8000/ELACO/verify/${paymentId}?userId=${userId}&points=${points}`;
        console.log('Making request to:', url);

        const response = await fetch(url, {
          method: "GET",
          credentials: "include",
          headers: {
            'Content-Type': 'application/json',
          }
        });

        console.log('Response status:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Verification failed:', errorText);
          throw new Error(errorText || "Payment verification failed");
        }

        const resData = await response.json();
        console.log('Verification response:', resData);

        if (resData.status !== "success") {
          throw new Error(resData.message || "Payment was not successful");
        }

        console.log('Verification successful!');
        setPointsAdded(points);
        setIsWorked(true);
      } catch (error) {
        console.error("Full error details:", error);
        setError(error.message);
        setIsWorked(false);
      }
    }

    verifyAndAddPoints();
  }, [status, paymentId, userId, points]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        {/* Waiting Message */}
        {isWorked === null && status === "success" && (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-600 text-lg">Verifying your payment...</p>
            <p className="text-sm text-gray-500">Purchasing {points} points</p>
            <p className="text-xs text-gray-400">Payment ID: {paymentId}</p>
          </div>
        )}

        {/* Success Message */}
        {isWorked === true && (
          <div className="space-y-4">
            <FaCheckCircle className="text-6xl text-yellow-400 mx-auto animate-bounce" />
            <h2 className="text-2xl font-bold text-yellow-400">Payment Successful!</h2>
            <p className="text-gray-600">
              {pointsAdded} points have been added to your account.
            </p>
            <button
              onClick={() => window.location.href = "/homepage"}
              className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-blue-900 transition"
            >
              Go to Home page
            </button>
          </div>
        )}

        {/* Failure Message */}
        {isWorked === false && (
          <div className="space-y-4">
            <FaTimesCircle className="text-6xl text-red-500 mx-auto animate-shake" />
            <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
            <p className="text-gray-600">
              {error || "Something went wrong. Please try again."}
            </p>
            <button
              onClick={() => window.location.href = "/buypoints"}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

