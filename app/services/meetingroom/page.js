// 'use client'
// import Hero from './../../components/hero2'
// import NavBar from './../../components/navbar'
// import ImagesComponent from "../../components/imagesComponent";
// import Benifits from "../../components/benefits";
// import Services from "../../components/services";
// import Footer from '@/app/components/footer';
// import heroImg2 from "./../../../public/openspace.jpg";
// import RoomsType from './../../components/roomsType'



// import { useState , useEffect} from "react";
// import { features, title } from 'process';

// const images = [
//     "/meetingRoom1.jpg",
//     "/meetingRoom2.jpg",
//     "/meetingRoom3.jpg",
//     // "/openspace.jpg"
//   ];

// const Rooms = [
//     {
//         title: "Meeting Room 1",
//         // features: [
//         //     "Capacity: 6 persons",
//         //     "Wi-Fi"
//         // ]
//         description: "A cozy and professional meeting space ideal for small team discussions, client meetings, and brainstorming sessions. Perfect for groups of 4 to 6 people looking for a quiet and well-equipped environment.",
//         image: '/meetingRoom1.jpg'
//     },
//     {
//         title: "Meeting Room 2",
//         description: "A spacious training room designed for workshops, seminars, and group learning sessions. It’s the ideal setting for hosting formations, with enough room to accommodate up to 16 participants comfortably.",
//         image: '/meetingRoom2.jpg'

//     }
// ]
  
// export default function MeetingRoom(){

//     const [fetchedData, setFetchedData] = useState([]);


//     useEffect(() => {
//         async function fetchingSubscriptions() {
//           try {
//             const response = await fetch("http://localhost:8000/ELACO/subcription/get/meetingroom");
//             if (!response.ok) {
//               throw new Error("Error in fetching subscriptions");
//             }
//             const data = await response.json();
//             setFetchedData(data.subscriptions);
//           } catch (err) {
//             console.error(err);
//           }
//         }
//         fetchingSubscriptions();
//       }, []);



//     return(
//         <>
//             <NavBar />
//             <Hero image={heroImg2}/>
//             <ImagesComponent images={images}/>
//             <RoomsType rooms={Rooms}/>

//             <Benifits subs={fetchedData}/>
//             <Services />
//             <Footer />
//         </>
//     )
// }

'use client'
import Hero from './../../components/hero2'
import NavBar from './../../components/navbar'
import ImagesComponent from "../../components/imagesComponent";
import Benifits from "../../components/benefits";
import Services from "../../components/services";
import Footer from '@/app/components/footer';
import heroImg2 from "./../../../public/openspace.jpg";
import RoomsType from './../../components/roomsType'



import { useState , useEffect} from "react";
import { features, title } from 'process';

const images = [
    "/meetingRoom1.jpg",
    "/meetingRoom2.jpg",
    "/meetingRoom3.jpg",
    // "/openspace.jpg"
  ];

const Rooms = [
    {
        title: "Meeting Room 1",
        // features: [
        //     "Capacity: 6 persons",
        //     "Wi-Fi"
        // ]
        description: "A cozy and professional meeting space ideal for small team discussions, client meetings, and brainstorming sessions. Perfect for groups of 4 to 6 people looking for a quiet and well-equipped environment.",
        image: '/meetingRoom1.jpg'
    },
    {
        title: "Meeting Room 2",
        description: "A spacious training room designed for workshops, seminars, and group learning sessions. It’s the ideal setting for hosting formations, with enough room to accommodate up to 16 participants comfortably.",
        image: '/meetingRoom2.jpg'

    }
]
  
export default function MeetingRoom(){

    const [fetchedData, setFetchedData] = useState([]);


    // useEffect(() => {
    //     async function fetchingSubscriptions() {
    //       try {
    //         const response = await fetch("http://localhost:8000/ELACO/subcription/get/meetingroom");
    //         if (!response.ok) {
    //           throw new Error("Error in fetching subscriptions");
    //         }
    //         const data = await response.json();
    //         setFetchedData(data.subscriptions);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //     fetchingSubscriptions();
    //   }, []);


    useEffect(() => {
      async function fetchingSubscriptions() {
        try {
          const response = await fetch(`http://localhost:8000/ELACO/subcription/gg/meeting room`);
          if (!response.ok) {
            throw new Error("Error in fetching subscriptions");
          }
          const data = await response.json();
          console.log(data?.subscriptions?.table_id?.descriptpion)
          
          setFetchedData(data.subscriptions);
        } catch (err) {
          console.error(err);
        }
      }
      fetchingSubscriptions();
    }, []);


    return(
        <>
            <NavBar />
            <Hero image={heroImg2}/>
            <ImagesComponent images={images}/>
            <RoomsType rooms={Rooms}/>

            <Benifits subs={fetchedData}/>
            <Services />
            <Footer />
        </>
    )
}