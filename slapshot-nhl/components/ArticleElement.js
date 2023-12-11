import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/ArticleElementStyles"; 

export default function ArticleElement({ article }) {
  
  const navigation = useNavigation();

  const handleArticleClick = () => {
    navigation.navigate('ArticleDetails', { article });
  };

  return (
    <TouchableOpacity 
        onPress={handleArticleClick}
        activeOpacity={0.6}
        >
      <View style={styles.container}>
        <Image
          source={{ uri: article.image_url }}
          style={styles.articleImage}
        />
        <View style={styles.articleStuff}>
          <View style={styles.articleTextContainer}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleDescription} numberOfLines={3}>{article.description}</Text>
            {/* <View style={styles.infoHeader}>
                <Text style={styles.articleAuthor}>{article.author}</Text>
                <Text style={styles.logo}>{article.source_id}</Text>
            </View> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
