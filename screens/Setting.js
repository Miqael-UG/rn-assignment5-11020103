import { StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { ThemeContext } from "../ThemeContext";
import React, { useContext } from "react";
import { ThemeDark, ThemeLight } from "../Data/mockupData";

export default function Setting() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    toggleTheme();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          theme === "light"
            ? ThemeLight.backgroundColor
            : ThemeDark.backgroundColor,
      }}
    >
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color:
              theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
          }}
        >
          Settings
        </Text>
      </View>
      <View style={styles.controls}>
        <View
          style={[
            styles.languageContainer,
            {
              borderBottomColor: theme === "light" ? "#0000000B" : "#FFFFFF7F",
            },
          ]}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 17,
              color:
                theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
            }}
          >
            Language
          </Text>
          <Icon
            name="chevron-forward-outline"
            color={theme === "light" ? "#0000003D" : "#FFFFFF7F"}
            size={25}
          />
        </View>
        <View
          style={[
            styles.languageContainer,
            {
              borderBottomColor: theme === "light" ? "#0000000B" : "#FFFFFF7F",
            },
          ]}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 17,
              color:
                theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
            }}
          >
            My Profile
          </Text>
          <Icon
            name="chevron-forward-outline"
            color={theme === "light" ? "#0000003D" : "#FFFFFF7F"}
            size={25}
          />
        </View>
        <View
          style={[
            styles.languageContainer,
            {
              borderBottomColor: theme === "light" ? "#0000000B" : "#FFFFFF7F",
            },
          ]}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 17,
              color:
                theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
            }}
          >
            Contact Us
          </Text>
          <Icon
            name="chevron-forward-outline"
            color={theme === "light" ? "#0000003D" : "#FFFFFF7F"}
            size={25}
          />
        </View>
        <View
          style={[
            styles.languageContainer,
            {
              borderBottomColor: theme === "light" ? "#0000000B" : "#FFFFFF7F",
            },
          ]}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 17,
              color:
                theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
            }}
          >
            Change Password
          </Text>
          <Icon
            name="chevron-forward-outline"
            color={theme === "light" ? "#0000003D" : "#FFFFFF7F"}
            size={25}
          />
        </View>
        <View
          style={[
            styles.languageContainer,
            {
              borderBottomColor: theme === "light" ? "#0000000B" : "#FFFFFF7F",
            },
          ]}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 17,
              color:
                theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
            }}
          >
            Privacy Policy
          </Text>
          <Icon
            name="chevron-forward-outline"
            color={theme === "light" ? "#0000003D" : "#FFFFFF7F"}
            size={25}
          />
        </View>
        <View style={styles.themeContainer}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 17,
              color:
                theme === "light" ? ThemeLight.fontColor : ThemeDark.fontColor,
            }}
          >
            Theme
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Switch
              trackColor={{ false: "#A1A0A1", true: "#A1A0A1" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  controls: {
    padding: 20,
  },
  languageContainer: {
    marginTop: 20,
    borderBottomWidth: 1.3,
    paddingBottom: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  themeContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
