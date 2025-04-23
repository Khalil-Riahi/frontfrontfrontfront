

"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function Reserve({
  isOpen1,
  onClose,
  room,
  initialTimeRange,
  reservation,
  Datecalender,
}) {
  // ---------------------
  // State Variables
  // ---------------------
  const [selectedDate, setSelectedDate] = useState(
    Datecalender ? new Date(Datecalender) : null
  );
  const [price, setPrice] = useState(0);
  const [points, setPoints] = useState(0);
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [departureTimes, setDepartureTimes] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);
  const [userId, setUserId] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const searchParams = useSearchParams();

  // ---------------------
  // Update selectedDate from Datecalender prop on mount/update.
  // ---------------------
  useEffect(() => {
    if (Datecalender) {
      setSelectedDate(new Date(Datecalender));
    }
  }, [Datecalender]);

  // ---------------------
  // Load user ID from localStorage.
  // ---------------------
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);

  // ---------------------
  // If initialTimeRange is provided, set date, check-in, and check-out.
  // ---------------------
  useEffect(() => {
    if (initialTimeRange) {
      if (initialTimeRange.date) {
        setSelectedDate(new Date(initialTimeRange.date));
      }
      if (initialTimeRange.startTime) {
        setCheckInTime(initialTimeRange.startTime);
      }
      if (initialTimeRange.endTime) {
        setCheckOutTime(initialTimeRange.endTime);
      }
    }
    console.log("checkOutTime"+checkOutTime+"  checkInTime"+checkInTime)
  }, [initialTimeRange]);

  // ---------------------
  // Helper: Convert a time string "HH:mm" into total minutes from midnight.
  // ---------------------
  const toMinutes = (timeStr) => {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  };

  // ---------------------
  // Get all reservations for the selected date.
  // ---------------------
  // const getReservationsForSelectedDate = () => {
  //   if (!selectedDate || !reservation) return [];
  //   return reservation.filter((res) => {
  //     const resDate = new Date(res.date).toDateString();
  //     return resDate === selectedDate.toDateString();
  //   });
  // };
  const isSameUtcDate = (d1, d2) => {
    return (
      d1.getUTCFullYear() === d2.getUTCFullYear() &&
      d1.getUTCMonth() === d2.getUTCMonth() &&
      d1.getUTCDate() === d2.getUTCDate()
    );
  };
  
  const getReservationsForSelectedDate = () => {
    if (!selectedDate || !reservation) return [];
    return reservation.filter((res) => {
      const resDate = new Date(res.date);
      return isSameUtcDate(resDate, selectedDate);
    });
  };
  
  const isTimeSlotReserved = (timeStr, reservationsForDay) => {
    const timeMin = toMinutes(timeStr);
    return reservationsForDay.some(({ check_in, check_out }) => {
      const start = toMinutes(check_in);
      const end = toMinutes(check_out);
      return timeMin >= start && timeMin < end;
    });
  };

  
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 8;
    const endHour = 24; // We generate up to 23:30 only.
    for (let hour = startHour; hour < endHour; hour++) {
      for (const min of [0, 30]) {
        // Do not generate slot for hour=24 (i.e. "00:00") for check-in.
        if (hour === 24) break;
        const hourStr = hour < 10 ? `0${hour}` : `${hour}`;
        const minStr = min === 0 ? "00" : "30";
        slots.push(`${hourStr}:${minStr}`);
      }
    }
    return slots;
  };


  const getAvailableTimeSlots = () => {
    const allSlots = generateTimeSlots();
    const reservationsForDay = getReservationsForSelectedDate();
    console.log(reservationsForDay)
    return allSlots.filter((slot) => !isTimeSlotReserved(slot, reservationsForDay)
  
  );

  };

  // ---------------------
  // For Check-out: Get valid departure times.
  // They must be at least 60 minutes after the chosen Check-in time.
  // Then, if midnight qualifies, append "24:00" (instead of "00:00") as the last option.
  // ---------------------
  const getValidDepartureTimes = (checkInStr) => {
    if (!checkInStr) return [];
    const checkInMin = toMinutes(checkInStr);
    let validSlots = getAvailableTimeSlots().filter((slot) => {
      return toMinutes(slot) - checkInMin >= 60;
    });
    // If the gap from check-in to midnight (1440 minutes) is at least 60, include "24:00"
    if (1440 - checkInMin >= 60) {
      if (!validSlots.includes("24:00")) {
        validSlots.push("24:00");
      }
    }
    validSlots.sort((a, b) => {
      const aMin = a === "24:00" ? 1440 : toMinutes(a);
      const bMin = b === "24:00" ? 1440 : toMinutes(b);
      return aMin - bMin;
    });
    return validSlots;
  };

  // ---------------------
  // Auto-set default Check-in if not already set.
  // ---------------------
  useEffect(() => {
    if (selectedDate && !checkInTime) {
      const available = getAvailableTimeSlots();
      if (available.length > 0) {
        setCheckInTime(available[0]);
      }
    }
  }, [selectedDate]);

  // ---------------------
  // Auto-set default Check-out when Check-in changes.
  // ---------------------
  useEffect(() => {
    if (checkInTime && !checkOutTime) {
      const validDeps = getValidDepartureTimes(checkInTime);
      if (validDeps.length > 0) {
        setCheckOutTime(validDeps[0]);
      }
    }
  }, [checkInTime]);

  // ---------------------
  // Update departureTimes (for the Check-out dropdown) when Check-in or selected date changes.
  // ---------------------
  useEffect(() => {
    if (selectedDate && checkInTime) {
      const validTimes = getValidDepartureTimes(checkInTime);
      setDepartureTimes(validTimes);
    } else {
      setDepartureTimes([]);
    }
  }, [checkInTime, selectedDate]);

  // ---------------------
  // Current time index for today (to disable past slots), relative to 08:00.
  // ---------------------
  let currentBarIndex = 0;
  const todayDate = new Date();
  if (selectedDate && selectedDate.toDateString() === todayDate.toDateString()) {
    // If current time is before 8:00, none are past.
    if (todayDate.getHours() < 8) {
      currentBarIndex = 0;
    } else {
      currentBarIndex =
        (todayDate.getHours() - 8) * 2 + (todayDate.getMinutes() >= 30 ? 1 : 0);
    }
  }

  // ---------------------
  // Functions for rendering the TimeSelector grid.
  // ---------------------
  // Check if a given bar index is reserved.
  const isReservedBarIndex = (barIndex) =>
    useMemo(
      () =>
        getReservationsForSelectedDate().some(([rStart, rEnd]) => {
          // Not used in this snippet; reserved ranges are computed elsewhere.
          return false;
        }),
      [reservation, selectedDate]
    ); // Placeholder

  // (For our grid, we use the available time slots and compute a bar index based on our slots.)
  // Here, we compute the bar index on the fly. Use getAvailableTimeSlots() for rendering.

  // For the grid rendering, we convert each slot to its bar index relative to 08:00:
  const slotToBarIndex = (timeStr) => {
    const [h, m] = timeStr.split(":").map(Number);
    return (h - 8) * 2 + (m >= 30 ? 1 : 0);
  };

  // ---------------------
  // Price Calculation.
  // ---------------------
  const calculatePrice = (startStr, endStr) => {
    if (!startStr || !endStr) return 0;
    const start = new Date(`1970-01-01T${startStr}:00`);
    const end =
      endStr === "24:00"
        ? new Date("1970-01-02T00:00:00")
        : new Date(`1970-01-01T${endStr}:00`);
    const diffInHours = (end - start) / 1000 / 60 / 60;
    
      return diffInHours * 5;
    
  };

  useEffect(() => {
    if (selectedDate && checkInTime && checkOutTime) {
      setPrice(calculatePrice(checkInTime, checkOutTime));
    } else {
      setPrice(0);
    }
  }, [checkInTime, checkOutTime, selectedDate]);

  // ---------------------
  // Fetch user points.
  // ---------------------
  useEffect(() => {
    if (!userId) return;
    async function fetchStatus() {
      try {
        const response = await fetch(`http://localhost:8000/ELACO/Points/${userId}`, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch user subscription status: ${response.statusText}`);
        }
        const data = await response.json();
        setPoints(data.points);
        console.log("points"+points)
      } catch (err) {
        console.error("Error fetching points:", err);
        setError(err.message);
$      }
    }
    fetchStatus();
  }, [userId]);

  // ---------------------
  // Payment Method Handler.
  // ---------------------
  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
    setPaymentError("");
    setShowSubmit(false);
    if (method === "points" && points*1.5 < price) {
      setPaymentError("Vous n'avez pas assez de points.");
      // console.log(points.type())
      console.log(points*1,5)
      console.log("price"+price)
      return;
    }
    setShowSubmit(true);
  };

  // ---------------------
  // Submit Reservation.
  // ---------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("method "+selectedPaymentMethod)
    console.log("Selected method:", selectedPaymentMethod);
console.log("User points:", points);
console.log("Price:", price);
    if (!userId) {
      setError("User not logged in.");
      return;
    }
    if (!selectedDate || !checkInTime || !checkOutTime) {
      setError("Veuillez sélectionner une date ainsi qu'une heure de Check-in et Check-out.");
      return;
    }
    if (selectedPaymentMethod == "points" && points * 1.5 < price) {
      setPaymentError("Vous n'avez pas assez de points.");
      console.log("ouggggggggggggggggggggggggggggggg")
      return;
    }
    if (selectedPaymentMethod === "online") {
      handleOnlinePayment();
      return;
    }

    try {
      const result = await addBooking();
      setResponseStatus(result.status);
      if (result.status === 201) {
        setSuccessMessage("Réservation réussie !");
      }
    } catch (err) {
      console.error(err);
      setError("La réservation a échoué. Veuillez réessayer.");
    }
  };

  // ---------------------
  // Add Booking: Send reservation details to the server.
  // ---------------------
  const addBooking = async () => {
    const obj = {
      check_in: checkInTime,
      check_out: checkOutTime,
      id_user: userId,
      date: selectedDate.toISOString(),
      numTable: room.numTable,
      price: selectedPaymentMethod === "points" ? 0 : price,
      paymentMethod: selectedPaymentMethod,
      points: selectedPaymentMethod === "points" ? points-(price/1.5)  : points,
    };
    console.log("Booking object:", obj);
    try {
      const response = await fetch("http://localhost:8000/ELACO/booking/", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
        toast.error('Booking failed. Please try again.');

      }
      const data = await response.json();
      toast.success('Réservation effectuée avec succès!');

      return { status: response.status, data };
    } catch (error) {
      console.error(error);
      toast.error('Booking failed. Please try again.');

      throw new Error("Booking failed. Please try again.");
    }
  };

  // ---------------------
  // Handle Online Payment.
  // ---------------------
  const handleOnlinePayment = async () => {
    const obj = { amount: price*1000 };
    console.log(obj)
    console.log("date"+selectedDate)
    const formattedDate = selectedDate.toISOString().split("T")[0]
    console.log("date"+formattedDate)

    try {
      const response = await fetch(
        `http://localhost:8000/ELACO/booking/payment?start_time=${checkInTime}&end_time=${checkOutTime}&numTable=${room.numTable}&date=${formattedDate}`,
        {
          method: "POST",
          body: JSON.stringify(obj),
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Error in processing payment");
      }

      const resData = await response.json();
      console.log("Payment response:", resData);

      window.location.href = resData.result.payUrl;
    } catch (error) {
      console.error(error);
      setError("Payment processing failed. Please try again.");
    }
  };

  if (!isOpen1) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl p-8 relative">
      <Toaster position="top-right" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <span>X</span>
        </button>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Room Details */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/openspace1.jpg"
              alt="Room Image"
              className="w-full h-64 object-cover rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-4">
              {room.roomType} {room.roomscriptionType}
            </h2>
            <p className="text-black text-md mt-1 text-left">{room.Name}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {room.description.map((feature, idx) => (
                <span key={idx} className="bg-gray-100 text-xs px-2 py-1 rounded-md">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Reservation Form */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Book {room.Name}</h3>

            {/* Booking Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Booking Date
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
                    {selectedDate ? format(selectedDate, "PPP") : <span>Booking Date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-[9999]" align="start">
                  <div className="rounded-lg border bg-white p-4 shadow-md">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                      classNames={{
                        day_selected: "bg-blue-500 text-white hover:bg-blue-600",
                      }}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-in & Check-out */}
            <div className="grid grid-cols-2 gap-4">
              {/* Check-in Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check in
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={checkInTime}
                  onChange={(e) => {
                    setCheckInTime(e.target.value);
                    // When check-in changes, clear check-out so that it resets.
                    setCheckOutTime("");
                  }}
                >
                  <option value="">-- Choisir --</option>
                  {getAvailableTimeSlots().map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Check-out Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check out
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={checkOutTime}
                  onChange={(e) => setCheckOutTime(e.target.value)}
                >
                  <option value="">-- Choisir --</option>
                  {departureTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Method
              </label>
              <select
                className="w-full p-2 border rounded-md"
                value={selectedPaymentMethod}
                onChange={(e) => handlePaymentMethodChange(e.target.value)}
              >
                <option value="">-- Choisir --</option>
                <option value="online">Paiement en ligne</option>
                <option value="cash">Cash</option>
                <option value="points">Points</option>
              </select>
             
            </div>

            {/* Price & Error Messages */}
            <div className="mt-6">
              {(selectedPaymentMethod === "online" ||
                selectedPaymentMethod === "cash") && (
                <div className="text-xl font-semibold text-gray-800">
                  Total Price: {price} TND
                </div>
              )}
               {paymentError && (
                <p className="text-red-500 text-sm mt-1">{paymentError}</p>
              )}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            {/* Submit Button */}
            {showSubmit && (
              <Button className="w-full mt-4" type="submit">
                Confirmer la réservation
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

