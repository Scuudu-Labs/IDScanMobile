import React from "react";
import { useStorageState } from "@/hooks/useStorageState";
import { UserData, login } from "@/api/student";
import { AxiosResponse } from "axios";

const AuthContext = React.createContext<{
  signIn: (username: string, password: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: async () => null,
  signOut: async () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = React.useContext(AuthContext);
  //abundance
  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  return (
    <AuthContext.Provider
      value={{
        signIn: (username: string, password: string) => {
          login(username, password).then(
            (resp: AxiosResponse<UserData, any>) => {
              setSession(resp.data.data.jwtToken.token);
            }
          );
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
