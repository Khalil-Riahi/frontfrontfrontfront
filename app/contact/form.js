// // // // components/ContactForm.tsx
// // // import React from 'react';






// // // export default function ContactForm() {
// // //   return (
// // //     <div className="flex flex-col lg:flex-row gap-10 p-10">
// // //       <div className="flex-[2] gap-2">
// // //         <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
// // //         <form className="flex flex-col gap-4 ">
// // //           <div className="flex flex-col lg:flex-row gap-4 text-gray-900">
// // //             <input type="text" placeholder="Nom & Prénom" className="border p-3 w-full" />
// // //             <input type="email" placeholder="E-mail" className="border p-3 w-full" />
// // //           </div>
// // //           <input type="text" placeholder="Sujet" className="border p-3 w-full text-gray-900" />
// // //           <textarea placeholder="Message" rows={6} className="border p-3 w-full text-gray-900"></textarea>
// // //           <button type="submit" className="mt-4 w-40 border-2 border-blue-500 text-blue-500 hover:bg-blue-100 transition px-6 py-3 uppercase tracking-widest">
// // //           Send
// // //           </button>
// // //         </form>
// // //       </div>

// // //       </div>
// // //   );
// // // }

// // 'use client';

// // import React, { useState } from 'react';
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // export default function ContactForm() {
// //   const [loading, setLoading] = useState(false);

// //   const sendContactForm = async (formData) => {
// //     const data = {
// //       name: formData.get('name'),
// //       email: formData.get('email'),
// //       Sujet: formData.get('subject'),
// //       Message: formData.get('message'),
// //     };

// //     try {
// //       const response = await fetch('http://localhost:8000/ELACO/contact', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(data),
// //       });

// //       const result = await response.json();

// //       if (!response.ok) throw new Error(result.message || 'Submission failed');
// //       return result;
// //     } catch (err) {
// //       console.error(err);
// //       throw err;
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     const formData = new FormData(e.target);

// //     try {
// //       const res = await sendContactForm(formData);
// //       toast.success('Message sent successfully!');
// //       e.target.reset(); // Clear the form
// //     } catch (err) {
// //       toast.error(err.message || 'Error sending message');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col lg:flex-row gap-10 p-10 ">
// //       <div className="flex-[2] gap-2 w-full text-gray-900 bg-yellow-300">
// //         <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

// //         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
// //           <div className="flex flex-col lg:flex-row gap-4">
// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Nom & Prénom"
// //               className="border p-3 w-full placeholder-gray-500"
// //               required
// //             />
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="E-mail"
// //               className="border p-3 w-full placeholder-gray-500"
// //               required
// //             />
// //           </div>

// //           <input
// //             type="text"
// //             name="subject"
// //             placeholder="Sujet"
// //             className="border p-3 w-full placeholder-gray-500"
// //             required
// //           />

// //           <textarea
// //             name="message"
// //             placeholder="Message"
// //             rows={6}
// //             className="border p-3 w-full placeholder-gray-500"
// //             required
// //           ></textarea>

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="mt-4 w-40 border-2 border-blue-500 text-blue-500 hover:bg-blue-100 transition px-6 py-3 uppercase tracking-widest"
// //           >
// //             {loading ? 'Sending...' : 'Send'}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';

// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function ContactForm() {
//   const [loading, setLoading] = useState(false);

//   const sendContactForm = async (formData) => {
//     const data = {
//       email: formData.get('email'),
//       Sujet: formData.get('subject'),
//       Message: formData.get('message'),
//       name:formData.get('name'),
//       phoneNumber:formData.get('phoneNumber')

//     };

//     try {
//       const response = await fetch('http://localhost:8000/ELACO/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       if (!response.ok) throw new Error(result.message || 'Submission failed');
//       return result;
//     } catch (err) {
//       console.error(err);
//       throw err;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const formData = new FormData(e.target);

//     try {
//       await sendContactForm(formData);
//       toast.success('Message sent successfully!',{ autoClose: 60000 });
//       e.target.reset();
//     } catch (err) {
//       toast.error(err.message || 'Error sending message',{ autoClose: 60000 });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-gray-900">
//       <label className="block font-semibold mb-1 text-blue-900">Name</label>
//         <input
//           type="text"
//           name="name"
//           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
//           required
//         />
//       <div>
//         <label className="block font-semibold mb-1 text-blue-900">Your Email Address</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="you@example.com"
//           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
//           required
//         />
//       </div>
//       <div>
//         <label className="block font-semibold mb-1 text-blue-900">Phone Number</label>
//         <input
//           type="tel"
//           name="phoneNumber"
//           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
//           required
//         />
//       </div>


//       <div>
//         <label className="block font-semibold mb-1 text-blue-900">Subject</label>
//         <input
//           type="text"
//           name="subject"
//           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
//           required
//         />
//       </div>
     

//       <div>
//         <label className="block font-semibold mb-1 text-blue-900">How can we help?</label>
//         <textarea
//           name="message"
//           rows={5}
//           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
//           required
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-blue-950 text-white py-3 px-6 rounded-md font-semibold hover:bg-yellow-400 transition w-full"
//       >
//         {loading ? 'Sending...' : 'SEND'}
//       </button>
//     </form>
//   );
// }
'use client';

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const sendContactForm = async (formData) => {
    const data = {
      email: formData.get('email'),
      Sujet: formData.get('subject'),
      Message: formData.get('message'),
      name: formData.get('name'),
      phoneNumber: formData.get('phoneNumber'),
    };

    try {
      const response = await fetch('http://localhost:8000/ELACO/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Submission failed');
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      await sendContactForm(formData);
      toast.success('Message sent successfully!', { autoClose: 2000 });
      e.target.reset();
    } catch (err) {
      toast.error(err.message || 'Error sending message', { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-gray-900">
        <label className="block font-semibold mb-1 text-blue-900">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          required
        />

        <div>
          <label className="block font-semibold mb-1 text-blue-900">Your Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-blue-900">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-blue-900">Subject</label>
          <input
            type="text"
            name="subject"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-blue-900">How can we help?</label>
          <textarea
            name="message"
            rows={5}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-950 text-white py-3 px-6 rounded-md font-semibold hover:bg-yellow-400 transition w-full"
        >
          {loading ? 'Sending...' : 'SEND'}
        </button>
      </form>

      {/* Toast container to display notifications */}
      <ToastContainer position="top-right" />
    </>
  );
}
