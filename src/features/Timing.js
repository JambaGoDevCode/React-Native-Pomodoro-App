import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { fontSizes } from "../utils/sizes";

export const Timing = ({ onChangeTime }) =>{

    return(
       <>
         <View style={styles.timingButton}>
            <RoundedButton
                size={75}
                title="25"
                onPress= {()=> onChangeTime(25)}
            />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton
                size={75}
                title="30"
                onPress= {()=> onChangeTime(30)}
            />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton
                size={75}
                title="45"
                onPress= {()=> onChangeTime(45)}
            />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton
            style={{fontSize:8}}
                size={75}
                title="relax"
                onPress= {()=> onChangeTime(5)}
            />
        </View>
       </>
    )
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
    }
})