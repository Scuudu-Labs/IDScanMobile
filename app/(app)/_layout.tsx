import LoadingBanner from "@/components/Loading";
import SchoolBanner from "@/components/SchoolBanner";
import { useSession } from "@/ctx/ctx";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <SafeAreaView className="w-screen h-screen flex items-center justify-center">
        <LoadingBanner />
      </SafeAreaView>
    );
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
