import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from '../styles/FeaturedArticleStyles'
import Carousel from 'react-native-snap-carousel'

export default function FeaturedArticle ({ featuredArticles }){
  return (
    <Carousel
      data={featuredArticles}
      loop={false}
      autoplay={false}
      renderItem={({ item }) => <ItemCard article={item}/>}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100)-45}
      slideStyle={{display: 'flex', alignItems: 'center'}}
    />
  );
};

const ItemCard = ({ article }) => {
  return (
    <View style={styles.featuredArticleContainer}>
      <Image
        source={{ uri: article.image_url }}
        style={styles.featuredImage}
      />
      <View style={styles.overlay} />
      <View style={styles.headingContainer}>
        <Text style={styles.featuredTitle}>{article.title}</Text>
      </View>
    </View>
  );
};