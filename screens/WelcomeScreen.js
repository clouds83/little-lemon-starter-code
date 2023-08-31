import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import Logo from "../assets/little-lemon-logo.png";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <>
      <View style={styles.mainContainer}>
        <Image source={Logo} style={styles.logo}></Image>
        <Text style={styles.tagline}>
          Little Lemon, you local Mediterranean Bistro
        </Text>
      </View>
      <View style={styles.pressableContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("Subscribe");
          }}
          style={styles.newsletterPressable}
        >
          <Text style={styles.newsletterText}>Newsletter</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 48,
  },
  tagline: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  pressableContainer: {
    padding: 32,
  },
  newsletterPressable: {
    backgroundColor: "#42514b",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    textAlign: "center",
  },
  newsletterText: {
    color: "white",
  },
});

export default WelcomeScreen;
