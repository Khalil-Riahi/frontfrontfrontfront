'use client';
import React, { useState, useEffect } from "react";
// import UserAddressCard from "./../../components/user-profile/UserAddressCard";
import UserAddressCard from "./../../../../user-profile/UserAddressCard";

import UserInfoCard from "./../../../../user-profile/UserInfoCard";
import UserMetaCard from "./../../../../user-profile/UserMetaCard";

export default function Profile() {
  const [userDataAll, setUserDataAll] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [idUser, setIdUser] = useState(null);

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
      }
    }

    fetchUserId();
  }, []);

  useEffect(() => {
    if (!idUser) return;

    async function gettingUser() {
      try {
        const response = await fetch(`http://localhost:8000/ELACO/userSubscription/currentSubscriptions/${idUser}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch user details: ${response.statusText}`);
        }

        const resData = await response.json();
        console.log(resData.data);
        setUserDataAll(resData.data);
      } catch (error) {
        console.error("Error fetching userData:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    gettingUser();
  }, [idUser]);

  if (loading) {
    return <div className="p-4">Loading profile...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard all={userDataAll} />
          <UserInfoCard all={userDataAll} />
          <UserAddressCard all={userDataAll} />
        </div>
      </div>
    </div>
  );
}
