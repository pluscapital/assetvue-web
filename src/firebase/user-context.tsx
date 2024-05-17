import axios from "axios";
import nookies from "nookies";
import useFirebaseAuth from "@/src/firebase/firebase-auth";
import { IUserContext } from "@/src/types/app-types";
import { createContext, useContext, useEffect, useState } from "react";

const defaultAuthUser: IUserContext = {
  authUser: null,
  loading: true,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  dbUser: null,
};

const authUserContext = createContext(defaultAuthUser);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const firebaseAuth = useFirebaseAuth();
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.auth.onIdTokenChanged(
      async (user: any) => {
        if (!user) {
          nookies.set(undefined, "token", "", { path: "/" });
        } else {
          try {
            const token = await user.getIdToken();
            nookies.set(undefined, "token", token, { path: "/" });
            const res = await axios.get("/api/users/me");
            setDbUser(res?.data?.user);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    // @ts-ignore
    <authUserContext.Provider value={{ ...firebaseAuth, dbUser }}>
      {children}
    </authUserContext.Provider>
  );
}

export const useUser = () => useContext(authUserContext);
