import { TabRouter, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, Linking } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import getSpecificPlayerInfo from "./util/GetSpecificPlayerInfor";
import { SvgUri } from "react-native-svg";

export default function PlayerDetailsScreen({ route }){

    const [playerInfo, setPlayerInfo] = React.useState([]);
    const { player } = route.params

    React.useEffect(() => {
        getSpecificPlayerInfo(player.id).then((data) => {
            setPlayerInfo(data);
        })
    }, [])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View>
                    <Image style={styles.image} source={{uri: player.headshot }}/>
                    <SvgUri style={styles.logo} uri={playerInfo.teamLogo} />
                    <View style={styles.name}>
                        <Text style={styles.firstName}>{player.firstName.default}</Text>
                        <Text style={styles.lastName}>{player.lastName.default}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff'
    // },
    image: {
        width: wp('100%'),
        height: hp('50%'),
        resizeMode: 'contain',
        zIndex: 1,
    },
    logo: {
        width: wp('150%'),
        height: hp('50%'),
        resizeMode: 'contain',
        position: "absolute",
        top: hp('0%'),
        left: wp('-25%'),
        opacity: 0.6,
    },
    name: {
        flexDirection: "column",
        height: hp('10%'),
        borderWidth: 1,
        borderColor: "black",
        fontSize: 36,
        paddingHorizontal: 35,
        justifyContent: "center",
    },
    firstName: {
        fontSize: 24,
        fontWeight: "500"
    },
    lastName: {
        fontSize: 36,
        fontWeight: "bold"
    }
})