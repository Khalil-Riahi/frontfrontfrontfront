"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for success and failure

export default function PaymentSub({ params }) {
  const [isWorked, setIsWorked] = useState(null);
  const [idUser, setIdUser] = useState(null);
  const [error, setError] = useState(null);

  const paramss = useParams();
  const searchParams = useSearchParams();
  const payment_ref = searchParams.get("payment_ref");
  const start_time = searchParams.get("start_time");
  const end_time = searchParams.get("end_time");
  const numTable = searchParams.get("numTable");
  const date=searchParams.get("date")


  // Fetch User ID
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
        setIdUser(userIdData.id_user);
      } catch (error) {
        console.error("Error fetching user ID:", error);
        setError(error.message);
        setIsWorked(false);
      }
    }

    fetchUserId();
  }, []);

  // Process Payment and Booking
  useEffect(() => {
    // Check if all required parameters are available
    if (!idUser || !end_time || !payment_ref || !start_time || !numTable||!date) {
      console.warn("Waiting for required parameters...");
      return;
    }

    async function getStatus() {
      try {
        // Fetch payment status
        const response = await fetch(
          `http://localhost:8000/ELACO/booking/verify/${payment_ref}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("You cannot pay for now");
        }

        const resData = await response.json();
        console.log("Payment status:", resData.resData.payment.transactions[0].status);

        // Check if payment was successful
        if (resData.resData.payment.transactions[0].status !== "success") {
          throw new Error("Payment was not successful");
        }

        // Create booking object
        const obj = {
          check_in: start_time,
          check_out: end_time,
          numTable: numTable,
          id_user: idUser,
          price: resData.resData.payment.transactions[0].amount,
          paymentMethod: "online",
          date:date
        };
        console.log("Booking object:", obj);

        // Submit booking to the server
        const bookingResponse = await fetch("http://localhost:8000/ELACO/booking/", {
          method: "POST",
          body: JSON.stringify(obj),
          headers: { "Content-Type": "application/json" },
        });

        if (!bookingResponse.ok) {
          throw new Error(`Server error: ${bookingResponse.statusText}`);
        }

        const bookingData = await bookingResponse.json();
        console.log("Booking successful:", bookingData);
        setIsWorked(true); // ✅ Success
      } catch (error) {
        console.error("Error processing payment:", error);
        setError(error.message);
        setIsWorked(false); // ✅ Failure
      }
    }

    getStatus();
  }, [idUser, end_time, start_time, numTable, payment_ref]); // Fixed dependency array

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        {/* Waiting Message */}
        {isWorked === null && (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-600 text-lg">Processing your payment...</p>
          </div>
        )}

        {/* Success Message */}
        {isWorked === true && (
          <div className="space-y-4">
            <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
            <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
            <p className="text-gray-600">
              Your booking has been confirmed. Thank you for choosing us!
            </p>
            <button
              onClick={() => window.location.href = "/list"}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Go to Bookings
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
              onClick={() => window.location.href = "/booking"}
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