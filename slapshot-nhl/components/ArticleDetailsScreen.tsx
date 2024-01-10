import { TabRouter, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, Linking } from "react-native";
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

    const openOriginalArticle = () => {
        const originalArticle = article.link

        Linking.openURL(originalArticle).catch((error) => {
            console.error('Error opening article link: ', error)
        })
    }

    const source = article.source_id.toUpperCase()

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

                    <View style={styles.footer}>
                        <TouchableOpacity
                            onPress={openOriginalArticle}
                        >
                            <Text>Read Article on {source}</Text>
                        </TouchableOpacity>
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
        fontSize: 50,
        fontWeight: "800",
        marginVertical: 15,
        marginHorizontal: 5
    },
    articleDescription: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    description: {
        marginVertical: 10,
        fontWeight: "500",
        fontSize: 15,
        marginBottom: 30
    },
    content: {
        fontWeight: "200",
        fontSize: 18
    },
    footer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})