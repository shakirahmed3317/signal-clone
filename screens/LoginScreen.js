import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { parseActionCodeURL } from "firebase/auth";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, pass).catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/600px-Signal-Logo.svg.png?20201126050550",
        }}
        style={{ width: 200, height: 200, borderRadius: 15, marginBottom: 15 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={pass}
          onChangeText={(text) => setPass(text)}
          onSubmitEditing={signIn}
        />
      </View>

      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />
      <View style={{ height: 50 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
