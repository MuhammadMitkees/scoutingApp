import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
// import LinearGradient from "react-native-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScoutingLogo from "../components/ScoutingLogo";
import { LinearGradient } from "expo-linear-gradient";

const SignUpScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.backgroundStyle}>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={styles.backgroundImageStyle}
        resizeMode="cover"
      >
        <LinearGradient
          style={styles.LGStyles}
          colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.4)", "rgba(0, 0, 0, 1)"]}
        />
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
              // onIconPress={setSelection}
              onPress={() => {
                setSelection(!isSelected);
              }}
              checkedColor="#ED6623"
              checked={isSelected}
              textStyle={styles.checkboxTxt}
              containerStyle={styles.checkboxStyle}
              size={24}
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
  LGStyles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  emailInput: {
    height: 50,
    marginHorizontal: 25,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginTop: 40,
    padding: 10,
    color: "#8D8D8D",
    fontSize: 16,
  },
  PassInput: {
    height: 50,
    marginHorizontal: 25,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginTop: 10,
    padding: 10,
    color: "#8D8D8D",
    fontSize: 16,
  },
  CheckBoxContainer: {
    marginTop: 6,
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
    marginLeft: 0,
    marginRight: 0,
    paddingHorizontal: 0,
  },
  checkboxTxt: {
    color: "#ED6623",
  },
  label: {
    marginLeft: 3,
    fontSize: 12,
    color: "white",
  },
  forgotPass: {
    fontSize: 12,
    color: "white",
  },
  singinBtn: {
    alignItems: "center",
    backgroundColor: "#ED6623",
    padding: 16,
    marginHorizontal: 25,
    borderRadius: 5,
    marginTop: 100,
  },
  signinTxt: {
    color: "white",
    fontSize: 18,
  },
  signupCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 10,
    marginHorizontal: 25,
  },
  signupTxt: {
    color: "#8D8D8D",
    fontSize: 12,
  },
  signupBtn: {
    marginLeft: 8,
    fontSize: 12,
    color: "white",
  },
});
export default SignUpScreen;
