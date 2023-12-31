import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from 'react-native-svg';

export default function PointsLeaders() {

    const [pointStatLeaders, setPointStatLeaders] = React.useState([]);

    const navigation = useNavigation();

    const handlePlayerClick = (player) => {
        navigation.navigate('PlayerDetails', { player });
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const year = new Date().getFullYear();
            const nextYear = year + 1;
            const response = await fetch(`https://api-web.nhle.com/v1/skater-stats-leaders/${year}${nextYear}/2?categories=points&limit=10`);
            const data = await response.json();
            setPointStatLeaders(data.points)
        }
        fetchData();
    }, [])

    console.log(pointStatLeaders)

    const labels = <View style={styles.labels}>
        <Text>Rank</Text>
        <Text>Name</Text>
        <Text>Points</Text>
    </View>

    const players = pointStatLeaders.map((player, index) => {

        console.log(player.teamLogo)

        return (
            <TouchableOpacity 
            onPress={() => handlePlayerClick(player)}
            activeOpacity={0.6}
            key={player.id}
            style={styles.touchable}
            >
                <View style={styles.playerRow}>
                    <Text>{index + 1}</Text>
                    <View style={styles.playerInfo}>
                        <Image
                            source={{ uri: player.headshot }}
                            style={styles.playerImage}
                        />
                        <View>
                            <Text style={styles.playerName}>{player.firstName.default} {player.lastName.default}</Text>
                            <View style={styles.teamInfoContainer}>
                                <Text>——</Text>
                                <SvgUri uri={player.teamLogo} style={styles.teamLogo}/>
                                <Text>{player.teamName.default}</Text>
                            </View>
                        </View>
                    </View>
                    <Text>{player.value}</Text>
                </View>
            </TouchableOpacity>
        )
    })

    return (
        <ScrollView 
        showsVerticalScrollIndicator={false} // Set to false to hide vertical scroll bar (iOS)
        showsHorizontalScrollIndicator={false} // Set to false to hide horizontal scroll bar (Android)
            style={styles.container}>
                {labels}
                {players}
        </ScrollView>
    )

}    

const styles = StyleSheet.create({
    container: {
        marginTop: hp("5%"),
        marginHorizontal: wp("8%"),
        marginBottom: hp("20%"),
        zIndex: 2,
        marginTop: hp("-0.5%")
    }, 
    labels: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop: 20,
    },
    tabContainer: {
        height: hp("100%"),
    },
    teamLogo: {
        width: wp("5%"),
        height: hp("2.5%"),
    },
    teamInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginTop: 5
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
        height: hp("15%"),
        borderWidth: 2,
        borderColor: "black",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "white"
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
    },
    touchable: {

    }
})