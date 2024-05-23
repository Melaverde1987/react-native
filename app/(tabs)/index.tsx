import {
  Image,
  StyleSheet,
  Platform,
  TextInput,
  View,
  Pressable,
  Text,
  Alert,
  Linking,
} from "react-native";
import React from "react";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const [textUsername, onChangeUsername] = React.useState("Username");
  const [textMail, onChangeMail] = React.useState("E-Mail");
  const [textPassword, onChangePassword] = React.useState("Password");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ebeaea", dark: "#d8a80a" }}
      headerImage={
        <Image
          source={require("@/assets/images/BG.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Register</ThemedText>
      </ThemedView>

      <View
        style={{
          flexDirection: "column",
          paddingTop: 20,
          paddingBottom: 20,
          gap: 12,
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={textUsername}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeMail}
          value={textMail}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={textPassword}
        />
        <Pressable
          style={styles.btn}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.text}>Register</Text>
        </Pressable>

        <Text
          style={{ color: "black" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Do you have an account? Enter here
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
  },
  reactLogo: {
    height: 700,
    width: 360,
    top: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
    color: "#bdbdbd",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#ff6c00",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
