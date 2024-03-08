import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function SchoolBannerSmall() {
  return (
    <View className="flex items-center space-y-2">
      <View className="flex items-center justify-center w-[50px] h-[50px] border border-idgray rounded-full ">
        <Image
          source={"https://i.ibb.co/Tg36KKL/coou-logo-removebg-preview.png"}
          className="w-[30px] h-[40px]"
        />
      </View>
      {/* <Text className="text-idgray">https://www.coou.edu.ng</Text> */}
    </View>
  );
}
