import SchoolBanner from "@/components/SchoolBanner";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feathericons from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
import { login } from "@/api/student";
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
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView className="flex items-center justify-center ">
      <StatusBar style="dark" />
      <View className="w-full p-2">
        <Pressable
          className="w-10"
          onPress={() => {
            router.replace("/");
          }}
        >
          <Feathericons name="chevron-left" size={40} />
        </Pressable>
      </View>
      <View
        className={`flex flex-col items-center justify-between pt-2 px-10 w-full ${
          height > 500 ? "h-[90vh] " : "h-[95vh]"
        }`}
      >
        <View className="flex space-y-5">
          <SchoolBanner />
          <View className="flex items-center justify-center">
            <Text className="text-idgray text-lg text-center">COOU</Text>
            <Text className="text-idgray text-lg text-center">
              STUDENT E-ID CARD
            </Text>
          </View>

          <View className=" w-[80vw] h-[2px]   bg-[#E7E7E7]"></View>
        </View>
        <View className="my-3">
          <Text className="text-lg text-idgray text-center">Student Login</Text>

          <Text className="font-extralight text-idgray text-center text-sm">
            Enter your login details below
          </Text>
        </View>
        <KeyboardAvoidingView
          className="flex w-full space-y-5"
          behavior="position"
        >
          <View className="bg-[#FFFDDE] h-[60px] rounded-full border-[#EEEEEE] border px-5 text-idblack flex flex-row space-x-2">
            <View className="flex items-center justify-center">
              <Feathericons name="user" size={25} />
            </View>
            <TextInput
              className="flex-grow"
              textContentType="username"
              placeholder="Enter Student Email Address"
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
        </KeyboardAvoidingView>
        <Pressable
          className="bg-idgreen py-3 my-5 rounded-full w-full"
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
