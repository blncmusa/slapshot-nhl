import { TabRouter, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, Linking } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import getSpecificPlayerInfo from "./util/GetSpecificPlayerInfor";
import { SvgUri } from "react-native-svg";

export default function PlayerDetailsScreen({ route }){

    const [playerInfo, setPlayerInfo] = React.useState([]);
    const { player } = route.params
    const [thisSeason, setThisSeason] = React.useState([]);
    const [career, setCareer] = React.useState([]);

    React.useEffect(() => {
        getSpecificPlayerInfo(player.id).then((data) => {
            setPlayerInfo(data);
            setThisSeason(data.featuredStats.regularSeason.subSeason);
            setCareer(data.featuredStats.regularSeason.career);
        })
    }, [])

    // gamesPlayed": 595,
    //             "goals": 314,
    //             "assists": 577,
    //             "points": 891,
    //             "plusMinus": 114,
    //             "pim": 233,
    //             "gameWinningGoals": 64,
    //             "otGoals": 15,
    //             "shots": 2028,
    //             "shootingPctg": 0.1548,
    //             "powerPlayGoals": 74,
    //             "powerPlayPoints": 306,
    //             "shorthandedGoals": 7,
    //             "shorthandedPoints": 16

    const properStats = <View style={styles.statContainer}>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.gamesPlayed}</Text>
            <Text style={styles.statText}>Games Played</Text>
            <Text style={styles.statText}>{career.gamesPlayed}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.assists}</Text>
            <Text style={styles.statText}>Assists</Text>
            <Text style={styles.statText}>{career.assists}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.points}</Text>
            <Text style={styles.statText}>Points</Text>
            <Text style={styles.statText}>{career.points}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.plusMinus}</Text>
            <Text style={styles.statText}>+/-</Text>
            <Text style={styles.statText}>{career.plusMinus}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.pim}</Text>
            <Text style={styles.statText}>PIM</Text>
            <Text style={styles.statText}>{career.pim}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.gameWinningGoals}</Text>
            <Text style={styles.statText}>Game Winning Goals</Text>
            <Text style={styles.statText}>{career.gameWinningGoals}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.otGoals}</Text>
            <Text style={styles.statText}>Overtime Goals</Text>
            <Text style={styles.statText}>{career.otGoals}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.shots}</Text>
            <Text style={styles.statText}>Shots</Text>
            <Text style={styles.statText}>{career.shots}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.shootingPctg}</Text>
            <Text style={styles.statText}>Shooting Percentage</Text>
            <Text style={styles.statText}>{career.shootingPctg}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.powerPlayGoals}</Text>
            <Text style={styles.statText}>Powerplay Goals</Text>
            <Text style={styles.statText}>{career.powerPlayGoals}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.shorthandedGoals}</Text>
            <Text style={styles.statText}>Short-handed Goals</Text>
            <Text style={styles.statText}>{career.shorthandedGoals}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.shorthandedPoints}</Text>
            <Text style={styles.statText}>Short-handed Points</Text>
            <Text style={styles.statText}>{career.shortHandedPoints}</Text>
        </View>
    </View>


    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {/* <Text style={styles.sweaterNumber}>{playerInfo.sweaterNumber}</Text> */}
                    <Image style={styles.image} source={{uri: player.headshot }}/>
                    <SvgUri style={styles.logo} uri={playerInfo.teamLogo} />
                    <View style={styles.overlay} />
                    <View style={styles.name}>
                        <View>
                            <Text style={styles.firstName}>{player.firstName.default}</Text>
                            <Text style={styles.lastName}>{player.lastName.default}</Text>
                        </View>
                        <View>
                            <Text style={styles.position}>{playerInfo.position}</Text>
                        </View>
                    </View>
                    <View style={styles.stats}>
                        <Text>Stats</Text>
                        {properStats}
                    </View>
                    <View></View>
                </ScrollView>
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
        flexDirection: "row",
        height: hp('10%'),
        fontSize: 36,
        paddingHorizontal: 40,
        justifyContent: "space-between",
        alignItems: "center",
    },
    firstName: {
        fontSize: 24,
        fontWeight: "500"
    },
    lastName: {
        fontSize: 44,
        fontWeight: "bold"
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        height: hp('48%'),
    },
    sweaterNumber: {
        fontSize: 122,
        fontWeight: "bold",
        position: "absolute",
        bottom: hp('12%'),
        right: wp('8%'),
        zIndex: 2,
        color: "white"
    },
    position: {
        fontSize: 50,
        fontWeight: "200",
    },
    statContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: wp('100%'),
    },
    stat: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    statText: {
        width: wp('30%'),
        textAlign: "center",
        fontSize: 16,
        

    }
})