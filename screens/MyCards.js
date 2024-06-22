import { Text, View } from "react-native";
import { ThemeContext } from "../ThemeContext";
import React, { useContext } from "react";
import { ThemeDark, ThemeLight } from "../Data/mockupData";

export default function MyCards() {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          theme === "light"
            ? ThemeLight.backgroundColor
            : ThemeDark.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
        }}
      >
        MyCards!
      </Text>
    </View>
  );
}
