import React from 'react'

import { View, Text, SafeAreaView, Image } from "react-native";
import styles from '../../styles/stats/StatsResultsStyles';
import getRoster from '../util/GetRoster';
import { ScrollView } from 'react-native-gesture-handler';
import TeamSearch from "../../components/stats/TeamSearch";
import teamData from "../../constants/TeamAbbreviations";
import PlayersData from './PlayersElement';

export default function StatsResults() {
    const [team, setTeam] = React.useState([]);

    const [forwards, setForwards] = React.useState([]);
    const [defensemen, setDefensemen] = React.useState([]);
    const [goalies, setGoalies] = React.useState([]);



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
            setForwards(data.forwards);
            setDefensemen(data.defensemen);
            setGoalies(data.goalies);
            setTeam(data);
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

    // pass down team to PlayersElement and then map over it to get the players data    

  
    return (
      <>
        <SafeAreaView>
          <TeamSearch
            teamData={teamData}
            onSearchTermChange={handleSearchTermChange}
            searchTerm={selectedTeam}
          />
          <ScrollView>
                <PlayersData forwards={forwards} defensemen={defensemen} goalies={goalies} />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }