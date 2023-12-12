import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    featuredArticleContainer: {
      backgroundColor: "white",
      marginHorizontal: 20,
      marginTop: 15,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      marginBottom: 25,
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5, // for Android,
    },
    featuredImage: {
        width: wp("90%"),
        height: hp("25%"),
        resizeMode: "cover",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.40)', // Adjust the opacity as needed
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    featuredTitle: {
        fontSize: 20,
        fontWeight: "900",
        textAlign: "auto",
        color: "white",
    },
    headingContainer: {
        position: "absolute",
        marginHorizontal: 25,
        bottom: 15
    },
    logo: {
        color: "white"
    }
})

export default styles;
