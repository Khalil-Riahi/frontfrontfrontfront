
// // 'use client';
// // import { useState, useEffect } from 'react';
// // import { useRouter, useSearchParams } from 'next/navigation';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // export default function PaymentPage() {
// //   const router = useRouter();
// //   const searchParams = useSearchParams();
// //   const [userId, setUserId] = useState("");
// //   const [points, setPoints] = useState(0);
// //   const [price, setPrice] = useState(0);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // Check for payment status on page load (for success/fail redirects)
// //   useEffect(() => {
// //     const status = searchParams.get('status');
// //     const paymentId = searchParams.get('paymentId');
    
// //     if (status === 'success') {
// //       const points = searchParams.get('points');
// //       toast.success(`Payment successful! ${points} points added to your account.`);
// //     } else if (status === 'failed') {
// //       toast.error('Payment failed. Please try again.');
// //     }
    
// //     // Fetch user ID on component mount
// //     async function fetchUserId() {
// //       try {
// //         const response = await fetch("http://localhost:8000/ELACO/getUserId", {
// //           method: "GET",
// //           credentials: "include",
// //         });
// //         if (!response.ok) throw new Error('Failed to fetch user ID');
// //         const { id_user } = await response.json();
// //         setUserId(id_user);
// //       } catch (error) {
// //         console.error("Error fetching user ID:", error);
// //         toast.error('Error loading user data');
// //       }
// //     }
    
// //     fetchUserId();
// //   }, [searchParams]);

// //   const handlePayment = async () => {
// //     if (!userId || points <= 0) {
// //       toast.warn('Please enter valid points value');
// //       return;
// //     }
    
// //     setIsLoading(true);
// //     try {
// //       const calculatedPrice = points * 1500;
// //       setPrice(calculatedPrice);
      
// //       const response = await fetch(
// //         `http://localhost:8000/ELACO/payment?userId=${userId}&points=${points}`,
// //         {
// //           method: "POST",
// //           body: JSON.stringify({ 
// //             amount: calculatedPrice,
// //             description: `${points} ELACO Points Purchase`
// //           }),
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           credentials: "include",
// //         }
// //       );

// //       if (!response.ok) throw new Error('Payment initialization failed');
      
// //       const { result } = await response.json();
// //       window.location.href = result.payUrl;
// //     } catch (error) {
// //       console.error(error);
// //       toast.error('Payment processing failed. Please try again.');
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
// //       <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
// //         <h2 className="text-2xl font-bold mb-6 text-black">Buy Points</h2>
        
// //         <div className="space-y-4">
// //           <div>
// //             <label className="block text-gray-600 text-sm mb-1">Points to Purchase</label>
// //             <input
// //               type="number"
// //               value={points}
// //               onChange={(e) => setPoints(Number(e.target.value))}
// //               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
// //               min="1"
// //               required
// //             />
// //             <p className="text-sm text-gray-500 mt-1">
// //               Price: {points * 1500} TND ({points} points)
// //             </p>
// //           </div>

// //           <button
// //             onClick={handlePayment}
// //             disabled={isLoading}
// //             className="w-full bg-green-600 py-2 rounded-md text-white font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
// //           >
// //             {isLoading ? 'Processing...' : 'Pay Now'}
// //           </button>
// //         </div>
// //       </div>
// //       <ToastContainer position="bottom-right" autoClose={5000} />
// //     </div>
// //   );
// // }
// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function PaymentPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [userId, setUserId] = useState("");
//   const [points, setPoints] = useState(0);
//   const [price, setPrice] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const status = searchParams.get('status');
//     const paymentId = searchParams.get('paymentId');
    
//     if (status === 'success') {
//       const points = searchParams.get('points');
//       toast.success(`Payment successful! ${points} points added to your account.`);
//     } else if (status === 'failed') {
//       toast.error('Payment failed. Please try again.');
//     }
    
//     async function fetchUserId() {
//       try {
//         const response = await fetch("http://localhost:8000/ELACO/getUserId", {
//           method: "GET",
//           credentials: "include",
//         });
//         if (!response.ok) throw new Error('Failed to fetch user ID');
//         const { id_user } = await response.json();
//         setUserId(id_user);
//       } catch (error) {
//         console.error("Error fetching user ID:", error);
//         toast.error('Error loading user data');
//       }
//     }
    
//     fetchUserId();
//   }, [searchParams]);

//   const handlePayment = async () => {
//     if (!userId || points <= 0) {
//       toast.warn('Please enter valid points value');
//       return;
//     }
    
//     setIsLoading(true);
//     try {
//       const calculatedPrice = points * 1500;
//       setPrice(calculatedPrice);
      
//       const response = await fetch(
//         `http://localhost:8000/ELACO/payment?userId=${userId}&points=${points}`,
//         {
//           method: "POST",
//           body: JSON.stringify({ 
//             amount: calculatedPrice,
//             description: `${points} ELACO Points Purchase`
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//         }
//       );

//       if (!response.ok) throw new Error('Payment initialization failed');
      
//       const { result } = await response.json();
//       window.location.href = result.payUrl;
//     } catch (error) {
//       console.error(error);
//       toast.error('Payment processing failed. Please try again.');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen  h-80 flex flex-col md:flex-row m-80 md:m-50 bg-gray-100 rounded-xl shadow-lg overflow-hidden">
//       {/* Left image section */}
//       <div className="md:w-1/2 w-full h-200 md:h-auto">
//         <img
//           src="/payment-illustration.png" // Replace with your actual image path
//           alt="Coworking Illustration"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Right form section */}
//       <div className="md:w-1/2 w-full p-8 bg-white">
//         <h2 className="text-2xl font-bold mb-6 text-black">Buy Points</h2>
        
//         <div className="space-y-4">
//           <div>
//             <label className="block text-gray-600 text-sm mb-1">Points to Purchase</label>
//             <input
//               type="number"
//               value={points}
//               onChange={(e) => setPoints(Number(e.target.value))}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               min="1"
//               required
//             />
//             <p className="text-sm text-gray-500 mt-1">
//               Price: {points * 1500} TND ({points} points)
//             </p>
//           </div>

//           <button
//             onClick={handlePayment}
//             disabled={isLoading}
//             className="w-full bg-green-600 py-2 rounded-md text-white font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
//           >
//             {isLoading ? 'Processing...' : 'Pay Now'}
//           </button>
//         </div>
//       </div>
//       <ToastContainer position="bottom-right" autoClose={5000} />
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { title } from 'process';

export default function Points() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [userId, setUserId] = useState('');
  const [points, setPoints] = useState(0);
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [numtable, setNumtable] = useState('');

  async function sendNotification(){
    if (!userId || points <= 0) {
      toast.warn('Please enter a valid number of points');
      return;
    }

    const obj ={
      title: "Adding Points",
      content: `requests to buy ${points} points`,
      points: points
      // sender_id: userId
    }

    try{
      const response = await fetch(`http://localhost:8000/ELACO/notification/${userId}` , {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })

      if(!response.ok){
        throw Error(`Error in cash paying ${response.statusText}`)
      }
  
      const resDate = await response.json()
      console.log(resDate)
      toast.success(resDate.message)
    }catch(err){
      toast.error(err)
    }

    

    
  }

  useEffect(() => {
    const status = searchParams.get('status');
    if (status === 'success') {
      const pointsAdded = searchParams.get('points');
      toast.success(`Payment successful! ${pointsAdded} points added to your account.`);
    } else if (status === 'failed') {
      toast.error('Payment failed. Please try again.');
    }

    async function fetchUserInfo() {
      try {
        const res = await fetch("http://localhost:8000/ELACO/getUserId", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch user info");
        const data = await res.json();
        setUserId(data.id_user);
        setUserName(data.nom || '');
        setNumtable(data.numtable || '');
      } catch (error) {
        console.error("Error fetching user info:", error);
        toast.error('Error loading user data');
      }
    }

    fetchUserInfo();
  }, [searchParams]);

  const handlePayment = async () => {
    if (!userId || points <= 0) {
      toast.warn('Please enter a valid number of points');
      return;
    }

    setIsLoading(true);
    try {
      const totalPrice = points * 1500;
      setPrice(totalPrice);

      const response = await fetch(
        `http://localhost:8000/ELACO/payment?userId=${userId}&points=${points}`,
        {
          method: "POST",
          body: JSON.stringify({
            amount: totalPrice,
            description: `${points} ELACO Points Purchase`,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) throw new Error('Payment initialization failed');
      const { result } = await response.json();
      window.location.href = result.payUrl;
    } catch (err) {
      console.error(err);
      toast.error('Payment processing failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg flex overflow-hidden">
        {/* Left side with welcome & image */}
        <div className="hidden md:flex flex-col justify-center items-start w-1/2 bg-gradient-to-r from-teal-400 to-teal-100 p-7 text-white relative">
          <div className="absolute top-5 left-5 right-5">
            <h1 className="text-2xl font-bold mb-2 ">
            Top up your time
            </h1>
            <p className="text-blue-900 font-semibold">
             buy points and pay for your coworking hours as you go!
            </p>
          </div>
          <img
            src="/coins.png"
            alt="Points Illustration"
            className="w-102 mt-16"
          />
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 mt-30"> </h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-gray-700 font-medium  ">Points to Purchase</label>
              <input
                type="number"
                min="1"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Price: {points * 1500} TND ({points} points)
              </p>
            </div>

            <button
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full bg-yellow-400 py-3 rounded-md text-white font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
            >
              {isLoading ? 'Processing...' : 'Pay Now'}
            </button>
            <button
              onClick={sendNotification}
              disabled={isLoading}
              className="w-full bg-gray-800 py-3 rounded-md text-white font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
            >
              Pay Cash
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
}
