import React from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import TeamSearchResults from "../components/stats/TeamSearchResults";
import TeamSearch from "../components/stats/TeamSearch";
import teamData from "../constants/TeamAbbreviations";

export default function StatsScreen(){
    return(
        <>
        <SafeAreaView>
            <TeamSearch teamData={teamData}/>
            {/* <TeamSearchResults/> */}
        </SafeAreaView>
        </>
    )
}