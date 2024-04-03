// navigation/Navigation.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenLayout from "../screens/Home-Screen/Home-Screen-Layout";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
