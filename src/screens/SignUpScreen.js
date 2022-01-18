import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import ScoutingLogo from "../components/ScoutingLogo";
import Spacer from "../components/spacer";
import RNPickerSelect from "react-native-picker-select";
import { LinearGradient } from "expo-linear-gradient";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [accountType, setAccountType] = useState("");
  const [items, setItems] = useState([
    { label: "player", value: "player" },
    { label: "parent", value: "parent" },
    { label: "coach", value: "coach" },
  ]);
  const url = `https://scoutx.bit68.com/en/api/${accountType}app/me/`;

  const sendingFormSUp = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: firstName + lastName,
        phone: phone,
        password: password,
        gender: "male",
        birth_date: "2012-12-12",
        nationality: nationality,
      }),
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
    data.access_token
      ? window.alert("Succeful registration") & navigation.navigate("SignIn")
      : window.alert("Email already used");
  };
  // useEffect(() => {
  //   console.log(email);
  //   console.log(password);
  //   console.log(userName);
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(accountType);
  //   console.log(url);
  // }, [email, password, userName, lastName, firstName]);

  return (
    <ScrollView>
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
          <View style={styles.formstyle}>
            <RNPickerSelect
              placeholder={{ label: "Choose account type", value: null }}
              onValueChange={(x) => {
                setAccountType(x);
              }}
              style={PickerSelectStyles}
              items={items}
            />
            <Spacer />
            <Spacer />
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="First Name"
                style={styles.FN}
                value={firstName}
                onChangeText={(x) => {
                  setFirstName(x);
                }}
                textContentType="name"
                maxLength={30}
              />
              <TextInput
                placeholder="Last Name"
                style={styles.LN}
                value={lastName}
                onChangeText={(x) => {
                  setLastName(x);
                }}
                textContentType="name"
                maxLength={150}
              />
            </View>
            <Spacer />
            <TextInput
              placeholder="Email"
              value={email}
              style={styles.emailInput}
              onChangeText={(x) => {
                setEmail(x);
              }}
              textContentType="emailAddress"
              maxLength={30}
            />
            <Spacer />
            <TextInput
              placeholder="Password"
              value={password}
              style={styles.PassInput}
              textContentType="password"
              onChangeText={(x) => {
                setPassword(x);
              }}
              textContentType="password"
              secureTextEntry={true}
            />

            <TextInput />
          </View>
          <TouchableOpacity
            style={styles.singupBtn}
            onPress={() => {
              sendingFormSUp();
            }}
          >
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
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    height: "100%",
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
  formstyle: {
    flexDirection: "column",
    marginHorizontal: 25,
    marginTop: 60,
  },

  inputContainer: {
    flexDirection: "row",
  },
  FN: {
    flex: 0.5,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#8D8D8D",
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 5,
  },
  LN: {
    flex: 0.5,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#8D8D8D",
    fontSize: 16,
    backgroundColor: "white",
    marginLeft: 6,
    borderRadius: 5,
  },
  emailInput: {
    height: 50,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#8D8D8D",
    fontSize: 16,
  },
  PassInput: {
    height: 50,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#8D8D8D",
    fontSize: 16,
  },
  singupBtn: {
    alignItems: "center",
    backgroundColor: "#ED6623",
    padding: 16,
    marginHorizontal: 25,
    borderRadius: 5,
    marginTop: 40,
  },
  signupTxt: {
    color: "white",
    fontSize: 18,
  },
  signinCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 15,
  },
  signinTxt: {
    color: "#8D8D8D",
    fontSize: 12,
  },
  signinBtn: {
    marginLeft: 8,
    fontSize: 12,
    color: "white",
  },
});

const PickerSelectStyles = {
  inputIOS: {
    backgroundColor: "#FFFFFF",
    borderColor: "#57C8FB",
    color: "#57C8FB",
    fontSize: 16,
    height: 50,
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 2,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: "#FFFFFF",
    borderColor: "#57C8FB",
    color: "#57C8FB",
    fontSize: 16,
    height: 50,
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 2,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
};
export default SignUpScreen;
