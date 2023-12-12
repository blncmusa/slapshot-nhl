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
  const [newsData, setNewsData] = React.useState([])
  const [nextPage, setNextPage] = React.useState(null);
  const [loadMorePressed, setLoadMorePressed] = React.useState(false);
  const [featuredArticles, setFeaturedArticles] = React.useState([]);

  const handleArticleClick = (article) => {
    navigation.navigate('ArticleDetails', { article })
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getNews();
      setFeaturedArticles(data.results.slice(0,4))
      setNewsData(data.results.slice(4));
      setNextPage(data.nextPage);
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchMoreData = async () => {
      if (loadMorePressed && nextPage) {
        const moreData = await getNews(nextPage);
        setNewsData((prevData) => [...prevData, ...moreData.results]);
        setNextPage(moreData.nextPage)
        setLoadMorePressed(false)
      }
    };
    fetchMoreData();
  }, [loadMorePressed]);
  
  const loadMoreArticles = () => {
    setLoadMorePressed(true)
  }

  const featuredArticlesElement = <FeaturedArticle featuredArticles={featuredArticles} />;

  const articlesElement = newsData.map((article, index) => (
    <ArticleElement key={index} article={article} />
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
          {featuredArticlesElement}

          <HorizontalSplit/>

          <Text style={styles.subtitle}>Latest News</Text>

          <View style={styles.articleContainer}>
              {/* Listed Articles */}
            <>{articlesElement}</>
            <View style={styles.footer}>
              <TouchableOpacity 
                onPress={loadMoreArticles}
                style={styles.button}
                >
                <Text>Load More</Text>
              </TouchableOpacity>
            </View>
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
    },
    button: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10
    },
    footer: {
      flex: 1,
      width: wp("100%"),
      height: hp("10%"),
      justifyContent: "center",
      alignItems: "center",
    }
})