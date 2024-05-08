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

