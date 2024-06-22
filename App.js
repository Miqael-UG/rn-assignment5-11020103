import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import MyCardsScreen from "./screens/MyCards";
import StatisticsScreen from "./screens/Statistics";
import SettingsScreen from "./screens/Setting";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "MyCards") {
              iconName = focused ? "card" : "card-outline";
            } else if (route.name === "Statistics") {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#383FFA", // Active tab color
          tabBarInactiveTintColor: "gray", // Inactive tab color
          tabBarStyle: {
            marginTop: 10,
            height: 60,
            backgroundColor: "white", // Optional: If you want a background color
            borderTopWidth: 0, // Remove top border
            elevation: 0, // Remove Android shadow
            shadowOpacity: 0, // Remove iOS shadow
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 12,
            marginBottom: 10, // Adjust the space between the icon and the text
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MyCards" component={MyCardsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
