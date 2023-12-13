import React from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function TeamSearch({ teamData }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearch = (text) => {
    const searchTermToUppercase = text.toUpperCase();

    const results = Object.entries(teamData).filter(
      ([abbreviation, name]) =>
        abbreviation.includes(searchTermToUppercase) ||
        name.toUpperCase().includes(searchTermToUppercase)
    );

    setSearchResults(results);
  };

  const handleOptionPress = (selectedTerm) => {
    setSearchTerm(selectedTerm);
    setSearchResults([]);
  };

  return (
    <View style={styles.wrap}>
        <View style={styles.container}>
            <TextInput
            placeholder="Search for a team..."
            value={searchTerm}
            onChangeText={(text) => {
                setSearchTerm(text);
                handleSearch(text);
            }}
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
                    <Text>
                    <Text style={styles.results}>{item[0]}</Text> — {item[1]}
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
        paddingHorizontal: 15
    },
    container: {
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "red",
        width: "100%",
        marginTop: 20,
        height: hp("10%")
    },
    results: {
        fontSize: 18,
        fontWeight: "bold"
    },
    wrap: {
        flexDirection: "column",
        height: hp("50%"),
        
    }, 
    results: {
        borderWidth: 1,
        borderColor: "yellow"
    }
})