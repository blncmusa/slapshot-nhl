// ArticleStyles.js
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  articleImage: {
    width: wp("30%"),
    height: hp("15%"),
    resizeMode: "cover",
    margin: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 10,
    marginVertical: 10,
    borderWidth:0.5,
    borderColor: "black"
  },
  infoHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginRight: 20,
    paddingRight: 10,
    marginTop: 20
  },
  articleTextContainer: {
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  articleTitle: {
    fontWeight: "800",
    marginTop: 5
  },
  articleDescription: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: "200"
  },
  articleAuthor: {
    fontSize: 10
  },
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 2,
    width: wp("100%"),
    // backgroundColor: "white",
    // borderBottomRightRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderTopLeftRadius: 20,
    // alignItems: "center",
    // shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 1,
    //   },
    //   shadowOpacity: 0.2,
    //   shadowRadius: 5,
    //   elevation: 5, // for Android
  },
  logo: {
    fontSize: 10,
  },
  date: {
    fontSize: 10,
  },
  articleStuff: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 5 
  },
});

export default styles;
