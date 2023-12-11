import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import ArticleElement from '../components/ArticleElement'
import FeaturedArticle from '../components/FeaturedArticle' 
import getNews from "../components/util/GetNews";

// components
import HorizontalSplit from "../components/HorizontalSplit";
import { FontAwesome5 } from '@expo/vector-icons';

import { SafeAreaView, View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function HomeScreen(){

  const navigation = useNavigation()

  const handleArticleClick = (article) => {
    navigation.navigate('ArticleDetails', { article })
  }

  const [newsData, setNewsData] = React.useState([])
  const [filteredNews, setFilteredNews] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getNews();
      // const filteredData = data.filter(article => article.image !== null);
      setNewsData(data);
    };
    fetchData();
  }, []);

  const featuredArticles =
    {
      title: "Featured Article 1",
      image: "https://firstsportz.com/wp-content/uploads/2023/04/Adobe_Express_20230409_1200240_1.jpg",
      textOnImage: "Featured",
      description: "This solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result.",
    }

  const articlesElement = newsData.map(article => (
    <ArticleElement key={article.article_id} article={article} />
  ));

  function formatDate(date) {
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      return new Date(date).toLocaleDateString('en-US', options);
  }

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

    return(
      <>
      <ScrollView style={styles.screenContainer}>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Top Headlines</Text>
            <Text style={styles.date}>{formattedDate}</Text>
          </View>

          {/* Featured Article */}
          <FeaturedArticle/>

          <HorizontalSplit/>

          <Text style={styles.subtitle}>Latest News</Text>

          <View style={styles.articleContainer}>
              {/* Listed Articles */}
             <>{articlesElement}</>
          </View> 
      </ScrollView>
    </>
    )
}

const styles = StyleSheet.create({
    title: {
      marginHorizontal: 20,
      fontSize: 18,
      fontWeight: "700",
    },
    subtitle: {
      marginHorizontal: 20,
      fontSize: 18,
      fontWeight: "700",
      marginVertical: 5
    },
    headerContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 15,
      marginBottom: 5,
      justifyContent: "space-between",
      width: wp("95")
    },
    date: {
      color: "grey"
    }
})