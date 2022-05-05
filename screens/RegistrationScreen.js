import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { emailValidator } from "../common/validations/emailValidator";
import { passwordValidator } from "../common/validations/passwordValidator";

const RegistrationScreen = () => {
  const [details, setDetails] = useState({
    email: {
      value: "",
      error: "",
      valid: false,
    },
    password: {
      value: "",
      error: "",
      valid: false,
    },
  });

  //   const incompleteForm = !details.email || !details.password;

  const emailValidation = (email) => {
    if (emailValidator(email)) {
      setDetails({ ...details, email: { valid: true } });
    } else {
      setDetails({
        ...details,
        email: { error: "Email is invalid!", valid: false },
      });
    }
  };

  const passwordValidation = (pass) => {
    if (passwordValidator(pass)) {
      setDetails({ ...details, password: { valid: true } });
    } else {
      setDetails({
        ...details,
        password: { error: "Password is invalid!", valid: false },
      });
    }
  };

  //   const validateDetails = () => {
  //     const isEmailValid =
  //       details.email.value !== "" && emailValidator(details.email);
  //     const isPasswordValid =
  //       details.password !== "" && passwordValidator(details.password);

  //     return isEmailValid && isPasswordValid;
  //   };

  const register = () => {};

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        value={details.email}
        onChangeText={(text) =>
          setDetails({ ...details, email: { value: text } })
        }
        onEndEditing={(value) => emailValidation(value)}
        placeholder="Enter your email..."
        autoComplete="email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <Text>{details.email.error}</Text>
      <Text>Password:</Text>
      <TextInput
        value={details.password}
        onChangeText={(text) =>
          setDetails({ ...details, password: { value: text } })
        }
        onEndEditing={(value) => passwordValidation(value)}
        placeholder="Enter your password..."
        textContentType="password"
        secureTextEntry={true}
      />
      <Text>{details.password.error}</Text>
      <TouchableOpacity
        // disabled={incompleteForm}
        onPress={() => console.log(details)}
      >
        <Text>Register!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
