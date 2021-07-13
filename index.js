import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";

import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import CustomText from "../components/CustomText";

export default function TimeSwitch({ time }) {
  const [isActive, setIsActive] = useState(true);
  const [isLeftActive, setIsLeftActive] = useState(false);

  const styles = StyleSheet.create({
    timeSwitch: {
      marginLeft: 10,
      flexDirection: "row",
    },
    timeSwitch__all: {
      backgroundColor: isLeftActive ? colors.black : colors.white,
      width: 60,
      height: 35,
      borderColor: colors.black,
      borderWidth: 1,
    },
    timeSwitch__left: {
      borderLeftWidth: 0.8,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    timeSwitch__right: {
      borderRightWidth: 0.8,
      borderTopWidth: 0.8,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isActive ? colors.black : colors.white,
    },
    timeSwitch__icons: { width: 20, height: 20 },
  });

  return (
    <View style={styles.timeSwitch}>
      <>
        <TouchableWithoutFeedback
          onPress={() => {
            setIsLeftActive(!isLeftActive);
            setIsActive(false);
          }}
        >
          <View style={[styles.timeSwitch__all, styles.timeSwitch__left]}>
            {isLeftActive ? (
              <CustomText content="AM" color={colors.white} size={15} />
            ) : (
              <Image
                source={require("../assets/moon-line.png")}
                style={styles.timeSwitch__icons}
              />
            )}
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            setIsActive(true);
            setIsLeftActive(false);
          }}
        >
          <View style={[styles.timeSwitch__all, styles.timeSwitch__right]}>
            {isActive ? (
              <CustomText content="PM" color={colors.white} size={15} />
            ) : (
              <Image
                source={require("../assets/sun-line.png")}
                style={styles.timeSwitch__icons}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </>
    </View>
  );
}
