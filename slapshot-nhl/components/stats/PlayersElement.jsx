import React from "react";

import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function PlayersData({ forwards, defensemen, goalies }){
        
    const forwardsRow = forwards.map((player, index) => {
        return (
            <View style={styles.playerRow}>
                <View style={styles.playerInfo}>
                    <Image
                        source={{ uri: player.headshot }}
                        style={styles.playerImage}
                    />
                    <Text style={styles.playerName}>{player.firstName.default} {player.lastName.default}</Text>
                </View>
                <Text>{player.sweaterNumber}</Text>
                <Text>{player.positionCode}</Text>
            </View>
        )
    })

    const defensemenRow = defensemen.map((player, index) => {
        return (
            <View style={styles.playerRow}>
                <View style={styles.playerInfo}>
                    <Image
                        source={{ uri: player.headshot }}
                        style={styles.playerImage}
                    />
                    <Text style={styles.playerName}>{player.firstName.default} {player.lastName.default}</Text>
                </View>
                <Text>{player.sweaterNumber}</Text>
                <Text>{player.positionCode}</Text>
            </View>
        )
    }
    )

    const goaliesRow = goalies.map((player, index) => {
        return (
            <View style={styles.playerRow}>
                <View style={styles.playerInfo}>
                    <Image
                        source={{ uri: player.headshot }}
                        style={styles.playerImage}
                    />
                    <Text style={styles.playerName}>{player.firstName.default} {player.lastName.default}</Text>
                </View>
                <Text>{player.sweaterNumber}</Text>
                <Text>{player.positionCode}</Text>
            </View>
        )
    }
    )

    const tableHeader = <View style={styles.tableHeader}>
        <Text style={styles.playerLabel}>Player</Text>
        <Text style={styles.playerNumberHeader}>#</Text>
        <Text style={styles.playerPositionHeader}>Pos</Text>
    </View>

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.positionContainer}>
                <Text style={styles.subheading}>Forwards</Text>
                {tableHeader}
                {forwardsRow}
            </View>
            <View style={styles.positionContainer}>
                <Text style={styles.subheading}>Defensemen</Text>
                {tableHeader}
                {defensemenRow}
            </View>
            <View style={styles.positionContainer}>
                <Text style={styles.subheading}>Goalies</Text>
                {tableHeader}
                {goaliesRow}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: hp("8%"),
        marginHorizontal: wp("7%")
    }, 
    positionContainer: {
        marginBottom: 20
    },
    subheading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    tableHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        fontWeight: "bold"
    },
    playerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        alignItems: "center"
    },
    playerImage: {
        width: wp("20%"),
        height: hp("10%"),
        borderWidth: 1.5,
        borderColor: "black",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    playerInfo: {
        flexDirection: "row",
        alignItems: "center",
        width: wp("60%"),
        justifyContent: "space-between",
    },
    playerLabel: {
        fontWeight: "bold",
        width: wp("65%"),
        paddingLeft: 15
    },
    playerName: {
        width: wp("50%"),
        paddingLeft: 20,
        fontWeight: "bold",
        fontSize: 16
    },
    playerPositionHeader: {
        fontWeight: "bold",
        width: wp("10%"),
        textAlign: "center"
    },
    playerNumberHeader: {
        fontWeight: "bold",
        width: wp("10%"),
        textAlign: "center",
        marginRight: 10,
        marginLeft: 5
    }
})