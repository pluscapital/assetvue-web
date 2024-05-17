import {
  EmailAuthProvider,
  GoogleAuthProvider,
  RecaptchaVerifier,
  User,
  connectAuthEmulator,
  getAuth,
  isSignInWithEmailLink,
  linkWithCredential,
  sendEmailVerification,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { getAnalytics, setUserId } from "firebase/analytics";
import { useEffect, useState } from "react";

import { createFirebaseApp } from "./client-app";

const app = createFirebaseApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const signupRedirectUrl = process.env.NEXT_PUBLIC_SIGNUP_REDIRECT;
const origin =
  process.env.NODE_ENV === "production"
    ? signupRedirectUrl
    : "http://localhost:3000";
if (process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST) {
  connectAuthEmulator(
    auth,
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST
  );
}

export function googleLogin() {
  return signInWithPopup(auth, googleProvider);
}

export function signInWithPhone(phoneNumber: string) {
  console.log(auth);
  // @ts-ignore
  return signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
}

/**
 * Phone Auth recaptha verification object
 * @param callback function to call when user is signed in
 * @returns RecaptchaVerifier
 */
export function recaptcha(callback: any) {
  console.log({ auth, btn: document.getElementById("sign-in-button") });
  const captchaObject = new RecaptchaVerifier(auth, "sign-in-button", {
    size: "invisible",
    callback: (response: any) => {
      callback(response);
    },
  });
  return captchaObject;
}

function logout() {
  return auth.signOut();
}

const redirectUrl = `${origin}/link-account`;
export const actionCodeSettings = {
  url: redirectUrl,
  handleCodeInApp: true,
  // iOS: {
  //   bundleId: "https://apps.apple.com/us/app/gmail-email-by-google/id422689480",
  // },
  // android: {
  //   packageName:
  //     "https://play.google.com/store/apps/details?id=com.google.android.gm&hl=en_IN&gl=US&pli=1",
  //   installApp: true,
  //   minimumVersion: "10",
  // },
  // dynamicLinkDomain: redirectUrl,
};

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((usr) => {
      if (usr) {
        setAuthUser(usr);
        const analytics = getAnalytics();
        setUserId(analytics, usr.uid);
      } else {
        setAuthUser(undefined);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return {
    auth,
    authUser,
    googleLogin,
    isLoading,
    logout,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
    linkWithCredential,
    EmailAuthProvider,
    sendEmailVerification,
  };
}
