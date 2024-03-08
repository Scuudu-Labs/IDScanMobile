import SchoolBannerSmall from "@/components/SchoolBannerSmall";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeatherIcons from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
export default function InformationPage() {
  return (
    <SafeAreaView className="flex items-center justify-center ">
      <StatusBar style="dark" />
      <View className="flex flex-col items-center justify-between h-[90vh] pt-10 px-5 w-full">
        <View className="w-full flex flex-row items-center space-x-3">
          <SchoolBannerSmall />
          <Text className="text">COOU</Text>
        </View>

        <View className="bg-[#E7E7E7] h-[310px] w-full  rounded-xl flex items-center justify-center">
          <FeatherIcons name="user" size={250} />
        </View>

        <View className="flex w-full">
          <View className="flex space-y-5">
            <Text className=" text-lg">Students Information</Text>
            <View className=" w-full h-[2px] bg-[#E7E7E7]"></View>
          </View>

          <View className="flex flex-row justify-between mt-5">
            <View className="flex space-y-5 mr-3">
              <View>
                <Text className="text-idgray font-extralight">Full Name</Text>
                <Text className="text-lg">Vivian Osondu</Text>
              </View>

              <View>
                <Text className="text-idgray font-extralight">Program</Text>
                <Text className="text-lg">National Diploma</Text>
              </View>

              <View>
                <Text className="text-idgray font-extralight">Faculty</Text>
                <Text className="text-lg">Engineering</Text>
              </View>
            </View>
            <View className="flex space-y-5">
              <View>
                <Text className="text-idgray font-extralight">Reg No</Text>
                <Text className="text-lg">2013/183568</Text>
              </View>

              <View>
                <Text className="text-idgray font-extralight">Level</Text>
                <Text className="text-lg">200</Text>
              </View>

              <View>
                <Text className="text-idgray font-extralight">Department</Text>
                <Text className="text-lg">Civil Engineering</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex flex-row w-full justify-between">
          <Pressable className="bg-idgreen py-3 rounded-full flex-grow max-w-[180px] mr-3">
            <Text className="text-lg text-white rounded-[30px] text-center">
              QR CODE
            </Text>
          </Pressable>

          <Link href={"/"}></Link>
          <Pressable className="border-2 border-idgreen py-3 rounded-full flex-grow max-w-[180px]">
            <Text className="text-lg text-idgreen rounded-[30px] text-center">
              View Details
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
