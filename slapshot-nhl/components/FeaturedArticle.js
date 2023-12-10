import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from '../styles/FeaturedArticleStyles'
import Carousel from 'react-native-snap-carousel'
import { featuredArticles} from '../constants/SlideData'

export default function FeaturedArticle (){
  return (
    <Carousel
      data={featuredArticles}
      loop={false}
      autoplay={false}
      renderItem={ItemCard}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100)-45}
      slideStyle={{display: 'flex', alignItems: 'center'}}
    />
  );
};

const ItemCard = ({ item }) => {
  // Access item properties here
  return (
    <View style={styles.featuredArticleContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.featuredImage}
      />
      <View style={styles.overlay} />
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.logo}>Logo</Text>
        </View>
        <Text style={styles.featuredTitle}>{item.title}</Text>
      </View>
    </View>
  );
};