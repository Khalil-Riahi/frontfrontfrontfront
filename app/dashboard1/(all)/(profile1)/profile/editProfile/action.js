// export async function updateUser(formData){
//     const obj = {firstName: formData.get('firstName') , lastName: formData.get('lastName') , phone: formData.get('phone')}
//      try {
//       const response = await fetch(http://127.0.0.1:3001/api/v1/users/updateUser/${idUser}, {
//         method: "PATCH",
//         body: JSON.stringify(formData),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(error in updating ${response.statusText});
//       }

//       const data = await response.json();
//       console.log(data.updatedUser);
//       setUser(data.updatedUser);
//     } catch (err) {
//       alert(err);
//     }
// }

export async function updateUser(formData, idUser, setUser) {
    const obj = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone')
    };
  
    try {
      const response = await fetch(`http://localhost:8000/ELACO/updateUser/${idUser}`, {
        method: "PATCH",
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`error in updating ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data.updatedUser);
      setUser(data.updatedUser);
    } catch (err) {
      alert(err);
    }
  }
  