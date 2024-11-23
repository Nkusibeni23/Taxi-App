import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { ArrowLongRightIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

// // Import images directly
// import economyImage from "../assets/Cars/pnghq.com-car-icon-png-free-images-with-transparent-background.png";
// import businessImage from "../assets/Cars/pngtree-luxurious-suv-car-in-brown-color-png-image_6380433.png";
// import firstClassImage from "../assets/Cars/pnghq.com-car-icon-png-free-images-with-transparent-background.png";

const data = [
  {
    id: "0",
    title: "Standard",
    image: "https://links.papareact.com/3pn",
    screen: "StandardScreen",
  },
  {
    id: "1",
    title: "Business",
    image: "https://links.papareact.com/3pn",
    screen: "BusinessScreen",
  },
  {
    id: "2",
    title: "First Class",
    image: "https://links.papareact.com/3pn",
    screen: "FirstClassScreen",
  },
];

export default function NavOptions() {
  const navigation = useNavigation();
  const [focusInput, setFocusInput] = useState(null);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          className={`p-2 pl-6 pb-8 pt-4 m-1 rounded-2xl mt-6  ${
            focusInput === item.id
              ? "bg-blue-500 border border-white"
              : "bg-white border border-blue-500"
          }`}
          onPress={() => setFocusInput(item.id)}
          onPressIn={() => navigation.navigate(item.screen)}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              className="w-36 h-28 object-contain"
            />
            <View className="flex-row items-center space-x-3">
              <Text
                className={`font-black text-base mt-2 ${
                  focusInput === item.id ? "text-white" : "text-blue-500"
                }`}
              >
                {item.title}
              </Text>
              <View
                className={`p-1 mt-2 rounded-full flex items-center justify-center ${
                  focusInput === item.id ? "bg-white" : "bg-blue-500"
                }`}
              >
                <ArrowLongRightIcon
                  size={18}
                  color={`${focusInput === item.id ? "blue" : "white"}`}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
