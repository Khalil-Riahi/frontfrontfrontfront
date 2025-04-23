'use client';
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";

export default function BasicTableTwo() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idUser , setIdUser] = useState(null)

  useEffect(() => {
      const storedId = localStorage.getItem("userId");
      if (storedId) {
        setIdUser(storedId);
      }
    }, []);

  // const idUser1 = "67c0359f5688c67382a063dd";

  useEffect(() => {
    async function fetchSubscriptions() {
      try {
        const response = await fetch(
          `http://localhost:8000/ELACO/userSubscription/getUsersubscriptionByIduser/${idUser}`,
          {
            method: "GET",
            // credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch subscriptions: ${response.statusText}`);
        }

        const data = await response.json();
        setSubscriptions(data?.data?.userSubscriptions || []);
        console.log("Fetched subscriptions:", data?.data?.userSubscriptions);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscriptions();
  }, [idUser]);

  if (loading) {
    return <div className="p-4">Loading history...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (subscriptions.length === 0) {
    return <div className="p-4">No history data available</div>;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">ID</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Start Date</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">End Date</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Payment Status</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Subscription Type</TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {subscriptions.map((subscription) => (
                <TableRow key={subscription._id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {subscription._id || "N/A"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {subscription.start_date?.substring(0, 10) || "N/A"}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {subscription.end_date?.substring(0, 10) || "N/A"}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="md"
                      color={
                        subscription.status === "active"
                          ? "success"
                          : subscription.status === "unavailable"
                          ? "error"
                          : "warning"
                      }
                    >
                      {subscription.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {subscription.subscription_type || "N/A"}
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
