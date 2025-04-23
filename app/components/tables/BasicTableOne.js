// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import Badge from "../ui/badge/Badge";

// export default function BasicTableOne() {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   // const [idUser , setIdUser] = useState(null)
//   const [idUser , setIdUser] = useState(null)

//   // const idUser = "67c0359f5688c67382a063dd";

//   useEffect(() => {
//     const storedId = localStorage.getItem("userId");
//     if (storedId) {
//       setIdUser(storedId);
//     }
//   }, []);



//   useEffect(() => {
//     if (!idUser) return;

//     async function fetchStatus() {
//       try {
//         const response = await fetch(
//           `http://localhost:8000/ELACO/booking/BookingHistory/${idUser}`,
//           {
//             method: "GET",
//             // credentials: "include",
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Failed to fetch user History status: ${response.statusText}`);
//         }

//         const data = await response.json();
//         console.log("history:", data.data.history);
//         setHistory(data.data.history);
//       } catch (error) {
//         console.error("Error fetching history:", error);
//         setError(error.message || "An unknown error occurred");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchStatus();
//   }, [idUser]);

//   if (loading) return <div className="p-4">Loading history...</div>;

//   if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

//   if (history.length === 0)
//     return <div className="p-4">No history data available</div>;

//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
//       <div className="max-w-full overflow-x-auto">
//         <div className="min-w-[1102px]">
//           <Table>
//             <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
//               <TableRow>
//                 <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Check In</TableCell>
//                 <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Check Out</TableCell>
//                 <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Date</TableCell>
//                 <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Price</TableCell>
//                 <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Payment Method</TableCell>
//               </TableRow>
//             </TableHeader>

//             <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//               {history.map((item, index) => (
//                 <TableRow key={`${item.date}-${index}`}>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {item.check_in}
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {item.check_out}
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {new Date(item.date).toLocaleDateString()}
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {item.price} TND
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     <Badge
//                       size="md"
//                       color={
//                         item.paymentMethod === "cash"
//                           ? "success"
//                           : item.paymentMethod === "points"
//                           ? "warning"
//                           : item.paymentMethod === "subscription"
//                           ? "info"
//                           : "error"
//                       }
//                     >
//                       {item.paymentMethod}
//                     </Badge>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

export default function BasicTableOne() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idUser, setIdUser] = useState(null);

  // Get user ID from localStorage
  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) {
      setIdUser(storedId);
    }
  }, []);

  // Fetch user booking history
  useEffect(() => {
    if (!idUser) return;

    async function fetchStatus() {
      try {
        const response = await fetch(
          `http://localhost:8000/ELACO/booking/BookingHistory/${idUser}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch user History status: ${response.statusText}`);
        }

        const data = await response.json();
        setHistory(data?.data?.history || []);
      } catch (err) {
        console.error("Error fetching history:", err);
        setError(err?.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchStatus();
  }, [idUser]);

  if (loading) return <div className="p-4">Loading history...</div>;

  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  if (history.length === 0)
    return <div className="p-4">No history data available</div>;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Check In</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Check Out</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Date</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Price</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Payment Method</TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {history.map((item, index) => (
                <TableRow key={`${item.date}-${index}`}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.check_in}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.check_out}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {new Date(item.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.price} TND
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="md"
                      color={
                        item.paymentMethod === "cash"
                          ? "success"
                          : item.paymentMethod === "points"
                          ? "warning"
                          : item.paymentMethod === "subscription"
                          ? "info"
                          : "error"
                      }
                    >
                      {item.paymentMethod}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
