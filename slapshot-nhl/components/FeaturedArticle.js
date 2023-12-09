import React from 'react';
import { View, Text, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from '../styles/FeaturedArticleStyles';

const FeaturedArticle = ({ article }) => {
  return (
    <View style={styles.featuredArticleContainer}>
      <Image
        source={{ uri: article.image }}
        style={styles.featuredImage}
      />
      <Text style={styles.textOnImage}>{article.textOnImage}</Text>
      <Text style={styles.featuredTitle}>{article.title}</Text>
      <Text style={styles.featuredDescription}>
        {article.description.length > 170
          ? `${article.description.substring(0, 170)}... Read More`
          : article.description}
      </Text>
    </View>
  );
};

export default FeaturedArticle;
