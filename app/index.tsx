import SchoolBanner from "@/components/SchoolBanner";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { Button, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
export default function Landing() {
  return (
    <SafeAreaView className="flex items-center justify-center ">
      <StatusBar style="dark" />
      <View className="flex flex-col items-center justify-between h-[80vh] pt-10 px-10 w-full">
        <SchoolBanner />
        <View className="flex items-center justify-center space-y-5">
          <Text className="text-idgray text-xl">STUDENT E-ID Card</Text>
          <Text className="text-center text-idgray px-10 font-extralight">
            No more forgetting your physical card or worrying about damage
          </Text>
        </View>
        <View className="flex w-full space-y-5">
          {/* <Pressable className="bg-idgreen py-3 rounded-full">
            <Text className="text-xl text-white rounded-[30px] text-center">
              Get Started
            </Text>
          </Pressable> */}
          <Link href={"/login"} asChild>
            <Pressable className="border-2 border-idgreen py-3 rounded-full">
              <Text className="text-xl text-idgreen rounded-[30px] text-center">
                Login
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
