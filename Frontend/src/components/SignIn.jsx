import React, {useEffect} from "react";
import {getAuth} from "firebase/auth";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import Header from "./Header";
import Footer from "./Footer";
import { app } from "../firebase";
export default function SignIn() {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || 
        new firebaseui.auth.AuthUI(getAuth(app));


        ui.start("#firebaseui-auth-container", {
            signInSuccessUrl: "/main",
            signInOptions: [
                {
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                },
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                }
            ],
            // credentialHelper : firebaseui.auth.credentialHelper.GOOGLE_YOLO,
        })
    }, [])

    return <div>
         <Header />
           <div id="firebaseui-auth-container"></div>
        <Footer />
    </div>
 
}

 
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { auth } from '../firebase'; // Import your initialized Firebase instance

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); 

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       navigate('/main'); // Redirect to dashboard after successful sign-in
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignIn}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p>{error}</p>}
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// }

// export default SignIn;
