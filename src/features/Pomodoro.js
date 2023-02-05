import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";

export const Pomodoro = ({addSubject}) => {
    const [subject, setSubject] = useState(null)
     
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        onChangeText={setSubject}
        label="O que vai estudar?"
        />
        <View style={styles.button}>
        <RoundedButton  title="+" size={50} onPress={()=> addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
  },
  textInput:{
    flex: 1,
    marginRight: spacing.sm,
  },
  button:{
    justifyContent: "center"
  }
  ,
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "top",
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
  },
});
