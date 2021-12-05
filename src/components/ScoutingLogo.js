import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
const ScoutingLogo = () => {
  return (
    <Image
      style={styles.imageStyle}
      source={require("../../assets/images/group986.png")}
    />
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    height: 120,
    marginTop: 62,
    marginHorizontal: 40,
  },
});
export default ScoutingLogo;
