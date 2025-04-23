// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';

// // // export default function PointsModal({ isOpen, onClose , notification , idUser}){
// // //     if (!isOpen || !notification || !idUser) return null;

// // //     console.log(notification)

// // //     async function addPoints(points){
// // //         // console.log(check.current.value)
// // //         // if(event.target.value)
     
// // //         if (isNaN(points)) {
    
// // //           return;
// // //         }
    
// // //           // console.log(points.current.value)
    
// // //           console.log('mmmmm')
    
// // //           // if(isNaN(pointsToAdd) || !pointsToAdd){
// // //           try{
// // //             console.log(notification?.sender_id)
// // //             const response = await fetch(`http://localhost:8000/ELACO/${notification?.sender_id?._id}/${idUser}` , {
// // //               method: 'PATCH',
// // //               body: JSON.stringify({points: points}),
// // //               headers: {
// // //                   'Content-Type': 'application/json'
// // //               }
// // //           })
          
// // //           if(!response.ok){
// // //               throw new Error(`Error in Putting ${response.statusText}`)
// // //           }
          
// // //           const data = await response.json()
// // //           console.log(data.userPoints)
// // //           toast.success(`points are added succefully to ${notification?.sender_id?.firstName} ${notification?.sender_id?.lastName}`)


// // //         //   setActivateId(prevId => (prevId === selectedId ? null : selectedId));
// // //           }catch(err){
// // //             setErrorAddingPoints(err)
// // //             toast.error(err)

// // //           }
// // //     }

    

// // //   return (
// // //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
// // //       <div className="bg-white w-[350px] rounded-xl shadow-xl p-6 relative">
// // //         {/* Close button */}
// // //         <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 text-xl">&times;</button>

// // //         <div className="flex flex-col items-center text-center">
// // //           <img
// // //             src={notification.sender_id.photo ? `http://localhost:8000/images/${notification?.sender_id?.photo}`:'/image.png'}
// // //             alt="Avatar"
// // //             className="w-20 h-20 rounded-full object-cover mb-4"
// // //           />
// // //           <h3 className="text-lg font-semibold">{notification?.sender_id?.firstName} {notification?.sender_id?.lastName}</h3>
// // //           <p className="text-sm text-gray-500 mb-4">{notification?.content}</p>

// // //           {/* Action Buttons */}
// // //           <div className="flex justify-center gap-4 mb-4">
// // //             <button className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
// // //             onClick={() =>addPoints(notification?.points)}>
// // //               {/* <span>📴</span> Reject */}
// // //               Accept

// // //             </button>
// // //             <button className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
// // //             Reject
// // //             </button>
// // //           </div>

// // //           {/* Info rows */}
// // //           <div className="text-left w-full text-sm text-gray-700">
// // //             <div className="flex justify-between mb-1">
// // //               <span className="font-medium">Full Name:</span>
// // //               <span>{notification?.sender_id?.firstName} {notification?.sender_id?.lastName}</span>
// // //             </div>
// // //             <div className="flex justify-between mb-1">
// // //               <span className="font-medium">Email:</span>
// // //               <span>{notification?.sender_id?.email}</span>
// // //             </div>
// // //             <div className="flex justify-between mb-1">
// // //               <span className="font-medium">Phone:</span>
// // //               <span>{notification?.sender_id?.phone}</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span className="font-medium">Points to Buy:</span>
// // //               <span>{notification?.points}</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span className="font-medium">price:</span>
// // //               <span>{notification?.points * 1.500} TND</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <ToastContainer position="bottom-right" autoClose={5000} />

// // //     </div>
// // //   );
// // // }


// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // export default function PointsModal({ isOpen, onClose , notification , idUser}){
// //     if (!isOpen || !notification || !idUser) return null;

// //     console.log(notification)

// //     async function addPoints(points){
// //         // console.log(check.current.value)
// //         // if(event.target.value)
     
// //         if (isNaN(points)) {
    
// //           return;
// //         }
    
// //           // console.log(points.current.value)
    
// //           console.log('mmmmm')
    
// //           // if(isNaN(pointsToAdd) || !pointsToAdd){
// //           try{
// //             console.log(notification?.sender_id)
// //             const response = await fetch(`http://localhost:8000/ELACO/${notification?.sender_id?._id}/${idUser}` , {
// //               method: 'PATCH',
// //               body: JSON.stringify({points: points}),
// //               headers: {
// //                   'Content-Type': 'application/json'
// //               }
// //           })
          
// //           if(!response.ok){
// //               throw new Error(`Error in Putting ${response.statusText}`)
// //           }
          
// //           const data = await response.json()
// //           console.log(data.userPoints)
// //           toast.success(`points are added succefully to ${notification?.sender_id?.firstName} ${notification?.sender_id?.lastName}`)


// //         //   setActivateId(prevId => (prevId === selectedId ? null : selectedId));
// //           }catch(err){
// //             // setErrorAddingPoints(err)
// //             toast.error(err)

// //           }
// //     }

    

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
// //       <div className="bg-white w-[350px] rounded-xl shadow-xl p-6 relative">
// //         {/* Close button */}
// //         <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 text-xl">&times;</button>

// //         <div className="flex flex-col items-center text-center">
// //           <img
// //             src={notification.sender_id.photo ? `http://localhost:8000/images/${notification?.sender_id?.photo}`:'/image.png'}
// //             alt="Avatar"
// //             className="w-20 h-20 rounded-full object-cover mb-4"
// //           />
// //           <h3 className="text-lg font-semibold">{notification?.sender_id?.firstName} {notification?.sender_id?.lastName}</h3>
// //           <p className="text-sm text-gray-500 mb-4">{notification?.content}</p>

// //           {/* Action Buttons */}
// //           <div className="flex justify-center gap-4 mb-4">
// //             <button className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
// //             onClick={() =>addPoints(notification?.points)}>
// //               {/* <span>📴</span> Reject */}
// //               Accept

// //             </button>
// //             <button className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
// //             Reject
// //             </button>
// //           </div>

// //           {/* Info rows */}
// //           <div className="text-left w-full text-sm text-gray-700">
// //             <div className="flex justify-between mb-1">
// //               <span className="font-medium">Full Name:</span>
// //               <span>{notification?.sender_id?.firstName} {notification?.sender_id?.lastName}</span>
// //             </div>
// //             <div className="flex justify-between mb-1">
// //               <span className="font-medium">Email:</span>
// //               <span>{notification?.sender_id?.email}</span>
// //             </div>
// //             <div className="flex justify-between mb-1">
// //               <span className="font-medium">Phone:</span>
// //               <span>{notification?.sender_id?.phone}</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span className="font-medium">Points to Buy:</span>
// //               <span>{notification?.points}</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span className="font-medium">price:</span>
// //               <span>{notification?.points * 1.500} TND</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <ToastContainer position="bottom-right" autoClose={5000} />

// //     </div>
// //   );
// // }


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function PointsModal({ isOpen, onClose , notification , idUser}){
//     if (!isOpen || !notification || !idUser) return null;

//     console.log(notification)

//     async function addPoints(points){
//         // console.log(check.current.value)
//         // if(event.target.value)
     
//         if (isNaN(points)) {
    
//           return;
//         }
    
//           // console.log(points.current.value)
    
//           console.log('mmmmm')
    
//           // if(isNaN(pointsToAdd) || !pointsToAdd){
//           try{
//             console.log(notification?.sender_id)
//             const response = await fetch(`http://localhost:8000/ELACO/${notification?.sender_id?._id}/${idUser}` , {
//               method: 'PATCH',
//               body: JSON.stringify({points: points}),
//               headers: {
//                   'Content-Type': 'application/json'
//               }
//           })
          
//           if(!response.ok){
//               throw new Error(`Error in Putting ${response.statusText}`)
//           }
          
//           const data = await response.json()
//           console.log(data.userPoints)
//           toast.success(`points are added succefully to ${notification?.sender_id?.firstName} ${notification?.sender_id?.lastName}`)


//         //   setActivateId(prevId => (prevId === selectedId ? null : selectedId));
//           }catch(err){
//             setErrorAddingPoints(err)
//             toast.error(err)

//           }
//     }

    

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
//       <div className="bg-white w-[350px] rounded-xl shadow-xl p-6 relative">
//         {/* Close button */}
//         <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 text-xl">&times;</button>

//         <div className="flex flex-col items-center text-center">
//           <img
//             src={notification.sender_id.photo ? `http://localhost:8000/images/${notification?.sender_id?.photo}`:'/image.png'}
//             alt="Avatar"
//             className="w-20 h-20 rounded-full object-cover mb-4"
//           />
//           <h3 className="text-lg font-semibold">{notification?.sender_id?.firstName} {notification?.sender_id?.lastName}</h3>
//           <p className="text-sm text-gray-500 mb-4">{notification?.content}</p>

//           {/* Action Buttons */}
//           <div className="flex justify-center gap-4 mb-4">
//             <button className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
//             onClick={() =>addPoints(notification?.points)}>
//               {/* <span>📴</span> Reject */}
//               Accept

//             </button>
//             <button className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
//             Reject
//             </button>
//           </div>

//           {/* Info rows */}
//           <div className="text-left w-full text-sm text-gray-700">
//             <div className="flex justify-between mb-1">
//               <span className="font-medium">Full Name:</span>
//               <span>{notification?.sender_id?.firstName} {notification?.sender_id?.lastName}</span>
//             </div>
//             <div className="flex justify-between mb-1">
//               <span className="font-medium">Email:</span>
//               <span>{notification?.sender_id?.email}</span>
//             </div>
//             <div className="flex justify-between mb-1">
//               <span className="font-medium">Phone:</span>
//               <span>{notification?.sender_id?.phone}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="font-medium">Points to Buy:</span>
//               <span>{notification?.points}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="font-medium">price:</span>
//               <span>{notification?.points * 1.500} TND</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer position="bottom-right" autoClose={5000} />

//     </div>
//   );
// }


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PointsModal({ isOpen, onClose , notification , idUser}){
    if (!isOpen || !notification || !idUser) return null;

    console.log(notification)

    async function addPoints(points){
        // console.log(check.current.value)
        // if(event.target.value)
     
        if (isNaN(points)) {
    
          return;
        }
    
          // console.log(points.current.value)
    
          console.log('mmmmm')
    
          // if(isNaN(pointsToAdd) || !pointsToAdd){
          try{
            console.log(notification?.sender_id)
            const response = await fetch(`http://localhost:8000/ELACO/${notification?.sender_id?._id}/${idUser}/${notification?._id}` , {
              method: 'PATCH',
              body: JSON.stringify({points: points}),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          
          if(!response.ok){
              throw new Error(`Error in Putting ${response.statusText}`)
          }
          
          const data = await response.json()
          console.log(data.userPoints)          // onClose()

          
          toast.success(`Points added successfully to ${notification?.sender_id?.firstName}`);
setTimeout(() => {
  onClose();
}, 1000);
          

          


        //   setActivateId(prevId => (prevId === selectedId ? null : selectedId));
          }catch(err){
            // setErrorAddingPoints(err)
            toast.error(err)

          }
    }

    

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white w-[350px] rounded-xl shadow-xl p-6 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 text-xl">&times;</button>

        <div className="flex flex-col items-center text-center">
          <img
            src={notification.sender_id.photo ? `http://localhost:8000/images/${notification?.sender_id?.photo}`:'/image.png'}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">{notification?.sender_id?.firstName} {notification?.sender_id?.lastName}</h3>
          <p className="text-sm text-gray-500 mb-4">{notification?.content}</p>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-4">
            <button className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            onClick={() =>addPoints(notification?.points)}>
              {/* <span>📴</span> Reject */}
              Accept

            </button>
            <button className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
            Reject
            </button>
          </div>

          {/* Info rows */}
          <div className="text-left w-full text-sm text-gray-700">
            <div className="flex justify-between mb-1">
              <span className="font-medium">Full Name:</span>
              <span>{notification?.sender_id?.firstName} {notification?.sender_id?.lastName}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="font-medium">Email:</span>
              <span>{notification?.sender_id?.email}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="font-medium">Phone:</span>
              <span>{notification?.sender_id?.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Points to Buy:</span>
              <span>{notification?.points}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">price:</span>
              <span>{notification?.points * 1.500} TND</span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} />

    </div>
  );
}