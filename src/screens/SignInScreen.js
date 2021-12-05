import React, { useState } from "react";
import {
  Button,
  View,
  TextInput,
  StyleSheet,
  CheckBox,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScoutingLogo from "../components/ScoutingLogo";

const SignUpScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState("false");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.backgroundStyle}>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={styles.backgroundImageStyle}
        resizeMode="cover"
      >
        <ScoutingLogo />
        <TextInput
          placeholder="Email"
          value={email}
          style={styles.emailInput}
          onChange={setEmail}
        />
        <TextInput
          placeholder="Password"
          value={password}
          style={styles.PassInput}
          onChange={setPassword}
        />
        <View style={styles.CheckBoxContainer}>
          <View style={styles.checkboxSubCont}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkboxStyle}
            />
            <Text style={styles.label}>Remember me</Text>
          </View>

          <Text style={styles.forgotPass}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.singinBtn}>
          <Text style={styles.signinTxt}>SIGN IN</Text>
        </TouchableOpacity>
        <View style={styles.signupCont}>
          <Text style={styles.signupTxt}>Don’t have an account?</Text>
          <Text
            style={styles.signupBtn}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign up
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  backgroundImageStyle: {
    flex: 1,
  },
  emailInput: {
    height: 50,
    marginHorizontal: 25,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginTop: 142,
    paddingHorizontal: 21,
    paddingVertical: 17,
    color: "#8D8D8D",
    fontSize: 16,
    fontFamily: "Nexa Bold",
  },
  PassInput: {
    height: 50,
    marginHorizontal: 25,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginTop: 10,
    paddingHorizontal: 21,
    paddingVertical: 17,
    color: "#8D8D8D",
    fontSize: 16,
    fontFamily: "Nexa Bold",
  },
  CheckBoxContainer: {
    marginTop: 6,
    height: 15,
    marginHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkboxSubCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxStyle: {
    height: 15,
    width: 15,
    color: "#ED6623",
    backgroundColor: "#ED6623",
  },
  label: {
    marginLeft: 3,
    fontSize: 12,
    fontFamily: "Nexa Bold",
    color: "white",
  },
  forgotPass: {
    fontSize: 12,
    fontFamily: "Nexa Bold",
    color: "white",
  },
  singinBtn: {
    alignItems: "center",
    backgroundColor: "#ED6623",
    padding: 16,
    marginHorizontal: 25,
    borderRadius: 5,
    marginTop: 200,
  },
  signinTxt: {
    color: "white",
    fontFamily: "Nexa Heavy",
    fontSize: 18,
  },
  signupCont: {
    height: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 104,
    marginHorizontal: 25,
  },
  signupTxt: {
    color: "#8D8D8D",
    fontSize: 12,
    fontFamily: "Nexa Bold",
  },
  signupBtn: {
    marginLeft: 8,
    fontSize: 12,
    fontFamily: "Nexa Bold",
    color: "black",
  },
});
export default SignUpScreen;
