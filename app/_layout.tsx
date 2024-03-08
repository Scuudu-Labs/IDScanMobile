import { SessionProvider } from "@/ctx/ctx";
import { Slot } from "expo-router";

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
