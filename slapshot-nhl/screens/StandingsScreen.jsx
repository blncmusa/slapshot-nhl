import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import getStanding from '../components/util/GetStanding';
import { SvgUri } from "react-native-svg";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function StandingsScreen() {
  const [divisions, setDivisions] = useState(null);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const standings = await getStanding();
        setDivisions(standings);
      } catch (error) {
        console.error("Error fetching standings:", error);
      }
    };

    fetchStandings();
  }, []);

  const labels = <View style={styles.labels}>
    
    <View style={styles.divisionRowInfo}>
        <Text style={styles.label}>Team</Text>
    </View>
    <View style={styles.labelDivisionRowStats}>
        <Text style={styles.statGames}>GP</Text>
        <Text style={styles.statWins}>W</Text>
        <Text style={styles.statLoss}>L</Text>
        <Text style={styles.statOver}>OTL</Text>
        <Text style={styles.statPoints}>PTS</Text>
    </View>
  </View>

  return (
    <>
      <ScrollView>
        {divisions &&
          Object.entries(divisions).map(([divisionName, teams]) => (
            <View key={divisionName} style={styles.divisionContainer}>
              <Text style={styles.divisionName}>{divisionName} Division</Text>
              { labels }
              {teams.map((team) => (
                <View key={team.teamName.default} style={styles.divisionRow}>
                    <View style={styles.divisionRowInfo}>
                        <SvgUri style={styles.logo} uri={team.teamLogo} />
                        <Text>{team.teamName.default}</Text>
                    </View>
                    <View style={styles.divisionRowStats}>
                        <Text>{team.gamesPlayed}</Text>
                        <Text>{team.wins}</Text>
                        <Text>{team.losses}</Text>
                        <Text>{team.otLosses}</Text>
                        <Text>{team.points}</Text>
                    </View>
                </View>
              ))}
            </View>
          ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    divisionName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    divisionContainer: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    divisionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    divisionRowInfo: {
        flexDirection: "row",
        alignItems: "center",
        width: wp("50%")
    },
    divisionRowStats: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: wp("30%")
    },
    labelDivisionRowStats: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: wp("32%"),
        gap: 3
    },
    labels: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 0,
        marginVertical: 10
    },
    statWins: {
        paddingLeft: 6,
        fontSize: 10,
        fontWeight: "bold"
    },
    statLoss: {
        marginLeft: 6,
        fontSize: 10,
        fontWeight: "bold"

    },
    statOver: {
        marginLeft: 6,
        fontSize: 10,
        fontWeight: "bold"
    },
    statPoints: {
        fontSize: 10,
        fontWeight: "bold"
    },
    statGames: {
        paddingLeft: 6,
        fontSize: 10,
        fontWeight: "bold"
    },
});