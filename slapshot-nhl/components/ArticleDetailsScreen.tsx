import { TabRouter, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ArticleDetailsScreen({ route }){

    const { article } = route.params;

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const paragraphs = article.content.split(". ")
    const formattedParagraphs = paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <Text>{paragraph}</Text>
          <Text>.{'\n\n'}</Text>
        </React.Fragment>
      ));

    return(
        <>
            <SafeAreaView>
                <ScrollView>
                    <Image
                    source={{ uri: article.image_url }}
                    style={styles.image}
                    />
                    <View style={styles.articleHeader}>
                        <Text style={styles.title}>{article.title}</Text>
                    </View>
                    <View style={styles.articleDescription}>
                        <Text style={styles.description}>{article.description}</Text>
                        <Text style={styles.content}>{formattedParagraphs}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: hp("100%")
    },
    image: {
        width: wp("100%"),
        height: hp("30%")
    },
    articleHeader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        marginVertical: 15,
        marginHorizontal: 5
    },
    articleDescription: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    description: {
        marginVertical: 10,
        fontWeight: "500",
        fontSize: 20,
        marginBottom: 30
    },
    content: {
        fontWeight: "200",
        fontSize: 18
    }
})