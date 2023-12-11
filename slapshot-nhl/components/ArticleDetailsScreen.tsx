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

    return(
        <>
            <SafeAreaView>
                <ScrollView>
                    <Image
                    source={{ uri: article.image_url }}
                    style={styles.image}
                    />
                    <View>
                        <Text>{article.title}</Text>
                        <TouchableOpacity
                            onPress={handleGoBack}
                        >
                            <Text>Back</Text>
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
    }
})