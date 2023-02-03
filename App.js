import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';

import { colors, Colors } from './src/utils/colors';
import { Pomodoro } from './src/features/Pomodoro';
import { Timer } from './src/features/Timer';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null)

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject? 
        (
          <Pomodoro addSubject={setCurrentSubject}/>
        ): (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={()=> {}}
            clearSubject={()=> {}}
          />
        )
      }
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    backgroundColor: colors.dackblue,
  },
});