import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import { colors, Colors } from "./src/utils/colors";
import { Pomodoro } from "./src/features/Pomodoro";
import { Timer } from "./src/features/Timer";
import { FocusHistory } from "./src/features/FocousHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory ] = useState([])

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <>
          <Pomodoro addSubject={setCurrentSubject} />
          <FocusHistory history={history}/>
          </>
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimeEnd={(subject) => { 
              setHistory([...history, subject])
            }}
            clearSubject={() => setCurrentSubject(null)}
          />
        )}
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.dackblue,
  },
});
