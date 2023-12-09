import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import ArticleElement from '../components/ArticleElement'
import FeaturedArticle from '../components/FeaturedArticle' 

// components
import HorizontalSplit from "../components/HorizontalSplit";
import { FontAwesome5 } from '@expo/vector-icons';

import { SafeAreaView, View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function HomeScreen(){

  const navigation = useNavigation()

  const handleArticleClick = (article) => {
    navigation.navigate('ArticleDetails', { article })
  }

  const featuredArticles =
    {
      title: "Featured Article 1",
      image: "https://firstsportz.com/wp-content/uploads/2023/04/Adobe_Express_20230409_1200240_1.jpg",
      textOnImage: "Featured",
      description: "This solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
    }
    
  const articles = [
    {
      title: 'Article 1: Hockey Man Wins First Ever Monkey Prize',
      date: 'March 5th, 2020',
      image: 'https://cdn.nhlpa.com/img/assets/nhlpa.com/gallery/af2c95e8-f5c2-495c-96b6-244a46c44825/Feature-Rust.jpg',
      description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
      id: 1,
      author: "Author: Jane Doe"
    },
    {
      title: 'Article 2: Rogue Pizza Ruins Playoffs',
      image: 'https://firstsportz.com/wp-content/uploads/2023/04/Adobe_Express_20230409_1200240_1.jpg',
      description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
      id: 2,
      author: "Author: Jane Doe"
    },
    {
      title: 'Article 3: Lost Puck Nowhere to Be Found',
      image: 'https://cdn.nhlpa.com/img/assets/nhlpa.com/gallery/af2c95e8-f5c2-495c-96b6-244a46c44825/Feature-Rust.jpg',
      description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
      id: 3,
      author: "Author: Jane Doe"
    },
    {
      title: 'Article 4',
      image: 'https://firstsportz.com/wp-content/uploads/2023/04/Adobe_Express_20230409_1200240_1.jpg',
      description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
      id: 4,
      author: "Author: Jane Doe"
    },
    {
      title: 'Article 5',
      image: 'https://cdn.nhlpa.com/img/assets/nhlpa.com/gallery/af2c95e8-f5c2-495c-96b6-244a46c44825/Feature-Rust.jpg',
      description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
      id: 5,
      author: "Author: Jane Doe"
    },
    {
      title: 'Article 6',
      image: 'https://firstsportz.com/wp-content/uploads/2023/04/Adobe_Express_20230409_1200240_1.jpg',
      description: "this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
      id: 6,
      author: "Author: Jane Doe"
    },
  ];

    const articlesElement = articles.map(article => (
      <ArticleElement key={article.id.toString()} article={article} />
    ));


    return(
      <>
      <ScrollView style={styles.screenContainer}>

          {/* Featured Article */}
          <FeaturedArticle/>

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
    
})