import SchoolBanner from "@/components/SchoolBanner";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feathericons from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
import { login } from "@/api/auth";
import { AxiosResponse } from "axios";
import { router } from "expo-router";
import { useSession } from "@/ctx/ctx";

export default function LoginPage() {
  const { signIn } = useSession();
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    signIn(username, password);
    router.replace("/information");
  }

  return (
    <SafeAreaView className="flex items-center justify-center ">
      <StatusBar style="dark" />
      <View className="flex flex-col items-center justify-between h-[80vh] pt-10 px-10 w-full">
        <View className="flex space-y-10">
          <SchoolBanner />
          <View className="flex items-center justify-center">
            <Text className="text-idgray text-xl text-center">COOU</Text>
            <Text className="text-idgray text-xl text-center">
              STUDENT E-ID
            </Text>
          </View>
        </View>
        <View className=" w-full h-[2px] bg-[#E7E7E7]"></View>
        <View>
          <Text className="text-xl text-idgray text-center">Student Login</Text>

          <Text className="font-extralight text-idgray text-center">
            Enter your login details below
          </Text>
        </View>
        <View className="flex w-full space-y-5">
          <View className="bg-[#FFFDDE] h-[60px] rounded-full border-[#EEEEEE] border px-5 text-idblack flex flex-row space-x-2">
            <View className="flex items-center justify-center">
              <Feathericons name="user" size={25} />
            </View>
            <TextInput
              className="flex-grow"
              textContentType="username"
              placeholder="Enter Student email Address"
              placeholderTextColor={"black"}
              onChangeText={(newText) => {
                setUsername(newText);
              }}
            ></TextInput>
          </View>
          <View className="bg-[#FFFDDE] h-[60px] rounded-full border-[#EEEEEE] border px-5 text-idblack flex flex-row space-x-2">
            <View className="flex items-center justify-center">
              <Feathericons name="lock" size={25} />
            </View>
            <TextInput
              className="flex-grow"
              textContentType="password"
              placeholder="Password"
              placeholderTextColor={"black"}
              secureTextEntry={passwordHidden}
              onChangeText={(newText) => {
                setPassword(newText);
              }}
            ></TextInput>

            <Pressable
              className="flex items-center justify-center"
              onPress={() => {
                setPasswordHidden(!passwordHidden);
              }}
            >
              {passwordHidden ? (
                <Feathericons name="eye-off" size={25} />
              ) : (
                <Feathericons name="eye" size={25} />
              )}
            </Pressable>
          </View>
        </View>
        <Pressable
          className="bg-idgreen py-3 rounded-full w-full"
          onPress={handleLogin}
        >
          <Text className="text-xl text-white rounded-[30px] text-center">
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
