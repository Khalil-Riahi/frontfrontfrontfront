// // 'use client'
// // import ComponentCard from "@/app/common/ComponentCard";
// // import PageBreadcrumb from "@/app/common/PageBreadCrumb";
// // import BasicTableTwo from "@/app/components/tables/BasicTableTwo";
// // import Benifits from "@/app/components/benefits"
// // import { useRouter } from 'next/router';
// // // import { useParams } from 'next/navigation';
// // import { useParams } from "next/navigation";


// // import { useState , useEffect } from "react";

// // export default function BuySub(){
// //   // const router = useRouter();

// //   const [fetchedData, setFetchedData] = useState([]);
// //   const [description , setDescription] = useState([])
// //   const params = useParams();

// //   const { roomType } = params;



// //   // const {roomType} = params?.roomType
// //   console.log(roomType)

 

// //   useEffect(() => {
// //     async function fetchingSubscriptions() {
// //       try {
// //         const response = await fetch(`http://localhost:8000/ELACO/subcription/gg/${roomType}`);
// //         if (!response.ok) {
// //           throw new Error("Error in fetching subscriptions");
// //         }
// //         const data = await response.json();
// //         console.log(data?.subscriptions?.table_id?.description)
// //         if(roomType === "openspace"){
// //           setDescription(
// //             [
// //               "7/7 Access",
// //               "Wi-Fi",
// //               "Kitchen Access",
// //               "Coffee (extra)"
// //             ]
// //           )
// //         }
// //         setFetchedData(data.subscriptions);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     }
// //     fetchingSubscriptions();
// //   }, []);

// //   let tt
// //   if(roomType === 'openspace'){
// //     tt = "Open Space Subscrtions"
// //   }else if(roomType === 'meetingroom'){
// //     tt = "Meeting Room Subscription"
// //   }else if(roomType === 'meetingroom'){
// //     tt = "Office Room Subscription"
// //   }


// //     return (
// //         // <h1>hhhhh</h1>
// //         // <BasicTableTwo />
// //         <div>
// //              <PageBreadcrumb pageTitle={tt} />
// //       <div className="space-y-6">
// //         <ComponentCard title={tt}>
// //           {/* <BasicTableTwo /> */}
// //   <Benifits subs={fetchedData} descriptions={description}/>

// //         </ComponentCard>
// //       </div>
// //     </div>
// //         // </div>
// //     )
// // }

// 'use client'
// import ComponentCard from "@/app/common/ComponentCard";
// import PageBreadcrumb from "@/app/common/PageBreadCrumb";
// // import BasicTableTwo from "@/app/components/tables/BasicTableTwo";
// import Benifits from "@/app/components/benefits"
// // import { useRouter } from 'next/router';
// // import { useParams } from 'next/navigation';
// import { useParams } from "next/navigation";


// import { useState , useEffect } from "react";

// export default function BuySub(){
//   // const router = useRouter();

//   const [fetchedData, setFetchedData] = useState([]);
//   const [description , setDescription] = useState([
//     "7/7 Access",
//     "Wi-Fi",
//     "Kitchen Access",
//     "Coffee (extra)"
//   ])
//   const params = useParams();

//   const { roomType } = params;
//   let type;

//   if(roomType === "meetingroom"){
//     type = "meeting room"
//   }else if(roomType === 'officeroom'){
//     type = "office"
//   }

//   console.log(type)



//   // const {roomType} = params?.roomType
//   console.log(roomType)

 

//   useEffect(() => {
//     async function fetchingSubscriptions() {
//       try {
//         const response = await fetch(`http://localhost:8000/ELACO/subcription/gg/${type}`);
//         if (!response.ok) {
//           throw new Error("Error in fetching subscriptions");
//         }
//         const data = await response.json();
//         console.log(data?.subscriptions?.table_id?.descriptpion)
//         if(roomType === "openspace"){
//           setDescription(
//             [
//               "7/7 Access",
//               "Wi-Fi",
//               "Kitchen Access",
//               "Coffee (extra)"
//             ]
//           )
//         }
//         console.log(description)
//         setFetchedData(data.subscriptions);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchingSubscriptions();
//   }, []);

//   let tt
//   if(roomType === 'openspace'){
//     tt = "Open Space Subscrtions"
//   }else if(roomType === 'meetingroom'){
//     tt = "Meeting Room Subscription"
//   }else if(roomType === 'meetingroom'){
//     tt = "Office Room Subscription"
//   }


//     return (
//         // <h1>hhhhh</h1>
//         // <BasicTableTwo />
//         <div>
//              <PageBreadcrumb pageTitle={tt} />
//       <div className="space-y-6">
//         <ComponentCard title={tt}>
//           {/* <BasicTableTwo /> */}
//   <Benifits subs={fetchedData} descriptions={description}/>

//         </ComponentCard>
//       </div>
//     </div>
//         // </div>
//     )
// }

'use client'
import ComponentCard from "@/app/common/ComponentCard";
import PageBreadcrumb from "@/app/common/PageBreadCrumb";
import BasicTableTwo from "@/app/components/tables/BasicTableTwo";
import Benifits from "@/app/components/benefits"
import { useRouter } from 'next/router';
// import { useParams } from 'next/navigation';
import { useParams } from "next/navigation";


import { useState , useEffect } from "react";

export default function BuySub(){
  // const router = useRouter();

  const [fetchedData, setFetchedData] = useState([]);
  const [description , setDescription] = useState([])
  const params = useParams();

  const { roomType } = params;

  let type

  if(roomType === 'meetingroom'){
    type = 'meeting room'
  }else if(roomType === 'officeroom'){
    type = 'office'
  }else if(roomType === 'openspace'){
    type = 'openspace'
  }



  // const {roomType} = params?.roomType
  console.log(roomType)

 

  useEffect(() => {
    async function fetchingSubscriptions() {
      try {
        const response = await fetch(`http://localhost:8000/ELACO/subcription/gg/${type}`);
        if (!response.ok) {
          throw new Error("Error in fetching subscriptions");
        }
        const data = await response.json();
        console.log(data?.subscriptions?.table_id?.descriptpion)
        if(roomType === "openspace"){
          setDescription(
            [
              "7/7 Access",
              "Wi-Fi",
              "Kitchen Access",
              "Coffee (extra)"
            ]
          )
        }
        setFetchedData(data.subscriptions);
      } catch (err) {
        console.error(err);
      }
    }
    fetchingSubscriptions();
  }, []);

  let tt
  if(roomType === 'openspace'){
    tt = "Open Space Subscrtions"
  }else if(roomType === 'meetingroom'){
    tt = "Meeting Room Subscription"
  }else if(roomType === 'meetingroom'){
    tt = "Office Room Subscription"
  }


    return (
        // <h1>hhhhh</h1>
        // <BasicTableTwo />
        <div>
             <PageBreadcrumb pageTitle={tt} />
      <div className="space-y-6">
        <ComponentCard title={tt}>
          {/* <BasicTableTwo /> */}
  <Benifits subs={fetchedData} descriptions={description}/>

        </ComponentCard>
      </div>
    </div>
        // </div>
    )
}