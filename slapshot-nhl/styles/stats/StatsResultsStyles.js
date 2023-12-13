// ArticleStyles.js
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    statsResultsContainer: {
        width: wp("100%"),
        height: hp("20%"),
        // borderWidth: 1,
        // borderColor: "red",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"
    },
    playerImage: {
        width: wp("30%"),
        height: hp("15%"),
        // borderWidth: 1,
        // borderColor: "blue"
    }
})

export default styles