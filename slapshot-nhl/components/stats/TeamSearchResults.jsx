import React from 'react'

import { View, Text, SafeAreaView, Image } from "react-native";
import styles from '../../styles/stats/StatsResultsStyles';
import getRoster from '../util/GetRoster';
import { ScrollView } from 'react-native-gesture-handler';
import TeamSearch from "../../components/stats/TeamSearch";
import teamData from "../../constants/TeamAbbreviations";

export default function StatsResults() {
    const [team, setTeam] = React.useState([]);

    // Please, God! I'm so tired
    const [selectedTeam, setSelectedTeam] = React.useState('');
    const [validSelectedTeam, setValidSelectedTeam] = React.useState(null);
  
    // Function to check if selectedTeam is in teamData, then return the key
    const findTeamKey = (teamAbbreviation) => {
      const teamKey = Object.keys(teamData).find(
        (key) => key.toUpperCase() === teamAbbreviation.toUpperCase()
      );
      return teamKey || null;
    };
  
    React.useEffect(() => {
      // Check if selectedTeam is in teamData
      const teamKey = findTeamKey(selectedTeam);
  
      // If found, update the validSelectedTeam state
      if (teamKey) {
        setValidSelectedTeam(teamKey);
      } else {
        // If not found, reset the team and clear the validSelectedTeam
        setTeam([]);
        setValidSelectedTeam(null);
      }
    }, [selectedTeam, teamData]);
  
    React.useEffect(() => {
      // Check if validSelectedTeam is set before fetching data
      if (validSelectedTeam) {
        const fetchData = async () => {
          try {
            const data = await getRoster(validSelectedTeam);
            const allPlayers = [
              ...data.defensemen,
              ...data.forwards,
              ...data.goalies
            ];
            setTeam(allPlayers);
          } catch (error) {
            console.error(error);
          }
        };
  
        fetchData();
      }
    }, [validSelectedTeam]);
  
    const handleSearchTermChange = (newTerm) => {
      setSelectedTeam(newTerm);
    };
  
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
            <Text>{player.firstName.default}</Text>
            <Text>{player.lastName.default}</Text>
          </View>
        </View>
      );
    });
  
    return (
      <>
        <SafeAreaView>
          <TeamSearch
            teamData={teamData}
            onSearchTermChange={handleSearchTermChange}
            searchTerm={selectedTeam}
          />
          <ScrollView>
            {playersElement}
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }