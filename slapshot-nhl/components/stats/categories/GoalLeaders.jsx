import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from 'react-native-svg';

export default function GoalLeaders() {

    const [selectedYear, setSelectedYear] = React.useState('default'); 
    const [goalLeaders, setGoalLeaders] = React.useState([]);

    const navigation = useNavigation();

    const handlePlayerClick = (player) => {
        navigation.navigate('PlayerDetails', { player });
    };

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            // set the year to current year if no year is selected, otherwise set it to the selected year, however if the month is between January and October 10th, set the year to the previous year
            let year = new Date().getFullYear();
            const month = new Date().getMonth();
            if (month >= 0 && month <= 8) { // July is 6 and September is 8 in JavaScript
                year = year - 1;
            }
            const nextYear = year + 1;

            if (selectedYear) {
                let year = selectedYear
                const month = new Date().getMonth();
                if (month >= 0 && month <= 8) { // July is 6 and September is 8 in JavaScript
                    year = year - 1;
                }
                const nextYear = year + 1;
            }

            const response = await fetch(`https://api-web.nhle.com/v1/skater-stats-leaders/${year}${nextYear}/2?categories=goals&limit=10`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setGoalLeaders(data.goals);
            } catch (error) {
                console.log("Error: ", error);
            }
        };

        fetchData();
    }, [selectedYear]);

    let year = new Date().getFullYear();
    const month = new Date().getMonth();
    if (month >= 0 && month <= 8) { // July is 6 and September is 8 in JavaScript
        year = year - 1;
    }
    const NextYear = year + 1;
    let secondYear = Number(NextYear.toString().slice(-2))

    const title = <View style={styles.positionContainer}>
        <Text style={styles.title}>Goal Leaders for Season {year}/{secondYear}</Text>
    </View>

    const labels = <View style={styles.labels}>
        <Text>Rank</Text>
        <Text>Name</Text>
        <Text>Goals</Text>
    </View>

    const players = goalLeaders.map((player, index) => {

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

    
    // const generateYearOptions = () => {
    //     const currentYear = new Date().getFullYear();
    //     const startYear = 1917;
    //     const currentMonth = new Date().getMonth();
      
    //     // If the current month is before October, exclude the next season
    //     const excludeNextSeason = currentMonth < 9; // October is month index 9, right?!
       
    //     const years = [];
    //     for (let i = currentYear; i >= startYear; i--) {
    //       const season = `${i}-${i + 1}`;
    //       if (!excludeNextSeason || season !== `${currentYear}-${currentYear + 1}`) {
    //         years.push(season);
    //       }
    //     }
      
    //     return years.map((year) => (
    //       <Picker.Item key={year} label={year} value={year} />
    //     ));
    // };
    
    // const handleYearChange = (itemValue) => {
    //     setSelectedYear(itemValue);
    // };
    
    // const yearPicker = (
    //     <Picker
    //     selectedValue={selectedYear}
    //     onValueChange={handleYearChange(itemValue)}
    //     >
    //     <Picker.Item label="Default" value="default" />
    //     {generateYearOptions()}
    //     </Picker>
    //   );

    return (
        <ScrollView 
        showsVerticalScrollIndicator={false} // Set to false to hide vertical scroll bar (iOS)
        showsHorizontalScrollIndicator={false} // Set to false to hide horizontal scroll bar (Android)
            style={styles.container}>
                {/* <View>
                    <Text>Select a Year:</Text>
                    {yearPicker}
                    <Text>Goal Leaders for Season {selectedYear ? `${selectedYear}` : 'Default'}</Text>
                    {/* Render the goal leaders data as needed */}
                {/* </View> */}
                <View style={styles.playersListContainer}>
                    {title}
                    {labels}
                    {players}
                </View>
        </ScrollView>
    )

}    

const styles = StyleSheet.create({
    container: {
        paddingTop: hp("2.5%"),
        marginHorizontal: wp("8%"),
        marginBottom: hp("20%"),
        zIndex: 2,
    }, 
    playersListContainer: {
        marginBottom: hp("8%"),
    },
    title: {
        fontSize: wp("5%"),
        fontWeight: "bold",
    },
    labels: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop: 10,
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
        height: hp("10%"),
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "#F4F2F0"
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
        fontSize: 16,
        fontWeight: "600"
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