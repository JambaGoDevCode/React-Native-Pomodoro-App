import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { Timing } from "./Timing";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject }) => {
    useKeepAwake()
  const [isStarted, setIsStarded] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(5);

  const OnEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarded(false);
    setProgress(1);
    reset()
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => setProgress(progress)}
          onEnd={OnEnd}
        />
        <View style={{ paddingTop: spacing.lg }}>
          <Text style={styles.title}> Focos on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar progress={progress} theme={theme} style={{ height: 10 }} />
      </View>

      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="Start" onPress={() => setIsStarded(true)} />
        )}
        {isStarted && (
          <RoundedButton title="Pause" onPress={() => setIsStarded(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
      <RoundedButton size={50} title="-" onPress={clearSubject}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
  clearSubjectWrapper:{
    flexDirection: "row",
    justifyContent: "center",

  }
});
