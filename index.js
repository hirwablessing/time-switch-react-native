import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
} from "react-native";

export default function TimeSwitch() {
  const [isActive, setIsActive] = useState(true);
  const [isLeftActive, setIsLeftActive] = useState(false);

  const styles = StyleSheet.create({
    timeSwitch: {
      marginLeft: 10,
      flexDirection: "row",
    },
    timeSwitch__text: {
      color: "#fff",
      fontSize: 15,
    },
    timeSwitch__all: {
      backgroundColor: isLeftActive ? "#000" : "#fff",
      width: 60,
      height: 35,
      borderColor: "#000",
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
      backgroundColor: isActive ? "#000" : "#fff",
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
              <Text style={styles.timeSwitch__text}>AM</Text>
            ) : (
              <Image
                source={require("./icons/moon-line.png")}
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
              <Text style={styles.timeSwitch__text}>AM</Text>
            ) : (
              <Image
                source={require("./icons/sun-line.png")}
                style={styles.timeSwitch__icons}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </>
    </View>
  );
}
