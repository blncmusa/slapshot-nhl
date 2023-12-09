import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    featuredArticleContainer: {
      backgroundColor: "white",
      marginHorizontal: 20,
      marginTop: 15,
      paddingBottom: 20,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 40,
      elevation: 5, // for Android,
    },
    featuredImage: {
        width: wp("90%"),
        height: hp("25%"),
        resizeMode: "cover",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    textOnImage: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 12,
        padding: 10,
        backgroundColor: "black"
    },
    featuredTitle: {
        fontSize: 30,
        marginHorizontal: 25,
        marginVertical: 15,
        fontWeight: "900",
        textAlign: "auto"
    },
    featuredDescription: {
      marginHorizontal: 25,
      marginVertical: 10,
      fontWeight: "200"
    }
})

export default styles;
