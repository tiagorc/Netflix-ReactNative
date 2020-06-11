import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./Home";
import More from "./More";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "#1a1718",
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarLabel: "Busca",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Soon"
        component={Home}
        options={{
          tabBarLabel: "Em breve",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="library-movie"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Home}
        options={{
          tabBarLabel: "Downloads",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="download" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mais"
        component={More}
        options={{
          tabBarLabel: "Mais",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-list"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
