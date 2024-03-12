import SchoolBannerSmall from "@/components/SchoolBannerSmall";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeatherIcons from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { useSession } from "@/ctx/ctx";
import { getProfile, UserInfo } from "@/api/student";
import { AxiosResponse } from "axios";
import { Image } from "expo-image";
import { router } from "expo-router";
import Feathericons from "@expo/vector-icons/Feather";
import LoadingBanner from "@/components/Loading";

export default function InformationPage() {
  const { session } = useSession();
  const { height, width } = useWindowDimensions();
  const [userInfo, setUserInfo] = useState<UserInfo | null>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (session) {
      setIsLoading(true);
      getProfile(session).then((resp: AxiosResponse<UserInfo, any>) => {
        setUserInfo(resp.data);
        setIsLoading(false);
      });
    }
  }, []);
  return (
    <SafeAreaView className="flex items-center justify-center ">
      {!isLoading ? (
        <View className="w-full">
          <StatusBar style="dark" />

          <View className="w-full p-2">
            <Pressable
              className="w-10"
              onPress={() => {
                router.replace("/login");
              }}
            >
              <Feathericons name="chevron-left" size={40} />
            </Pressable>
          </View>
          <View className="flex flex-col items-center justify-between h-[90vh] pt-2 px-5 w-full">
            <View className="w-full flex flex-row items-center space-x-3">
              <SchoolBannerSmall />
              <Text className="text">COOU</Text>
            </View>
            {userInfo ? (
              <View>
                <Image
                  source={{
                    uri: userInfo.data.personalData.passport,
                  }}
                  style={{
                    width: width - 100,
                    height: 300,
                    maxWidth: 350,
                    borderRadius: 20,
                  }}
                />
              </View>
            ) : (
              <View className="bg-[#E7E7E7] h-[310px] w-full  rounded-xl flex items-center justify-center">
                <FeatherIcons name="user" size={250} />
              </View>
            )}

            <View className="flex w-full">
              <View className="flex space-y-2">
                <Text className=" text-lg">Student's Information</Text>
                <View className=" w-full h-[2px] bg-[#E7E7E7]"></View>
              </View>
              {userInfo ? (
                <View className="flex flex-row justify-between mt-5">
                  <View className="flex space-y-5 mr-3">
                    <View>
                      <Text className="text-idgray font-extralight">
                        Full Name
                      </Text>
                      <Text className="text-lg">
                        {`${userInfo?.data.personalData.firstname} ${userInfo?.data.personalData.surname}`}
                      </Text>
                    </View>

                    <View>
                      <Text className="text-idgray font-extralight">
                        Program
                      </Text>
                      <Text className="text-lg">{`${userInfo?.data.programmeDetail.department}`}</Text>
                    </View>

                    <View>
                      <Text className="text-idgray font-extralight">
                        Faculty
                      </Text>
                      <Text className="text-lg">
                        {userInfo?.data.programmeDetail.faculty}
                      </Text>
                    </View>
                  </View>
                  <View className="flex space-y-5">
                    <View>
                      <Text className="text-idgray font-extralight">
                        Reg No
                      </Text>
                      <Text className="text-lg">
                        {userInfo?.data.programmeDetail.jambRegNo}
                      </Text>
                    </View>

                    <View>
                      <Text className="text-idgray font-extralight">Level</Text>
                      <Text className="text-lg">
                        {userInfo?.data.programmeDetail.yearOfStudy}
                      </Text>
                    </View>

                    <View>
                      <Text className="text-idgray font-extralight">
                        Department
                      </Text>
                      <Text className="text-lg">
                        {userInfo?.data.programmeDetail.departmentId}
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View className="h-30"></View>
              )}
            </View>

            <View className="flex flex-row w-full justify-between mb-5">
              <Link href={"/qrcode"} asChild>
                <Pressable className="bg-idgreen py-2 rounded-full flex-grow max-w-[180px] mr-3">
                  <Text className="text-lg text-white rounded-[30px] text-center">
                    QR CODE
                  </Text>
                </Pressable>
              </Link>

              <Pressable className="border-2 border-idgreen py-2 rounded-full flex-grow max-w-[180px]">
                <Text className="text-lg text-idgreen rounded-[30px] text-center">
                  View Details
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : (
        <View className="h-screen w-screen flex items-center justify-center">
          <LoadingBanner />
        </View>
      )}
    </SafeAreaView>
  );
}
