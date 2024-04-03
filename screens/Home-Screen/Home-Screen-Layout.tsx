import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const HomeScreenLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <Button title="Go to Details" onPress={() => console.log("pressed")} />
    </View>
  );
};

export default HomeScreenLayout;
