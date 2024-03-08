import SchoolBannerSmall from "@/components/SchoolBannerSmall";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeatherIcons from "@expo/vector-icons/Feather";
export default function InformationPage() {
  return (
    <SafeAreaView className="flex items-center justify-center ">
      <StatusBar style="dark" />
      <View className="flex flex-col items-center justify-between h-[90vh] pt-10 px-5 w-full">
        <View className="w-full flex flex-row px-5 items-center space-x-3">
          <SchoolBannerSmall />
          <Text className="text-xl">COOU</Text>
        </View>

        <View className="bg-[#E7E7E7] h-[310px] w-full  rounded-2xl flex items-center justify-center">
          <FeatherIcons name="user" size={250} />
        </View>

        <View className="flex w-full">
          <View className="flex space-y-5">
            <Text className=" text-xl">Students Information</Text>
            <View className=" w-full h-[2px] bg-[#E7E7E7]"></View>
          </View>

          <View className="flex flex-row justify-between">
            <View className="flex space-y-5">
              <View>
                <Text className="text-idgray font-extralight">Full Name</Text>
                <Text className="text-xl">Vivian Osondu</Text>
              </View>

              <View>
                <Text className="text-idgray font-extralight">Program</Text>
                <Text className="text-xl">National Diploma</Text>
              </View>

              <View>
                <Text className="text-idgray font-extralight">Faculty</Text>
                <Text className="text-xl">Engineering</Text>
              </View>
            </View>
            <View className="flex space-y-5">
              <View>
                <Text className="text-idgray font-extralight">Reg No</Text>
                <Text className="text-xl">2013/183568</Text>
              </View>

              <View>
                <Text className="text-idgray font-extralight">Level</Text>
                <Text className="text-xl">200</Text>
              </View>

              <View>
                <Text className="text-idgray font-extralight">Department</Text>
                <Text className="text-xl">Civil Engineering</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex flex-row w-full justify-between">
          <Pressable className="bg-idgreen py-3 rounded-full flex-grow max-w-[180px]">
            <Text className="text-2xl text-white rounded-[30px] text-center">
              QR CODE
            </Text>
          </Pressable>

          <Pressable className="border-2 border-idgreen py-3 rounded-full flex-grow max-w-[180px]">
            <Text className="text-2xl text-idgreen rounded-[30px] text-center">
              View Details
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
