// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Trash2, Search } from 'lucide-react';
// import Pointsmodal from './../pointsModal.js'
// // import 

// // const tabs = [
// //   { name: 'All', count: 20 },
// //   { name: 'Treated', count: 10 },
// //   { name: 'Untreated', count: 17 },
// // ];

// export default function NotificationPanel() {
//   const [selectedTab, setSelectedTab] = useState('Untreated');
//   const [notifications1, setNotifications1] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [idUser, setIdUser] = useState(null);
//   const [inSerch , setInSearch] = useState('')
//   const [len1 , setLen1] = useState()
//   const [len2 , setLen2] = useState()
//   // const [len1 , setLen1] = useState()


//   const tabs = [
//     { name: 'All', count: notifications1.length },
//     { name: 'Treated', count: len2 },
//     { name: 'Untreated', count: len1 },
//   ];

  
//   // const []

//   const [selectedNotification , setSelectedNotification] = useState(null)

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const search = useRef()
  


//   useEffect(() => {
//     const storedId = localStorage.getItem('userId');
//     if (storedId) setIdUser(storedId);
//   }, []);

//   useEffect(() => {
//     if (!idUser) return;

//     async function getUserNotifications() {
//       try {
//         const response = await fetch(
//           `http://localhost:8000/ELACO/notification/getUserNotifications/${idUser}`
//         );

//         if (!response.ok) {
//           throw Error(`Error fetching notifications: ${response.statusText}`);
//         }

//         const resData = await response.json();
//         setNotifications1(resData.notifications);

//         setLen1(notifications1.filter((not) => not.status === 'not-treated').length);
//         setLen2(notifications1.filter((not) => not.status === 'treated').length)
        
//       } catch (err) {
//         console.error(err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getUserNotifications();
//   }, [idUser , len1 , len2]);

//   const handleDelete = (id) => {
//     setNotifications1((prev) => prev.filter((n) => n._id !== id));
//   };

//   function notificationToClick(notification){
//     setSelectedNotification(notification)
//     setIsModalOpen(true)
//   }

//   function lookFor(){
//     console.log(search.current.value)
//     setInSearch(search.current.value)
//   }


//   return (
//     <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-3xl mx-auto mt-10">

//         <Pointsmodal
//   isOpen={isModalOpen}
//   onClose={() => setIsModalOpen(false)}
//   notification={selectedNotification}
//   idUser={idUser}
// //   data={selectedUser}
// />
//       <h2 className="text-xl font-bold mb-4">List Notification</h2>

//       <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
//         <div className="flex gap-3 flex-wrap">
//           {tabs.map((tab) => (
//             <button
//               key={tab.name}
//               className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                 selectedTab === tab.name
//                   ? 'bg-red-100 text-red-600'
//                   : 'bg-gray-100 text-gray-500'
//               }`}
//               onClick={() => setSelectedTab(tab.name)}
//             >
//               <span className="font-medium">{tab.count}</span> {tab.name}
//             </button>
//           ))}
//         </div>

//         <div className="relative">
//           <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//           <input
//             ref={search}
//             onChange={lookFor}
//             type="text"
//             placeholder="Search by Name Product"
//             className="pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm w-64"
//           />
//         </div>
//       </div>

//       <div className="space-y-3 max-h-[500px] overflow-y-auto">
//         {loading ? (
//           <p className="text-gray-500 text-sm">Loading notifications...</p>
//         ) : error ? (
//           <p className="text-red-500 text-sm">Failed to load notifications.</p>
//         ) : notifications1.length === 0 ? (
//           <p className="text-gray-500 text-sm">No notifications found.</p>
//         ) : (
//           notifications1.filter((notification) => {
//             const fullName = `${notification.sender_id.firstName} ${notification.sender_id.lastName}`;
//             return inSerch?.toLowerCase() === ''
//               ? notification
//               : notification.sender_id.email.toLowerCase().includes(inSerch) ||
//                   fullName.toLowerCase().includes(inSerch);
//             }).filter((notification) => {
//               if(selectedTab === 'Untreated'){
                
//                 return notification.status === 'not-treated'
//               }else if(selectedTab === 'Treated'){
//                 return notification.status === 'treated'
//               }else{
//                 return true
//               }
//             }).map((notification) => (
//             <div
//               key={notification?._id}
//               onClick={() => notificationToClick(notification)}
//               className={`flex items-start justify-between p-4 rounded-lg border ${
//                 notification?.isRead ? 'bg-white' : 'bg-green-50'
//               }`}
//             >
//               <div className="flex gap-3">
//                 <img
//                   src={
//                     notification?.sender_id?.photo
//                       ? `http://localhost:8000/images/${notification?.sender_id?.photo}`
//                       : '/image.png'
//                   }
//                   className="w-10 h-10 rounded-full object-cover"
//                   alt="User avatar"
//                 />
//                 <div className="flex flex-col">
//                   <span className="font-medium text-sm text-gray-900">
//                     {notification?.sender_id?.firstName}{' '}
//                     {notification?.sender_id?.lastName}
//                   </span>
//                   <span className="text-xs text-gray-500">
//                     {notification?.sender_id?.email}
//                   </span>
//                   <p className="text-sm text-gray-700 mt-1 max-w-md">
//                     {notification?.sender_id?.firstName} {notification?.sender_id?.lastName} {notification?.content}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <button onClick={() => handleDelete(notification._id)}>
//                   {/* <Trash2
//                     className="text-red-500 hover:text-red-700"
//                     size={18}
//                   /> */}
//                   Procceed
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Trash2, Search } from 'lucide-react';
import Pointsmodal from './../pointsModal';

export default function NotificationPanel() {
  const [selectedTab, setSelectedTab] = useState('Untreated');
  const [notifications1, setNotifications1] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idUser, setIdUser] = useState(null);
  const [inSerch, setInSearch] = useState('');
  const [len1, setLen1] = useState(0);
  const [len2, setLen2] = useState(0);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const search = useRef();

  const tabs = [
    { name: 'All', count: notifications1.length },
    { name: 'Treated', count: len2 },
    { name: 'Untreated', count: len1 },
  ];

  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (storedId) setIdUser(storedId);
  }, []);

  useEffect(() => {
    if (idUser) refreshNotifications();
  }, [idUser]);

  async function refreshNotifications() {
    if (!idUser) return;
    try {
      const response = await fetch(`http://localhost:8000/ELACO/notification/getUserNotifications/${idUser}`);
      if (!response.ok) throw Error(`Error fetching notifications: ${response.statusText}`);
      const resData = await response.json();
      setNotifications1(resData.notifications);
      setLen1(resData.notifications.filter((not) => not.status === 'not-treated').length);
      setLen2(resData.notifications.filter((not) => not.status === 'treated').length);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = (id) => {
    setNotifications1((prev) => prev.filter((n) => n._id !== id));
  };

  function notificationToClick(notification) {
    setSelectedNotification(notification);
    setIsModalOpen(true);
  }

  function lookFor() {
    setInSearch(search.current.value);
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-3xl mx-auto mt-10">
      <Pointsmodal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        notification={selectedNotification}
        idUser={idUser}
        onRefresh={refreshNotifications} // ✅ Passed refresh function
      />

      <h2 className="text-xl font-bold mb-4">List Notification</h2>

      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div className="flex gap-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                selectedTab === tab.name ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'
              }`}
              onClick={() => setSelectedTab(tab.name)}
            >
              <span className="font-medium">{tab.count}</span> {tab.name}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            ref={search}
            onChange={lookFor}
            type="text"
            placeholder="Search by Name Product"
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm w-64"
          />
        </div>
      </div>

      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {loading ? (
          <p className="text-gray-500 text-sm">Loading notifications...</p>
        ) : error ? (
          <p className="text-red-500 text-sm">Failed to load notifications.</p>
        ) : notifications1.length === 0 ? (
          <p className="text-gray-500 text-sm">No notifications found.</p>
        ) : (
          notifications1
            .filter((notification) => {
              const fullName = `${notification.sender_id.firstName} ${notification.sender_id.lastName}`;
              return inSerch?.toLowerCase() === ''
                ? notification
                : notification.sender_id.email.toLowerCase().includes(inSerch.toLowerCase()) ||
                    fullName.toLowerCase().includes(inSerch.toLowerCase());
            })
            .filter((notification) => {
              if (selectedTab === 'Untreated') {
                return notification.status === 'not-treated';
              } else if (selectedTab === 'Treated') {
                return notification.status === 'treated';
              } else {
                return true;
              }
            })
            .map((notification) => (
              <div
                key={notification?._id}
                onClick={() => notificationToClick(notification)}
                className={`flex items-start justify-between p-4 rounded-lg border ${
                  notification?.isRead ? 'bg-white' : 'bg-green-50'
                }`}
              >
                <div className="flex gap-3">
                  <img
                    src={
                      notification?.sender_id?.photo
                        ? `http://localhost:8000/images/${notification?.sender_id?.photo}`
                        : '/image.png'
                    }
                    className="w-10 h-10 rounded-full object-cover"
                    alt="User avatar"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm text-gray-900">
                      {notification?.sender_id?.firstName} {notification?.sender_id?.lastName}
                    </span>
                    <span className="text-xs text-gray-500">{notification?.sender_id?.email}</span>
                    <p className="text-sm text-gray-700 mt-1 max-w-md">
                      {notification?.sender_id?.firstName} {notification?.sender_id?.lastName} {notification?.content}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={() => handleDelete(notification._id)}>Procceed</button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}
