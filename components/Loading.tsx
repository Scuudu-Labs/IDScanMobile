import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function LoadingBanner() {
  return (
    <View className="flex items-center space-y-2">
      <View className="flex items-center justify-center w-[200px] h-[200px] border border-idgray rounded-full ">
        <Image
          source={"https://i.ibb.co/Tg36KKL/coou-logo-removebg-preview.png"}
          className="w-[100px] h-[110px]"
        />
      </View>
      <Text className="text-idgray text-sm">Loading...</Text>
    </View>
  );
}
