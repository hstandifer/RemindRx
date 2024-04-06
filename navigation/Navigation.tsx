// navigation/Navigation.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenLayout from "../screens/Home-Screen/Home-Screen-Layout";
import AccountScreenLayout from "../screens/Account-Screen/Account-Screen-Layout";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenLayout} />
        <Stack.Screen name="Account" component={AccountScreenLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
