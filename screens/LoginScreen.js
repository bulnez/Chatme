import { View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { user, signInWithGoogle } = useAuth();
  return (
    <View>
      <Text>You need to log in</Text>
      <Button title="sign-in" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
