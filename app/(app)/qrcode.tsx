import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feathericons from "@expo/vector-icons/Feather";
import { router, useRootNavigationState } from "expo-router";
import QRCode from "react-native-qrcode-svg";
import { useSession } from "@/ctx/ctx";
import { useEffect, useState } from "react";
import { UserInfo, getProfile } from "@/api/student";
import { AxiosResponse } from "axios";
import LoadingBanner from "@/components/Loading";

export default function QRCodePage() {
  const { width, height } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>();
  const [QRText, setQRText] = useState(
    "https://idscan-ansu-a566bc20daf2.herokuapp.com/student/qr-scan"
  );
  const { session } = useSession();
  const QRUrl = new URL(
    "https://idscan-ansu-a566bc20daf2.herokuapp.com/student/qr-scan"
  );

  useEffect(() => {
    if (session) {
      setIsLoading(true);
      getProfile(session).then((resp: AxiosResponse<UserInfo, any>) => {
        setUserInfo(resp.data);
        setIsLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      QRUrl.searchParams.append(
        "first_name",
        userInfo.data.personalData.firstname
      );

      QRUrl.searchParams.append(
        "middle_name",
        userInfo.data.personalData.middlename
      );

      QRUrl.searchParams.append(
        "last_name",
        userInfo.data.personalData.surname
      );

      QRUrl.searchParams.append(
        "school",
        "Chukwuemeka Odumegwu Ojukwu University"
      );

      QRUrl.searchParams.append(
        "department",
        userInfo.data.programmeDetail.department
      );

      QRUrl.searchParams.append(
        "program",
        userInfo.data.programmeDetail.department
      );

      QRUrl.searchParams.append(
        "regno",
        userInfo.data.programmeDetail.jambRegNo
      );

      //   QRUrl.searchParams.append("photo", userInfo.data.personalData.passport);

      console.log(QRUrl.href);
      setQRText(QRUrl.href);
    }
  }, [userInfo]);
  return (
    <SafeAreaView className="flex items-center justify-center">
      {!isLoading ? (
        <View className="w-full">
          <StatusBar style="dark" />

          <View className="w-full p-2">
            <Pressable
              className="w-10"
              onPress={() => {
                router.replace("/information");
              }}
            >
              <Feathericons name="chevron-left" size={40} />
            </Pressable>

            <View className="w-full my-2">
              <Text className="text-center text-lg font-semibold">
                Student QR Code
              </Text>
            </View>

            <View className="w-full flex items-center justify-center my-5">
              <QRCode
                value={QRText}
                size={width > 500 ? width - 300 : width - 100}
              />
            </View>
          </View>
          <View className="w-full items-center my-5">
            <Text>Scan QR code to view student public details</Text>
          </View>
          <View className="w-full flex items-center justify-center my-10">
            <Pressable
              className="bg-[#555555] w-[150px] h-[50px] flex items-center justify-center rounded-full"
              onPress={() => {
                router.replace("/information");
              }}
            >
              <Text className="text-white text-lg">Close</Text>
            </Pressable>
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
