// import Cookies from 'js-cookie';
// import jwt from 'jsonwebtoken';

// export const getUserId = () => {
//     // Get the token from cookies
//     const token = Cookies.get('jwt');

//     if (!token) return null; // No token found

//     try {
//         // Decode the token to extract the user ID
//         const decoded = jwt.decode(token);
//         return decoded?.id || null;
//     } catch (error) {
//         console.error('Error decoding token:', error);
//         return null;
//     }
// };
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const getUserId = () => {
    // Get the token from cookies
    const token = Cookies.get('jwt');

    if (!token) return null; // No token found

    try {
        // Decode the token to extract the user ID
        const decoded = jwtDecode(token);
        return decoded?.id || null;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};
