import * as React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import LogoGrey from "../assets/little-lemon-logo-grey.png";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(false);

  React.useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  const subscribedAlert = () => {
    Alert.alert("Thanks for subscribing", "Stay tuned!", [{ text: "OK" }]);
  };

  return (
    <View style={styles.container}>
      <Image source={LogoGrey} style={styles.logoGrey}></Image>
      <Text style={styles.mainText}>
        Subscribe to out newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.emailInput}
        placeholder="Type your email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <Text>{email}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Subscribe"
          color="#42514b"
          onPress={subscribedAlert}
          disabled={!isEmailValid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },

  logoGrey: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 40,
  },
  mainText: {
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
  },

  pressableCustom: {
    backgroundColor: "#42514b",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    textAlign: "center",
  },
  pressableText: {
    color: "white",
  },
  emailInput: {
    height: 35,
    margin: 20,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    textTransform: "lowercase",
  },

  buttonContainer: {
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default SubscribeScreen;
