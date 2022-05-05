import { View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { user, signInWithGoogle } = useAuth();
  return (
    <View>
      <Text>You need to log in</Text>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
      <Button
        title="Register with email"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default LoginScreen;
