import React from 'react'

import { View, Text, SafeAreaView, Image } from "react-native";
import styles from '../../styles/stats/StatsResultsStyles';
import getRoster from '../util/GetRoster';
import { ScrollView } from 'react-native-gesture-handler';

export default function StatsResults(){

    const [team, setTeam] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRoster()
                const allPlayers = [
                    ...data.defensemen,
                    ...data.forwards,
                    ...data.goalies
                ]
                setTeam(allPlayers)
            } catch(error){
                console.error(error)
            }
        }
        fetchData()
    }, [])


    const playersElement = team.map((player) => {
        return (
            <View key={player.id} style={styles.statsResultsContainer}>
                <View>
                    <Image
                        source={{ uri: player.headshot }}
                        style={styles.playerImage}
                    />
                </View>
                <View style={styles.playerName}>
                    <Text>{ player.firstName.default }</Text>
                    <Text>{ player.lastName.default }</Text>
                </View>
            </View>
        )
    })


    return(
        <>
        <SafeAreaView>
            <ScrollView>
                { playersElement }
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

