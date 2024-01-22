import React from "react";

import { SafeAreaView, View, Text, ScrollView } from "react-native";
import getScores from "../components/util/GetScores";
import ScoreCard from "../components/Scorecard";

export default function HomeScreen(){

    const [games, setGames] = React.useState([])

    React.useEffect(() => {
        const fetchScores = async () => {
            const scores = await getScores()
            setGames(scores.games)
        }
        fetchScores()
    }, [])


    const scoresElement = games ? (
        games.map((game, index) => (
            <ScoreCard key={index} game={game}/>
        ))
    ) : null;
    
    return(
        <>
            <ScrollView>
                <Text>Yesterday's Scores:</Text>
                {scoresElement}
            </ScrollView>
        </>
    )
}