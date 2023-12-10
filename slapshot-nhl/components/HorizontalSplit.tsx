import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function HorizontalSplit(){
    return (
        <>
         <View style={styles.horizontalContainer}>
            <View style={styles.horizontalSplit}></View>
         </View>
    </>
    )
}

const styles = StyleSheet.create({
    horizontalContainer: {
        flex: 1,
        justifyContent: "center",
        width: wp("100%"),
        alignItems: "center"
    },
    horizontalSplit: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        marginVertical: 15,
        width: wp("90%")
    }
})