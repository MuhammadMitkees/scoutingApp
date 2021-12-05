import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Picker,
} from "react-native";
import ScoutingLogo from "../components/ScoutingLogo";
import Spacer from "../components/spacer";
const SignUpScreen = ({ navigation }) => {
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
        <View style={styles.formstyle}>
          <Picker style={styles.pickerStyle}>
            <Picker.Item label="Choose account type" enabled="false" />
            <Picker.Item
              style={styles.pickertItem}
              label="Parent"
              value="parent"
            />
            <Picker.Item
              style={styles.pickertItem}
              label="Player"
              value="Player"
            />
            <Picker.Item
              style={styles.pickertItem}
              label="Coach"
              value="Coach"
            />
          </Picker>
          <Spacer />
          <View style={styles.inputContainer}>
            <TextInput placeholder="First Name" style={styles.FN} />
            <TextInput placeholder="Last Name" style={styles.LN} />
          </View>
          <Spacer />
          <TextInput
            placeholder="Email"
            value={email}
            style={styles.emailInput}
            onChange={setEmail}
          />
          <Spacer />
          <TextInput
            placeholder="Password"
            value={password}
            style={styles.PassInput}
            onChange={setPassword}
          />

          <TextInput />
        </View>
        <TouchableOpacity style={styles.singupBtn}>
          <Text style={styles.signupTxt}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.signinCont}>
          <Text style={styles.signinTxt}>Already have an account?</Text>
          <Text
            style={styles.signinBtn}
            onPress={() => navigation.navigate("SignIn")}
          >
            Sign in
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
  formstyle: {
    flexDirection: "column",
    marginHorizontal: 25,
    marginTop: 82,
  },
  pickerStyle: {
    flex: 1,
    height: 50,
    paddingHorizontal: 21,
    paddingVertical: 17,
    borderRadius: 5,
    color: "#8D8D8D",
    fontSize: 16,
    fontFamily: "Nexa Bold",
    lineHeight: 19,
  },
  pickertItem: {
    borderTopColor: "black",
    borderBottomColor: "black",
    paddingHorizontal: 21,
    paddingVertical: 17,
    height: 50,
    color: "#8D8D8D",
    fontSize: 16,
    fontFamily: "Nexa Bold",
  },
  inputContainer: {
    flexDirection: "row",
  },
  FN: {
    flex: 0.5,
    height: 50,
    paddingHorizontal: 21,
    paddingVertical: 17,
    color: "#8D8D8D",
    fontSize: 16,
    fontFamily: "Nexa Bold",
    backgroundColor: "white",
  },
  LN: {
    flex: 0.5,
    height: 50,
    paddingHorizontal: 21,
    paddingVertical: 17,
    color: "#8D8D8D",
    fontSize: 16,
    fontFamily: "Nexa Bold",
    backgroundColor: "white",
    marginLeft: 6,
  },
  emailInput: {
    height: 50,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    paddingHorizontal: 21,
    paddingVertical: 17,
    color: "#8D8D8D",
    fontSize: 16,
    fontFamily: "Nexa Bold",
  },
  PassInput: {
    height: 50,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    paddingHorizontal: 21,
    paddingVertical: 17,
    color: "#8D8D8D",
    fontSize: 16,
    fontFamily: "Nexa Bold",
  },
  singupBtn: {
    alignItems: "center",
    backgroundColor: "#ED6623",
    padding: 16,
    marginHorizontal: 25,
    borderRadius: 5,
    marginTop: 140,
  },
  signupTxt: {
    color: "white",
    fontFamily: "Nexa Heavy",
    fontSize: 18,
  },
  signinCont: {
    height: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 104,
    marginHorizontal: 25,
  },
  signinTxt: {
    color: "#8D8D8D",
    fontSize: 12,
    fontFamily: "Nexa Bold",
  },
  signinBtn: {
    marginLeft: 8,
    fontSize: 12,
    fontFamily: "Nexa Bold",
    color: "black",
  },
});
export default SignUpScreen;
