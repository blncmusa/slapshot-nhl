import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import HorizontalSplit from "../components/HorizontalSplit";

import { SafeAreaView, View, Text, ScrollView, StyleSheet, Image } from "react-native";

export default function HomeScreen(){
    
      const featuredArticle = {
        title: 'Featured Article Title',
        image: 'https://firstsportz.com/wp-content/uploads/2023/04/Adobe_Express_20230409_1200240_1.jpg',
        textOnImage: 'Featured',
      };
    
      const articles = [
        {
          title: 'Article 1',
          image: 'https://cdn.nhlpa.com/img/assets/nhlpa.com/gallery/af2c95e8-f5c2-495c-96b6-244a46c44825/Feature-Rust.jpg',
          description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
          id: 1
        },
        {
          title: 'Article 2',
          image: 'https://firstsportz.com/wp-content/uploads/2023/04/Adobe_Express_20230409_1200240_1.jpg',
          description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
          id: 2
        },
        {
          title: 'Article 3',
          image: 'https://cdn.nhlpa.com/img/assets/nhlpa.com/gallery/af2c95e8-f5c2-495c-96b6-244a46c44825/Feature-Rust.jpg',
          description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
          id: 3
        },
        {
          title: 'Article 4',
          image: 'https://firstsportz.com/wp-content/uploads/2023/04/Adobe_Express_20230409_1200240_1.jpg',
          description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
          id: 4
        },
        {
          title: 'Article 5',
          image: 'https://cdn.nhlpa.com/img/assets/nhlpa.com/gallery/af2c95e8-f5c2-495c-96b6-244a46c44825/Feature-Rust.jpg',
          description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
          id: 5
        },
        {
          title: 'Article 6',
          image: 'https://firstsportz.com/wp-content/uploads/2023/04/Adobe_Express_20230409_1200240_1.jpg',
          description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
          id: 6
        },
      ];

      const articlesElement = articles.map(article => {
        return <View style={styles.articleElementContainer} key={article.id.toString()}>
                <Image
                    source={{ uri: article.image}}
                    style={styles.articleImage}
                    />
                <View style={styles.articleTextContainer}>
                    <Text style={styles.articleTitle}>{article.title}</Text>
                    <Text style={styles.articleDescription}>{article.description}</Text>
                </View>
            </View>
      }) 

    return(
        <>
            <ScrollView>
                {/* Featured Article */}
                <View style={styles.featuredArticleContainer}>
                    <Image
                    source={{ uri: featuredArticle.image}}
                    style={styles.featuredImage}
                    />
                    <Text style={styles.textOnImage}>{featuredArticle.textOnImage}</Text>
                    <Text style={styles.featuredTitle}>{featuredArticle.title}</Text>
                </View>

                <HorizontalSplit/>

                <View style={styles.articleContainer}>
                    {/* Listed Articles */}
                    <>{articlesElement}</>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    featuredArticleContainer: {

    },
    featuredImage: {
        width: wp("100%"),
        height: hp("25%"),
        resizeMode: "center"
    },
    textOnImage: {
        color: "#FFFFFF",
        font: "700",
        fontSize: 12,
        padding: 10,
        backgroundColor: "black",
        fontWeight: "800"
    },
    featuredTitle: {
        fontSize: 37,
        margin: 20,
        fontWeight: "900",
        textAlign: "auto"
    },
    articleContainer: {
        width: wp("70%")
    },
    articleElementContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        margin: 10,
    },
    articleImage: {
        width: wp("28%"),
        height: hp("12%"),
        resizeMode: "cover",
        margin: 5,
    },
    articleTextContainer: {
        marginRight: 15,
        marginLeft: 10
    },
    articleTitle: {
        fontWeight: "800",

    }, 
    articleDescription: {
        fontSize: 12
    }
})