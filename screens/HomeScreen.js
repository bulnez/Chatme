import { View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const { user, logout } = useAuth();

  return (
    <View>
      <Text>Welcome, {user.displayName}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
