// // // import React, { useState, useMemo, useEffect } from 'react';

// // // const TimeSelector = ({ onTimeSelect, reservation, Datecalender ,reset}) => {
// // //   const [selectedRanges, setSelectedRanges] = useState([]);
// // //   const [rangeStart, setRangeStart] = useState(null);
// // //   const [hoveredIndex, setHoveredIndex] = useState(null);
// // //   const [startIndex, setStartIndex] = useState(0);
 

// // //   useEffect(() => {
// // //     // Reset state on reset change
// // //     setSelectedRanges([]);
// // //     setRangeStart(null);
// // //     setHoveredIndex(null);
// // //     setStartIndex(0);
// // //   }, [reset]);



// // //   const today = new Date();
// // //   // 1) Figure out which half-hour block is "now"
// // //   let currentBarIndex;
// // //   if (today.toDateString() === Datecalender.toDateString()) {
// // //     const currentHour = today.getHours();
// // //     const currentMinutes = today.getMinutes();
// // //     currentBarIndex = currentHour * 2 + (currentMinutes >= 30 ? 1 : 0);
// // //   } else {
// // //     currentBarIndex = 0;
// // //   }

// // //   // 2) Build a simple array of "HH:00" labels
// // //   const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
// // //   const visibleHours = hours.slice(startIndex, startIndex + 11);

// // //   // 3) Whenever Datecalender changes, if it is "today," jump startIndex so the display begins near current time
// // //   useEffect(() => {
// // //     // if same day as "today," jump
// // //     if (today.toDateString() === Datecalender.toDateString()) {
// // //       // Convert barIndex => hour index
// // //       const nowHourIndex = Math.floor(currentBarIndex / 2);
// // //       // clamp so you don’t slice beyond array bounds
// // //       const maxStartIndex = hours.length - 11; // e.g. 24 - 11 = 13
// // //       let newStartIndex = nowHourIndex;
// // //       if (newStartIndex > maxStartIndex) {
// // //         newStartIndex = maxStartIndex; 
// // //       }
// // //       if (newStartIndex < 0) {
// // //         newStartIndex = 0;
// // //       }
// // //       setStartIndex(newStartIndex);
// // //     } else {
// // //       // not today => start from 0
// // //       setStartIndex(0);
// // //     }
// // //   }, [Datecalender]);

// // //   // -----------------------------
// // //   // Helper: "HH:mm" => barIndex
// // //   // -----------------------------
// // //   const getBarIndexFromTime = (timeStr) => {
// // //     if (!timeStr) return null;
// // //     const [hourStr, minStr] = timeStr.split(':');
// // //     const hour = parseInt(hourStr, 10);
// // //     const minutes = parseInt(minStr, 10);
// // //     return hour * 2 + (minutes >= 30 ? 1 : 0);
// // //   };

// // //   // -----------------------------
// // //   // Build array of reserved ranges
// // //   // -----------------------------
// // //   const reservedRanges = useMemo(() => {
// // //     if (!Datecalender) return [];
// // //     const selectedDateStr = Datecalender.toISOString().split('T')[0];
// // //     return reservation
// // //       .filter((r) => {
// // //         const resDateStr = new Date(r.date).toISOString().split('T')[0];
// // //         return resDateStr === selectedDateStr;
// // //       })
// // //       .map((r) => {
// // //         const start = getBarIndexFromTime(r.check_in);
// // //         const end = getBarIndexFromTime(r.check_out);
// // //         if (start === null || end === null) return null;
// // //         return [start, end]; 
// // //       })
// // //       .filter(Boolean);
// // //   }, [reservation, Datecalender]);

// // //   // Check if barIndex is within any reserved range
// // //   const isReservedBarIndex = (barIndex) =>
// // //     reservedRanges.some(([start, end]) => barIndex >= start && barIndex < end);

// // //   // Check if barIndex is within any user-selected range
// // //   const isWithinAnyRange = (barIndex) =>
// // //     selectedRanges.some(([start, end]) =>
// // //       barIndex >= Math.min(start, end) && barIndex <= Math.max(start, end)
// // //     );

// // //   // Check if barIndex is in the current hover range
// // //   const isInCurrentHoverRange = (barIndex) => {
// // //     if (rangeStart === null || hoveredIndex === null) return false;
// // //     return (
// // //       barIndex >= Math.min(rangeStart, hoveredIndex) &&
// // //       barIndex <= Math.max(rangeStart, hoveredIndex)
// // //     );
// // //   };

// // //   // barIndex => "HH:mm"
// // //   const getTimeFromBarIndex = (barIndex) => {
// // //     const hour = Math.floor(barIndex / 2);
// // //     const minutes = barIndex % 2 === 0 ? '00' : '30';
// // //     return `${hour.toString().padStart(2, '0')}:${minutes}`;
// // //   };

// // //   // Display e.g. "1h 30 mins"
// // //   const getDuration = (start, end) => {
// // //     const diffInBlocks = Math.abs(end - start + 1); // number of 30-min increments
// // //     const diffMinutes = diffInBlocks * 30;
// // //     if (diffMinutes >= 60) {
// // //       const hours = Math.floor(diffMinutes / 60);
// // //       const mins = diffMinutes % 60;
// // //       return mins === 0 ? `${hours}h` :` ${hours}h ${mins} mins`;
// // //     }
// // //     return `${diffMinutes} mins`;
// // //   };

// // //   // Click => set or finish selecting a range
// // //   const handleClick = (barIndex) => {
// // //     // block clicks if it's in the past or reserved
// // //     if (barIndex < currentBarIndex || isReservedBarIndex(barIndex)) {
// // //       return;
// // //     }
// // //     if (rangeStart === null) {
// // //       // start new range
// // //       setRangeStart(barIndex);
// // //       setHoveredIndex(barIndex);
// // //     } else {
// // //       // finish range
// // //       const durationBlocks = Math.abs(barIndex - rangeStart) + 1;
// // //       // Only allow whole-hour multiples => at least 2 blocks (1 hour), 4 blocks (2h), etc.
// // //       if (durationBlocks < 2 || durationBlocks % 2 !== 0) {
// // //         // Not a full hour or < 1 hour => ignore
// // //         return;
// // //       }
// // //       const newRange = [rangeStart, barIndex];
// // //       setSelectedRanges([...selectedRanges, newRange]);
// // //       setRangeStart(null);
// // //       setHoveredIndex(null);

// // //       if (onTimeSelect) {
// // //         const start = Math.min(rangeStart, barIndex);
// // //         const end = Math.max(rangeStart, barIndex) + 1;
// // //         const startTime = getTimeFromBarIndex(start);
// // //         const endTime = getTimeFromBarIndex(end);
// // //         onTimeSelect({ startTime, endTime });
// // //       }
// // //     }
// // //   };

// // //   // Hover => update hoveredIndex if valid
// // //   const handleHover = (barIndex) => {
// // //     if (barIndex < currentBarIndex || rangeStart === null || isReservedBarIndex(barIndex)) {
// // //       return;
// // //     }
// // //     setHoveredIndex(barIndex);
// // //   };

// // //   // Navigation: "previous" & "next" hour blocks
// // //   const handlePrev = () => {
// // //     if (startIndex > 0) {
// // //       setStartIndex(startIndex - 1);
// // //     }
// // //   };
// // //   const handleNext = () => {
// // //     if (startIndex < hours.length - 11) {
// // //       setStartIndex(startIndex + 1);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md relative overflow-visible">
// // //       <button className="rounded-full border p-2 hover:bg-gray-100 transition" onClick={handlePrev}>
// // //         ❮
// // //       </button>
// // //       <div className="flex space-x-6 relative">
// // //         {visibleHours.map((hour, i) => {
// // //           const hourIndex = startIndex + i;
// // //           const baseBarIndex = hourIndex * 2;
// // //           return (
// // //             <div
// // //               key={hour}
// // //               className="flex flex-col items-center min-w-[40px] group relative overflow-visible"
// // //             >
// // //               <span className="text-xs font-medium text-gray-800 mb-1">{hour}</span>
// // //               <div className="flex flex-col items-center relative overflow-visible">
// // //                 <div className="flex gap-[2px] relative z-10">
// // //                   {[0, 1].map((offset) => {
// // //                     const barIndex = baseBarIndex + offset;
// // //                     const isPast = barIndex < currentBarIndex;
// // //                     const isReserved = isReservedBarIndex(barIndex);
// // //                     const isDisabled = isPast || isReserved;
// // //                     const isSelected = isWithinAnyRange(barIndex);
// // //                     const isHovered = isInCurrentHoverRange(barIndex);

// // //                     const baseClasses =
// // //                       'w-[14px] h-8 rounded-md border transition-all duration-200 relative';
// // //                     let colorClasses;
// // //                     if (isDisabled) {
// // //                       colorClasses =
// // //                         'bg-[repeating-linear-gradient(-45deg,_#f9fafb_0px,_#f9fafb_5px,_#e5e7eb_5px,_#e5e7eb_10px)] border-gray-300 cursor-not-allowed';
// // //                     } else if (isSelected) {
// // //                       colorClasses = 'bg-blue-600 border-blue-700 cursor-pointer';
// // //                     } else if (isHovered) {
// // //                       colorClasses = 'bg-blue-400 border-blue-500 cursor-pointer';
// // //                     } else {
// // //                       colorClasses = 'bg-gray-100 border-gray-300 cursor-pointer';
// // //                     }

// // //                     const showTooltip =
// // //                       !isDisabled &&
// // //                       rangeStart !== null &&
// // //                       hoveredIndex !== null &&
// // //                       barIndex === Math.max(rangeStart, hoveredIndex);

// // //                     return (
// // //                       <div
// // //                         key={offset}
// // //                         className={`${baseClasses} ${colorClasses}`}
// // //                         style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
// // //                         onClick={() => !isDisabled && handleClick(barIndex)}
// // //                         onMouseEnter={() => !isDisabled && handleHover(barIndex)}
// // //                       >
// // //                         {showTooltip && (
// // //                           <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
// // //                             <div className="bg-white text-gray-800 text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap border z-50">
// // //                               {getTimeFromBarIndex(Math.min(rangeStart, hoveredIndex))} →{' '}
// // //                               {getTimeFromBarIndex(Math.max(rangeStart, hoveredIndex) + 1)} (
// // //                               {getDuration(
// // //                                 Math.min(rangeStart, hoveredIndex),
// // //                                 Math.max(rangeStart, hoveredIndex)
// // //                               )}
// // //                               )
// // //                             </div>
// // //                             <div className="w-2 h-2 bg-white rotate-45 shadow-sm -mt-1 z-50 border border-t-0 border-l-0" />
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     );
// // //                   })}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //       <button className="rounded-full border p-2 hover:bg-gray-100 transition" onClick={handleNext}>
// // //         ❯
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default TimeSelector;
// // import React, { useState, useMemo, useEffect } from 'react';

// // const TimeSelector = ({ onTimeSelect, reservation, Datecalender, reset }) => {
// //   const [selectedRanges, setSelectedRanges] = useState([]);
// //   const [rangeStart, setRangeStart] = useState(null);
// //   const [hoveredIndex, setHoveredIndex] = useState(null);
// //   const [startIndex, setStartIndex] = useState(0);

// //   // Reset state when the reset prop changes
// //   useEffect(() => {
// //     setSelectedRanges([]);
// //     setRangeStart(null);
// //     setHoveredIndex(null);
// //     setStartIndex(0);
// //   }, [reset]);

// //   const today = new Date();
// //   // 1) Figure out which half-hour block is "now"
// //   let currentBarIndex;
// //   if (today.toDateString() === Datecalender.toDateString()) {
// //     const currentHour = today.getHours();
// //     const currentMinutes = today.getMinutes();
// //     currentBarIndex = currentHour * 2 + (currentMinutes >= 30 ? 1 : 0);
// //   } else {
// //     currentBarIndex = 0;
// //   }

// //   // 2) Build a simple array of "HH:00" labels
// //   const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
// //   const visibleHours = hours.slice(startIndex, startIndex + 11);

// //   // 3) Whenever Datecalender changes, if it is "today," jump startIndex so the display begins near current time
// //   useEffect(() => {
// //     if (today.toDateString() === Datecalender.toDateString()) {
// //       const nowHourIndex = Math.floor(currentBarIndex / 2);
// //       const maxStartIndex = hours.length - 11; // e.g., 24 - 11 = 13
// //       let newStartIndex = nowHourIndex;
// //       if (newStartIndex > maxStartIndex) {
// //         newStartIndex = maxStartIndex; 
// //       }
// //       if (newStartIndex < 0) {
// //         newStartIndex = 0;
// //       }
// //       setStartIndex(newStartIndex);
// //     } else {
// //       setStartIndex(0);
// //     }
// //   }, [Datecalender]);

// //   // -----------------------------
// //   // Helper: "HH:mm" => barIndex
// //   // -----------------------------
// //   const getBarIndexFromTime = (timeStr) => {
// //     if (!timeStr) return null;
// //     const [hourStr, minStr] = timeStr.split(':');
// //     const hour = parseInt(hourStr, 10);
// //     const minutes = parseInt(minStr, 10);
// //     return hour * 2 + (minutes >= 30 ? 1 : 0);
// //   };

// //   // -----------------------------
// //   // Build array of reserved ranges
// //   // -----------------------------
// //   const reservedRanges = useMemo(() => {
// //     // Check that both Datecalender and reservation exist
// //     if (!Datecalender || !reservation) return [];
// //     const selectedDateStr = Datecalender.toISOString().split('T')[0];
// //     return reservation
// //       .filter((r) => {
// //         const resDateStr = new Date(r.date).toISOString().split('T')[0];
// //         return resDateStr === selectedDateStr;
// //       })
// //       .map((r) => {
// //         const start = getBarIndexFromTime(r.check_in);
// //         const end = getBarIndexFromTime(r.check_out);
// //         if (start === null || end === null) return null;
// //         return [start, end]; 
// //       })
// //       .filter(Boolean);
// //   }, [reservation, Datecalender]);

// //   // Check if barIndex is within any reserved range
// //   const isReservedBarIndex = (barIndex) =>
// //     reservedRanges.some(([start, end]) => barIndex >= start && barIndex < end);

// //   // Check if barIndex is within any user-selected range
// //   const isWithinAnyRange = (barIndex) =>
// //     selectedRanges.some(([start, end]) =>
// //       barIndex >= Math.min(start, end) && barIndex <= Math.max(start, end)
// //     );

// //   // Check if barIndex is in the current hover range
// //   const isInCurrentHoverRange = (barIndex) => {
// //     if (rangeStart === null || hoveredIndex === null) return false;
// //     return (
// //       barIndex >= Math.min(rangeStart, hoveredIndex) &&
// //       barIndex <= Math.max(rangeStart, hoveredIndex)
// //     );
// //   };

// //   // barIndex => "HH:mm"
// //   const getTimeFromBarIndex = (barIndex) => {
// //     const hour = Math.floor(barIndex / 2);
// //     const minutes = barIndex % 2 === 0 ? '00' : '30';
// //     return `${hour.toString().padStart(2, '0')}:${minutes}`;
// //   };

// //   // Display duration e.g., "1h 30 mins"
// //   const getDuration = (start, end) => {
// //     const diffInBlocks = Math.abs(end - start + 1); // number of 30-min increments
// //     const diffMinutes = diffInBlocks * 30;
// //     if (diffMinutes >= 60) {
// //       const hours = Math.floor(diffMinutes / 60);
// //       const mins = diffMinutes % 60;
// //       return mins === 0 ? `${hours}h` :` ${hours}h ${mins} mins`;
// //     }
// //     return `${diffMinutes} mins`;
// //   };

// //   // Click => set or finish selecting a range
// //   const handleClick = (barIndex) => {
// //     // Block clicks if it's in the past or reserved
// //     if (barIndex < currentBarIndex || isReservedBarIndex(barIndex)) {
// //       return;
// //     }
// //     if (rangeStart === null) {
// //       // start new range
// //       setRangeStart(barIndex);
// //       setHoveredIndex(barIndex);
// //     } else {
// //       // finish range
// //       const durationBlocks = Math.abs(barIndex - rangeStart) + 1;
// //       // Only allow whole-hour multiples: at least 2 blocks (1 hour), 4 blocks (2h), etc.
// //       if (durationBlocks < 2 || durationBlocks % 2 !== 0) {
// //         return;
// //       }
// //       const newRange = [rangeStart, barIndex];
// //       setSelectedRanges([...selectedRanges, newRange]);
// //       setRangeStart(null);
// //       setHoveredIndex(null);

// //       if (onTimeSelect) {
// //         const start = Math.min(rangeStart, barIndex);
// //         const end = Math.max(rangeStart, barIndex) + 1;
// //         const startTime = getTimeFromBarIndex(start);
// //         const endTime = getTimeFromBarIndex(end);
// //         onTimeSelect({ startTime, endTime });
// //       }
// //     }
// //   };

// //   // Hover => update hoveredIndex if valid
// //   const handleHover = (barIndex) => {
// //     if (barIndex < currentBarIndex || rangeStart === null || isReservedBarIndex(barIndex)) {
// //       return;
// //     }
// //     setHoveredIndex(barIndex);
// //   };

// //   // Navigation: "previous" & "next" hour blocks
// //   const handlePrev = () => {
// //     if (startIndex > 0) {
// //       setStartIndex(startIndex - 1);
// //     }
// //   };
// //   const handleNext = () => {
// //     if (startIndex < hours.length - 11) {
// //       setStartIndex(startIndex + 1);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md relative overflow-visible">
// //       <button className="rounded-full border p-2 hover:bg-gray-100 transition" onClick={handlePrev}>
// //         ❮
// //       </button>
// //       <div className="flex space-x-6 relative">
// //         {visibleHours.map((hour, i) => {
// //           const hourIndex = startIndex + i;
// //           const baseBarIndex = hourIndex * 2;
// //           return (
// //             <div
// //               key={hour}
// //               className="flex flex-col items-center min-w-[40px] group relative overflow-visible"
// //             >
// //               <span className="text-xs font-medium text-gray-800 mb-1">{hour}</span>
// //               <div className="flex flex-col items-center relative overflow-visible">
// //                 <div className="flex gap-[2px] relative z-10">
// //                   {[0, 1].map((offset) => {
// //                     const barIndex = baseBarIndex + offset;
// //                     const isPast = barIndex < currentBarIndex;
// //                     const isReserved = isReservedBarIndex(barIndex);
// //                     const isDisabled = isPast || isReserved;
// //                     const isSelected = isWithinAnyRange(barIndex);
// //                     const isHovered = isInCurrentHoverRange(barIndex);

// //                     const baseClasses =
// //                       'w-[14px] h-8 rounded-md border transition-all duration-200 relative';
// //                     let colorClasses;
// //                     if (isDisabled) {
// //                       colorClasses =
// //                         'bg-[repeating-linear-gradient(-45deg,_#f9fafb_0px,_#f9fafb_5px,_#e5e7eb_5px,_#e5e7eb_10px)] border-gray-300 cursor-not-allowed';
// //                     } else if (isSelected) {
// //                       colorClasses = 'bg-blue-600 border-blue-700 cursor-pointer';
// //                     } else if (isHovered) {
// //                       colorClasses = 'bg-blue-400 border-blue-500 cursor-pointer';
// //                     } else {
// //                       colorClasses = 'bg-gray-100 border-gray-300 cursor-pointer';
// //                     }

// //                     const showTooltip =
// //                       !isDisabled &&
// //                       rangeStart !== null &&
// //                       hoveredIndex !== null &&
// //                       barIndex === Math.max(rangeStart, hoveredIndex);

// //                     return (
// //                       <div
// //                         key={offset}
// //                         className={`${baseClasses} ${colorClasses}`}
// //                         style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
// //                         onClick={() => !isDisabled && handleClick(barIndex)}
// //                         onMouseEnter={() => !isDisabled && handleHover(barIndex)}
// //                       >
// //                         {showTooltip && (
// //                           <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
// //                             <div className="bg-white text-gray-800 text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap border z-50">
// //                               {getTimeFromBarIndex(Math.min(rangeStart, hoveredIndex))} →{' '}
// //                               {getTimeFromBarIndex(Math.max(rangeStart, hoveredIndex) + 1)} (
// //                               {getDuration(
// //                                 Math.min(rangeStart, hoveredIndex),
// //                                 Math.max(rangeStart, hoveredIndex)
// //                               )}
// //                               )
// //                             </div>
// //                             <div className="w-2 h-2 bg-white rotate-45 shadow-sm -mt-1 z-50 border border-t-0 border-l-0" />
// //                           </div>
// //                         )}
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //       <button className="rounded-full border p-2 hover:bg-gray-100 transition" onClick={handleNext}>
// //         ❯
// //       </button>
// //     </div>
// //   );
// // };

// // export default TimeSelector;

// import React, { useState, useMemo, useEffect } from 'react';

// const TimeSelector = ({ onTimeSelect, reservation, Datecalender, reset }) => {
//   const [selectedRanges, setSelectedRanges] = useState([]);
//   const [rangeStart, setRangeStart] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [startIndex, setStartIndex] = useState(0);

//   // Reset state when the reset prop changes
//   useEffect(() => {
//     setSelectedRanges([]);
//     setRangeStart(null);
//     setHoveredIndex(null);
//     setStartIndex(0);
//   }, [reset]);

//   const today = new Date();
//   let currentBarIndex;
//   if (today.toDateString() === Datecalender.toDateString()) {
//     const currentHour = today.getHours();
//     const currentMinutes = today.getMinutes();
//     // Our slots start at 8:00 so if currentHour < 8, we default to index 0.
//     if (currentHour < 8) {
//       currentBarIndex = 0;
//     } else {
//       currentBarIndex = (currentHour - 8) * 2 + (currentMinutes >= 30 ? 1 : 0);
//     }
//   } else {
//     currentBarIndex = 0;
//   }

//   // Build an array of hour labels from 8:00 to 00:00.
//   const hours = Array.from({ length: 17 }, (_, i) => {
//     const hour = i + 8;
//     return hour === 24 ? "00:00" : `${hour}:00`;
//   });
//   const visibleHours = hours.slice(startIndex, startIndex + 11);

//   // Jump startIndex based on today's time (only if Datecalender is today)
//   useEffect(() => {
//     if (today.toDateString() === Datecalender.toDateString()) {
//       const nowHourIndex = Math.floor(currentBarIndex / 2);
//       const maxStartIndex = hours.length - 11; // e.g. 17 - 11 = 6
//       let newStartIndex = nowHourIndex;
//       if (newStartIndex > maxStartIndex) newStartIndex = maxStartIndex;
//       if (newStartIndex < 0) newStartIndex = 0;
//       setStartIndex(newStartIndex);
//     } else {
//       setStartIndex(0);
//     }
//   }, [Datecalender]);

//   // -----------------------------
//   // Helper: "HH:mm" => barIndex (offset by 8)
//   // -----------------------------
//   const getBarIndexFromTime = (timeStr) => {
//     if (!timeStr) return null;
//     const [hourStr, minStr] = timeStr.split(':');
//     // If timeStr is "00:00", interpret as 24:00 for calculations.
//     const hour = parseInt(hourStr, 10) === 0 ? 24 : parseInt(hourStr, 10);
//     const minutes = parseInt(minStr, 10);
//     return (hour - 8) * 2 + (minutes >= 30 ? 1 : 0);
//   };

//   // -----------------------------
//   // Build array of reserved ranges
//   // -----------------------------
//   const reservedRanges = useMemo(() => {
//     if (!Datecalender || !reservation) return [];
//     const selectedDateStr = Datecalender.toISOString().split('T')[0];
//     return reservation
//       .filter((r) => {
//         const resDateStr = new Date(r.date).toISOString().split('T')[0];
//         return resDateStr === selectedDateStr;
//       })
//       .map((r) => {
//         const start = getBarIndexFromTime(r.check_in);
//         const end = getBarIndexFromTime(r.check_out);
//         if (start === null || end === null) return null;
//         return [start, end];
//       })
//       .filter(Boolean);
//   }, [reservation, Datecalender]);

//   // -----------------------------
//   // Check if a barIndex falls in any reserved range.
//   // -----------------------------
//   const isReservedBarIndex = (barIndex) =>
//     reservedRanges.some(([start, end]) => barIndex >= start && barIndex < end);

//   const isWithinAnyRange = (barIndex) =>
//     selectedRanges.some(([start, end]) =>
//       barIndex >= Math.min(start, end) && barIndex <= Math.max(start, end)
//     );

//   const isInCurrentHoverRange = (barIndex) => {
//     if (rangeStart === null || hoveredIndex === null) return false;
//     return (
//       barIndex >= Math.min(rangeStart, hoveredIndex) &&
//       barIndex <= Math.max(rangeStart, hoveredIndex)
//     );
//   };

//   // -----------------------------
//   // Convert barIndex back to "HH:mm" (adding an offset of 8)
//   // -----------------------------
//   const getTimeFromBarIndex = (barIndex) => {
//     const hour = Math.floor(barIndex / 2) + 8;
//     const minutes = barIndex % 2 === 0 ? '00' : '30';
//     const displayHour = hour === 24 ? "00" : hour.toString().padStart(2, '0');
//     return `${displayHour}:${minutes}`;
//   };

//   // -----------------------------
//   // Display duration e.g., "1h 30 mins"
//   // -----------------------------
//   const getDuration = (start, end) => {
//     const diffInBlocks = Math.abs(end - start + 1);
//     const diffMinutes = diffInBlocks * 30;
//     if (diffMinutes >= 60) {
//       const hrs = Math.floor(diffMinutes / 60);
//       const mins = diffMinutes % 60;
//       return mins === 0 ? `${hrs}h` : `${hrs}h ${mins} mins`;
//     }
//     return `${diffMinutes} mins`;
//   };

//   // -----------------------------
//   // Handle click on a time slot: start or complete range selection.
//   // -----------------------------
//   const handleClick = (barIndex) => {
//     if (barIndex < currentBarIndex || isReservedBarIndex(barIndex)) return;
//     if (rangeStart === null) {
//       setRangeStart(barIndex);
//       setHoveredIndex(barIndex);
//     } else {
//       const durationBlocks = Math.abs(barIndex - rangeStart) + 1;
//       if (durationBlocks < 2 || durationBlocks % 2 !== 0) return;
//       const newRange = [rangeStart, barIndex];
//       setSelectedRanges([...selectedRanges, newRange]);
//       setRangeStart(null);
//       setHoveredIndex(null);
//       if (onTimeSelect) {
//         const start = Math.min(rangeStart, barIndex);
//         const end = Math.max(rangeStart, barIndex) + 1;
//         const startTime = getTimeFromBarIndex(start);
//         const endTime = getTimeFromBarIndex(end);
//         onTimeSelect({ startTime, endTime });
//       }
//     }
//   };

//   // -----------------------------
//   // Handle hover on a time slot.
//   // -----------------------------
//   const handleHover = (barIndex) => {
//     if (barIndex < currentBarIndex || rangeStart === null || isReservedBarIndex(barIndex))
//       return;
//     setHoveredIndex(barIndex);
//   };

//   // -----------------------------
//   // Navigation between hour blocks.
//   // -----------------------------
//   const handlePrev = () => {
//     if (startIndex > 0) setStartIndex(startIndex - 1);
//   };
//   const handleNext = () => {
//     if (startIndex < hours.length - 11) setStartIndex(startIndex + 1);
//   };

//   return (
//     <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md relative overflow-visible">
//       <button className="rounded-full border p-2 hover:bg-gray-100 transition" onClick={handlePrev}>
//         ❮
//       </button>
//       <div className="flex space-x-6 relative">
//         {visibleHours.map((hour, i) => {
//           const hourIndex = startIndex + i;
//           const baseBarIndex = hourIndex * 2;
//           return (
//             <div key={hour} className="flex flex-col items-center min-w-[40px] group relative overflow-visible">
//               <span className="text-xs font-medium text-gray-800 mb-1">{hour}</span>
//               <div className="flex flex-col items-center relative overflow-visible">
//                 <div className="flex gap-[2px] relative z-10">
//                   {[0, 1].map((offset) => {
//                     const barIndex = baseBarIndex + offset;
//                     const isPast = barIndex < currentBarIndex;
//                     const isReserved = isReservedBarIndex(barIndex);
//                     const isDisabled = isPast || isReserved;
//                     const isSelected = isWithinAnyRange(barIndex);
//                     const isHovered = isInCurrentHoverRange(barIndex);
//                     const baseClasses =
//                       'w-[14px] h-8 rounded-md border transition-all duration-200 relative';
//                     let colorClasses;
//                     if (isDisabled) {
//                       colorClasses =
//                         'bg-[repeating-linear-gradient(-45deg,_#f9fafb_0px,_#f9fafb_5px,_#e5e7eb_5px,_#e5e7eb_10px)] border-gray-300 cursor-not-allowed';
//                     } else if (isSelected) {
//                       colorClasses = 'bg-blue-600 border-blue-700 cursor-pointer';
//                     } else if (isHovered) {
//                       colorClasses = 'bg-blue-400 border-blue-500 cursor-pointer';
//                     } else {
//                       colorClasses = 'bg-gray-100 border-gray-300 cursor-pointer';
//                     }
//                     const showTooltip =
//                       !isDisabled &&
//                       rangeStart !== null &&
//                       hoveredIndex !== null &&
//                       barIndex === Math.max(rangeStart, hoveredIndex);
//                     return (
//                       <div
//                         key={offset}
//                         className={`${baseClasses} ${colorClasses}`}
//                         style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
//                         onClick={() => !isDisabled && handleClick(barIndex)}
//                         onMouseEnter={() => !isDisabled && handleHover(barIndex)}
//                       >
//                         {showTooltip && (
//                           <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
//                             <div className="bg-white text-gray-800 text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap border z-50">
//                               {getTimeFromBarIndex(Math.min(rangeStart, hoveredIndex))} →{' '}
//                               {getTimeFromBarIndex(Math.max(rangeStart, hoveredIndex) + 1)} (
//                               {getDuration(
//                                 Math.min(rangeStart, hoveredIndex),
//                                 Math.max(rangeStart, hoveredIndex)
//                               )}
//                               )
//                             </div>
//                             <div className="w-2 h-2 bg-white rotate-45 shadow-sm -mt-1 z-50 border border-t-0 border-l-0" />
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <button className="rounded-full border p-2 hover:bg-gray-100 transition" onClick={handleNext}>
//         ❯
//       </button>
//     </div>
//   );
// };

// export default TimeSelector;

import React, { useState, useMemo, useEffect } from 'react';

const TimeSelector = ({ onTimeSelect, reservation, Datecalender, reset }) => {
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [rangeStart, setRangeStart] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  // Reset state when the reset prop changes
  useEffect(() => {
    setSelectedRanges([]);
    setRangeStart(null);
    setHoveredIndex(null);
    setStartIndex(0);
  }, [reset]);

  const today = new Date();
  let currentBarIndex;
  if (today.toDateString() === Datecalender.toDateString()) {
    const currentHour = today.getHours();
    const currentMinutes = today.getMinutes();
    // Our slots start at 8:00, so if currentHour < 8, default to 0
    if (currentHour < 8) {
      currentBarIndex = 0;
    } else {
      currentBarIndex = (currentHour - 8) * 2 + (currentMinutes >= 30 ? 1 : 0);
    }
  } else {
    currentBarIndex = 0;
  }

  // Build an array of hour labels from 8:00 to 23:00 (removing 00:00).
  // That means 8..23 => 8..(23 inclusive) = 16 total hours.
  const hours = Array.from({ length: 16 }, (_, i) => {
    const hour = i + 8; // 8..23
    return `${hour}:00`;
  });

  const visibleHours = hours.slice(startIndex, startIndex + 11);

  // Jump startIndex based on today's time (only if Datecalender is today)
  useEffect(() => {
    if (today.toDateString() === Datecalender.toDateString()) {
      const nowHourIndex = Math.floor(currentBarIndex / 2);
      const maxStartIndex = hours.length - 11; // e.g. 16 - 11 = 5
      let newStartIndex = nowHourIndex;
      if (newStartIndex > maxStartIndex) newStartIndex = maxStartIndex;
      if (newStartIndex < 0) newStartIndex = 0;
      setStartIndex(newStartIndex);
    } else {
      setStartIndex(0);
    }
  }, [Datecalender]);

  // -----------------------------
  // Helper: "HH:mm" => barIndex
  // (Offset by 8, because we start at 8:00)
  // -----------------------------
  const getBarIndexFromTime = (timeStr) => {
    if (!timeStr) return null;
    const [hourStr, minStr] = timeStr.split(':');
    const hour = parseInt(hourStr, 10);
    const minutes = parseInt(minStr, 10);
    // Example: "08:00" => barIndex = 0
    // "08:30" => barIndex = 1
    // "09:00" => barIndex = 2
    // ...
    // So subtract 8 from hour
    return (hour - 8) * 2 + (minutes >= 30 ? 1 : 0);
  };

  // -----------------------------
  // Build array of reserved ranges
  // -----------------------------
  const reservedRanges = useMemo(() => {
    if (!Datecalender || !reservation) return [];
    const selectedDateStr = Datecalender.toISOString().split('T')[0];
    return reservation
      .filter((r) => {
        const resDateStr = new Date(r.date).toISOString().split('T')[0];
        return resDateStr === selectedDateStr;
      })
      .map((r) => {
        const start = getBarIndexFromTime(r.check_in);
        const end = getBarIndexFromTime(r.check_out);
        if (start === null || end === null) return null;
        return [start, end];
      })
      .filter(Boolean);
  }, [reservation, Datecalender]);

  // -----------------------------
  // Check if a barIndex is reserved
  // -----------------------------
  const isReservedBarIndex = (barIndex) =>
    reservedRanges.some(([start, end]) => barIndex >= start && barIndex < end);

  // Check if barIndex is in user-selected ranges
  const isWithinAnyRange = (barIndex) =>
    selectedRanges.some(([start, end]) =>
      barIndex >= Math.min(start, end) && barIndex <= Math.max(start, end)
    );

  // Check if barIndex is in the current hover range
  const isInCurrentHoverRange = (barIndex) => {
    if (rangeStart === null || hoveredIndex === null) return false;
    return (
      barIndex >= Math.min(rangeStart, hoveredIndex) &&
      barIndex <= Math.max(rangeStart, hoveredIndex)
    );
  };

  // -----------------------------
  // Convert barIndex => "HH:mm"
  // -----------------------------
  const getTimeFromBarIndex = (barIndex) => {
    // Example: barIndex = 0 => 08:00
    // barIndex = 1 => 08:30
    // barIndex = 2 => 09:00
    const totalMinutes = barIndex * 30; // # of 30-min increments after 8:00
    const hourOffset = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const hour = 8 + hourOffset; // add offset to 8
    const hh = hour.toString().padStart(2, '0');
    const mm = minutes.toString().padStart(2, '0');
    return `${hh}:${mm}`;
  };

  // Display e.g., "1h 30 mins"
  const getDuration = (start, end) => {
    const diffInBlocks = Math.abs(end - start + 1);
    const diffMinutes = diffInBlocks * 30;
    if (diffMinutes >= 60) {
      const hrs = Math.floor(diffMinutes / 60);
      const mins = diffMinutes % 60;
      return mins === 0 ? `${hrs}h` : `${hrs}h ${mins} mins`;
    }
    return `${diffMinutes} mins`;
  };

  // -----------------------------
  // Handle slot clicks
  // -----------------------------
  const handleClick = (barIndex) => {
    if (barIndex < currentBarIndex || isReservedBarIndex(barIndex)) return;
    if (rangeStart === null) {
      setRangeStart(barIndex);
      setHoveredIndex(barIndex);
    } else {
      const durationBlocks = Math.abs(barIndex - rangeStart) + 1;
      if (durationBlocks < 2 || durationBlocks % 2 !== 0) return; // must be at least 1 hour
      const newRange = [rangeStart, barIndex];
      setSelectedRanges((prev) => [...prev, newRange]);
      setRangeStart(null);
      setHoveredIndex(null);
      if (onTimeSelect) {
        const start = Math.min(rangeStart, barIndex);
        const end = Math.max(rangeStart, barIndex) + 1; // +1 since the end is exclusive
        const startTime = getTimeFromBarIndex(start);
        const endTime = getTimeFromBarIndex(end);
        onTimeSelect({ startTime, endTime });
      }
    }
  };

  // -----------------------------
  // Hover
  // -----------------------------
  const handleHover = (barIndex) => {
    if (barIndex < currentBarIndex || rangeStart === null || isReservedBarIndex(barIndex)) {
      return;
    }
    setHoveredIndex(barIndex);
  };

  // -----------------------------
  // Navigation
  // -----------------------------
  const handlePrev = () => {
    if (startIndex > 0) setStartIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    if (startIndex < hours.length - 11) setStartIndex((prev) => prev + 1);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md relative overflow-visible">
      <button className="rounded-full border p-2 hover:bg-gray-100 transition" onClick={handlePrev}>
        ❮
      </button>
      <div className="flex space-x-6 relative">
        {visibleHours.map((hour, i) => {
          const hourIndex = startIndex + i;
          const baseBarIndex = hourIndex * 2;
          return (
            <div
              key={hour}
              className="flex flex-col items-center min-w-[40px] group relative overflow-visible"
            >
              <span className="text-xs font-medium text-gray-800 mb-1">{hour}</span>
              <div className="flex flex-col items-center relative overflow-visible">
                <div className="flex gap-[2px] relative z-10">
                  {[0, 1].map((offset) => {
                    const barIndex = baseBarIndex + offset;
                    const isPast = barIndex < currentBarIndex;
                    const isReserved = isReservedBarIndex(barIndex);
                    const isDisabled = isPast || isReserved;
                    const isSelected = isWithinAnyRange(barIndex);
                    const isHovered = isInCurrentHoverRange(barIndex);

                    const baseClasses =
                      'w-[14px] h-8 rounded-md border transition-all duration-200 relative';
                    let colorClasses;
                    if (isDisabled) {
                      colorClasses =
                        'bg-[repeating-linear-gradient(-45deg,_#f9fafb_0px,_#f9fafb_5px,_#e5e7eb_5px,_#e5e7eb_10px)] border-gray-300 cursor-not-allowed';
                    } else if (isSelected) {
                      colorClasses = 'bg-blue-600 border-blue-700 cursor-pointer';
                    } else if (isHovered) {
                      colorClasses = 'bg-blue-400 border-blue-500 cursor-pointer';
                    } else {
                      colorClasses = 'bg-gray-100 border-gray-300 cursor-pointer';
                    }

                    const showTooltip =
                      !isDisabled &&
                      rangeStart !== null &&
                      hoveredIndex !== null &&
                      barIndex === Math.max(rangeStart, hoveredIndex);

                    return (
                      <div
                        key={offset}
                        className={`${baseClasses} ${colorClasses}`}
                        style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
                        onClick={() => !isDisabled && handleClick(barIndex)}
                        onMouseEnter={() => !isDisabled && handleHover(barIndex)}
                      >
                        {showTooltip && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
                            <div className="bg-white text-gray-800 text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap border z-50">
                              {getTimeFromBarIndex(Math.min(rangeStart, hoveredIndex))} →{' '}
                              {getTimeFromBarIndex(Math.max(rangeStart, hoveredIndex) + 1)} (
                              {getDuration(
                                Math.min(rangeStart, hoveredIndex),
                                Math.max(rangeStart, hoveredIndex)
                              )}
                              )
                            </div>
                            <div className="w-2 h-2 bg-white rotate-45 shadow-sm -mt-1 z-50 border border-t-0 border-l-0" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="rounded-full border p-2 hover:bg-gray-100 transition" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default TimeSelector;

