import React from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function TeamSearch({ teamData, searchTerm, onSearchTermChange }) {
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearch = (text) => {
    const searchTermToUppercase = text.toUpperCase();

    const results = Object.entries(teamData).filter(
      ([abbreviation, name]) =>
        abbreviation.includes(searchTermToUppercase) ||
        name.toUpperCase().includes(searchTermToUppercase)
    );
    setSearchResults(results);
    onSearchTermChange(text)
  };

  const handleOptionPress = (selectedTerm) => {
    onSearchTermChange(selectedTerm);
    setSearchResults([]);
  };

  return (
    <View style={[styles.wrap, { height: searchResults.length > 0 ? hp("40%") : 0 }]}>
        <View style={styles.container}>
            <TextInput
            placeholder="Search for a team..."
            value={searchTerm}
            onChangeText={(text) => {handleSearch(text)}}
            style={styles.textInput}
            />  
        </View>  

        <View style={styles.results}>
            <FlatList
                data={searchResults}
                keyExtractor={(item) => item[0]}
                renderItem={({ item }) => (
                <TouchableOpacity 
                    onPress={() => handleOptionPress(item[0])}
                    >
                    <Text style={[styles.resultsText, searchResults.length > 0 && styles.resultsTextWithBackground]}>
                        <Text style={styles.abbreviationText}>{item[0]}</Text> —{" "}
                        <Text style={styles.fullText}>{item[1]}</Text>
                    </Text>
                </TouchableOpacity>
                )}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "white",
        height: hp("5%"),
        paddingHorizontal: 20,
        borderColor: "#aaaaaa",
        borderWidth: 1
    },
    container: {
        flexDirection: "column",
        // borderWidth: 1,
        // borderColor: "red",
        width: "100%",
        height: hp("5%")
    },
    results: {
        fontSize: 18,
        fontWeight: "bold"
    },
    wrap: {
        flexDirection: "column",
        height: hp("40%"),
        zIndex: 1, // Adjust as needed
        position: "absolute",
        width: "100%",
        paddingBottom: 10
    }, 
    results: {
        // borderWidth: 1,
        // borderColor: "yellow",
        // paddingHorizontal: 20
    },
    resultsText: {
        fontSize: 18,
        paddingVertical: 10,
        // borderWidth: 1,
        // borderColor: "black",
        backgroundColor: "white",
        paddingHorizontal: 25
    },
    resultsTextWithBackground: {
        backgroundColor: "white"
    },
    abbreviationText: {
        fontWeight: "bold"
    }

})