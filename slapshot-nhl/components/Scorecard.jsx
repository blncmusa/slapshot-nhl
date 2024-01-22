import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SvgUri } from "react-native-svg";

export default function ScoreCard({ game }) {

    const homeTeam = game.homeTeam
    const awayTeam = game.awayTeam
    const timeLeft = game.clock.timeRemaining === '00:00' ? 'Final' : game.clock.timeRemaining
    const date = new Date(game.gameDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const venue = game.venue.default

    return (
        <>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <View style={styles.homeTeamContainer}>
                            <View style={styles.homeTeam}>
                                <SvgUri
                                style={styles.logo}
                                    uri={homeTeam.logo}
                                />
                                <Text style={styles.abbrev}>{homeTeam.abbrev}</Text>
                            </View>
                            <Text style={styles.score}>{homeTeam.score}</Text>
                        </View>
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameInfoText}>{timeLeft}</Text>
                            <Text style={styles.gameInfoText}>{date}</Text>
                            <Text style={styles.gameInfoText}>{venue}</Text>
                        </View>
                        <View style={styles.awayTeamContainer}>
                            <Text style={styles.score}>{awayTeam.score}</Text>
                            <View style={styles.awayTeam}>
                                <SvgUri
                                    style={styles.logo}
                                    uri={awayTeam.logo}
                                />
                                <Text style={styles.abbrev}>{awayTeam.abbrev}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text>Game Info</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('20%'),
        // backgroundColor: 'blue',
        padding: 10,
        justifyContent: 'center',
        marginVertical: 20,
        alignItems: 'center',
    },
    card: {
        width: wp('100%'),
        height: hp('20%'),
        // backgroundColor: 'red',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4, // for Android,
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '90%',
    },
    footer: {
        width: wp('100%'),
        backgroundColor: 'lightgrey',
        height:('10%'),
    },
    logo: {
        width: wp('20%'),
        height: hp('10%'),
    },
    homeTeamContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    awayTeamContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeTeam: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('25%'),
        // backgroundColor: 'pink'
    },
    awayTeam: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('25%'),
        // backgroundColor: 'yellow',
    },
    abbrev: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    score: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    gameInfo: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    gameInfoText: {
        fontSize: 10,
    }
})