// ArticleStyles.js
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  articleImage: {
    width: wp("35%"),
    height: hp("20%"),
    resizeMode: "cover",
    margin: 5,
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    marginLeft: 20,
    marginVertical: 10,
    // borderWidth:0.5,
    // borderColor: "black"
  },
  infoHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    paddingRight: 10,
    marginTop: 20,
    width: wp("50")
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
    justifyContent: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 5 
  },
  article_cta: {
    fontSize: 10,
    borderWidth: 1,
    padding: 2,
    paddingHorizontal: 5
  }
});

export default styles;
