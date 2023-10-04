// import React, { createContext, useState, useEffect } from "react";
// import PropTypes from "prop-types"; // Importe PropTypes

// import { api } from "../services/api";

// export const AuthContext = createContext({});

// export function AuthProvider({ children }) {
//     const [data, setData] = useState({ token: localStorage.getItem("token") });

//     async function signIn({ email, password }) {
//         try {
//             const response = await api.post("/login", { email, password });
//             const { token } = response.data;
//             localStorage.setItem("token", token);
//             setData({ token });
//         } catch (error) {
//             if (error.response) {
//                 alert(error.response.data.message);
//             } else {
//                 alert("Not was possible to sign in");
//             }
//         }
//     }

//     function signOut() {
//         localStorage.removeItem("token");
//         setData({});
//     }

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{
//             signIn,
//             signOut,
//             token: data.token,
//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired, // Defina PropTypes para children
// }
