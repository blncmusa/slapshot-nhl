import React from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import TeamSearchResults from "../components/stats/TeamSearchResults";

export default function StatsScreen(){
    return(
        <>
        <SafeAreaView>
            <TeamSearchResults/>
        </SafeAreaView>
        </>
    )
}