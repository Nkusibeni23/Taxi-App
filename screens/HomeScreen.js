import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";

export default function HomeScreen() {
  return (
    <SafeAreaView className=" bg-white h-screen">
      <View className="top-8 mx-6">
        <Text className="font-black text-4xl text-blue-500">TE-BUKA</Text>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}
