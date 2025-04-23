
// "use server";

// export async function addBooking(formData) {

//     const obj = { date: formData.get("date"), start_time: formData.get("start_time"), end_time: formData.get("end_time") }; 
//     try {
//         const response = await fetch('http://127.0.0.1:8000/ELACO/booking/', {
//             method: "POST",
//             body: JSON.stringify(obj),
//             headers: { "Content-Type": "application/json" },
//         });

//         const contentType = response.headers.get("content-type");
//         if (contentType && contentType.includes("application/json")) {
//             const data = await response.json();
//             const token = data.token;
//             return { status: response.status, data, token }; 
//         } else {
//             const text = await response.text();
//             throw new Error(`Server returned an error: ${text}`);
//         }
//     } catch (error) {
//         console.error(error);
//         throw new Error("Login failed. Please try again.");
//     }
// }
// export async function Subscriber(id) {
    
//     const obj = { date: formData.get("date"), start_time: formData.get("start_time"), end_time: formData.get("end_time") }; 
//     try {
//         const response = await fetch('http://127.0.0.1:8000/ELACO/booking/', {
//             method: "POST",
//             body: JSON.stringify(obj),
//             headers: { "Content-Type": "application/json" },
//         });

//         const contentType = response.headers.get("content-type");
//         if (contentType && contentType.includes("application/json")) {
//             const data = await response.json();
//             const token = data.token;
//             return { status: response.status, data, token }; 
//         } else {
//             const text = await response.text();
//             throw new Error(`Server returned an error: ${text}`);
//         }
//     } catch (error) {
//         console.error(error);
//         throw new Error("Login failed. Please try again.");
//     }
// }