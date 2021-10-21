import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import {connect} from "react-redux";
import {alterFeedLike} from "../redux/actions/feedAction"

import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const FeedCard = (props) => {
  const {name, title,description, images,id,liked,comments } = props.data
  const navigation = useNavigation();
  const handleOnPress = () => {};

  const handleLikeClick = () => {
    props.alterFeedLike(id, !liked)
  }

  const handleFeedClick = () => {
    navigation.navigate("FeedDetailsScreen",{
      ...props.data
    })
  }

  return (
    <TouchableOpacity elevation={5} style={styles.card}
      onPress={handleFeedClick}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require("../assets/rs200.jpg")}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text>{title}</Text>
        </View>
      </View>
      {description && <Text style={styles.description}>{description}</Text>}

      {images ? (
        <Image
          style={styles.postImage}
          source={require("../assets/rs201.jpg")}
        />
      ) : null}

      <View style={styles.icons}>
        <TouchableHighlight
          style={styles.iconDiv}
          underlayColor={"#f8f4f4"}
          onPress={handleLikeClick}
        >
          <View style={styles.iconDivView}>
            <AntDesign name="like1" size={20} color={liked ? "#1EABDC":"gray"} />
            <Text>Like</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.iconDiv}
          underlayColor={"#f8f4f4"}
          onPress={handleOnPress}
        >
          <View style={styles.iconDivView}>
            <Foundation name="comment" size={20} color="gray" />
            <Text>Comment</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.iconDiv}
          underlayColor={"#f8f4f4"}
          onPress={handleOnPress}
        >
          <View style={styles.iconDivView}>
            <FontAwesome name="share" size={20} color="gray" />
            <Text>Share</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.iconDiv}
          underlayColor="#f8f4f4"
          onPress={handleOnPress}
        >
          <View style={styles.iconDivView}>
            <FontAwesome name="send" size={20} color="gray" />
            <Text>Send</Text>
          </View>
        </TouchableHighlight>
      </View>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = {
  alterFeedLike
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(FeedCard)

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 0,
    paddingRight: 15,
    paddingLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    paddingLeft: 15,
    marginBottom: 5,
  },
  postImage: {
    width: Dimensions.get("window").width,
    height: 250,
    marginTop: 5,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconDiv: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  iconDivView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
