import React, { useState } from "react";
import { useStorageState } from "@/hooks/useStorageState";
import { UserData, login } from "@/api/student";
import { AxiosResponse } from "axios";

const AuthContext = React.createContext<{
  signIn: (username: string, password: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  signIn: async () => null,
  signOut: async () => null,
  session: null,
  isLoading: false,
  setIsLoading: () => null,
});

export function useSession() {
  const value = React.useContext(AuthContext);
  //abundance
  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[loading, session], setSession] = useStorageState("session");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        signIn: (username: string, password: string) => {
          setIsLoading(true);
          login(username, password).then(
            (resp: AxiosResponse<UserData, any>) => {
              setSession(resp.data.data.jwtToken.token);
              setIsLoading(false);
            }
          );
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
