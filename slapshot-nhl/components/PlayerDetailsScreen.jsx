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
    const [shootingPctgFixedSeason, setShootingPctgFixedSeason] = React.useState([]);
    const [shootingPctgFixedCareer, setShootingPctgFixedCareer] = React.useState([]);
    const [team, setTeam] = React.useState([]);

    const playerNumber = player.sweaterNumber < 10 ? `0${player.sweaterNumber}` : player.sweaterNumber;

    React.useEffect(() => {
        getSpecificPlayerInfo(player.id).then((data) => {
            setPlayerInfo(data);
            setThisSeason(data.featuredStats.regularSeason.subSeason);
            setCareer(data.featuredStats.regularSeason.career);
            setShootingPctgFixedSeason((data.featuredStats.regularSeason.subSeason.shootingPctg * 100).toFixed(2) + '%');
            setShootingPctgFixedCareer((data.featuredStats.regularSeason.career.shootingPctg * 100).toFixed(2) + '%');
            setTeam(data.fullTeamName.default);
        })
    }, [])
    

    const properStats = <View style={styles.statContainer}>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.gamesPlayed}</Text>
            <Text style={styles.statText}>Games Played</Text>
            <Text style={styles.statText}>{career.gamesPlayed}</Text>
        </View>
        <View style={styles.stat}>
            <Text style={styles.statText}>{thisSeason.goals}</Text>
            <Text style={styles.statText}>Goals</Text>
            <Text style={styles.statText}>{career.goals}</Text>
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
            <Text style={styles.statText}>{shootingPctgFixedSeason}</Text>
            <Text style={styles.statText}>Shooting Percentage</Text>
            <Text style={styles.statText}>{shootingPctgFixedCareer}</Text>
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
            <Text style={styles.statText}>{career.shorthandedPoints}</Text>
        </View>
    </View>


    return (
        <>
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{uri: player.headshot }}/>
                        <View style={styles.overlay} />
                        <Text style={styles.sweaterNumber}>{playerNumber}</Text>
                    </View>
                    {/* <View style={styles.teamBanner}>
                        <Text style={styles.teamName}>{ team }</Text>
                        <SvgUri style={styles.logo} uri={playerInfo.teamLogo} />
                    </View> */}
                    <View style={styles.name}>
                        <View>
                            <Text style={styles.firstName}>{player.firstName.default}</Text>
                            <Text style={styles.lastName}>{player.lastName.default}</Text>
                        </View>
                        <View>
                            <Text style={styles.position}>{playerInfo.position}</Text>
                        </View>
                    </View>
                    <View style={styles.statContainer}>
                        <View style={styles.stats}>
                            <View style={styles.label}>
                                <Text style={styles.statText}>Season</Text>
                                <Text style={styles.statText}>Stats</Text>
                                <Text style={styles.statText}>Career</Text>
                            </View>
                            <View>
                                {properStats}
                            </View>
                        </View>
                    </View>
                </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        width: wp('100%'),
        height: hp('50%'),
        resizeMode: 'contain',
        zIndex: 1,
    },
    logo: {
       width: hp('10%'),
       justifyContent: "flex-end",
    },
    teamName: {
        color: "white"
    },
    teamBanner: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp('10%'),
        backgroundColor: "#aaa",
        height: hp('5%'),
        marginBottom: hp('4%'),
    },
    crest: {
        position: "absolute",
        // top: hp('-10'),
        // left: wp('-20'),
        // width: wp("50%"),
        zIndex: 2,
        width: hp('10%'),
        heigth: hp('10%'),
    },
    name: {
        flexDirection: "row",
        height: hp('10%'),
        fontSize: 36,
        paddingHorizontal: 40,
        justifyContent: "space-between",
        alignItems: "center",
    },
    sweaterNumber: {
        fontSize: 100,
        fontWeight: "bold",
        position: "absolute",
        top: hp('32'),
        left: wp('60'),
        color: "white",
        zIndex: 2,
    },
    imageContainer: {
        paddingTop: hp('5%'),
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
    position: {
        fontSize: 50,
        fontWeight: "200",
    },
    statContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: wp('100%'),
        marginTop: hp('2%'),
    },
    stat: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 4
    },
    statText: {
        width: wp('40%'),
        textAlign: "center",
        fontSize: 14,
    },
    label: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 4,
        marginBottom: 10
    }
})