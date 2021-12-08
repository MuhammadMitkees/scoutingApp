import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
const ScoutingLogo = () => {
  const imgSrc = require("../../assets/images/scoutLogo.png");
  return (
    <View style={styles.imageContainerStyle}>
      <Image style={styles.imageStyle} source={imgSrc} />
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainerStyle: {
    alignItems: "center",
    paddingVertical: 60,
  },
});
export default ScoutingLogo;
