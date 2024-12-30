import React from "react";
import { Tabs } from "expo-router";
import { LikeProvider } from "@/contexts/LikeContext";

const TabLayout = () => {
  return (
    <LikeProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            display: "none", // Hide the tab bar
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: "Create",
            headerShown: false,
          }}
        />
      </Tabs>
    </LikeProvider>
  );
};

export default TabLayout;
