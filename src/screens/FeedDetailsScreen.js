import React, { useState, useEffect } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
    TextInput,
    ScrollView
} from "react-native";
import { connect } from "react-redux";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { alterFeedLike, addFeedComment } from "../redux/actions/feedAction";

import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

const FeedDetailsScreen = (props) => {
    const [commentText, setCommentText] = useState("");
    const [feedData, setFeedData] = useState({
        id: "",
        name: "",
        title: "",
        description: "",
        images: [],
        liked: false,
        comments: []
    })

    const { navigation, route } = props;

    useEffect(() => {
        const { id, name,title, description, images, liked, comments } = route.params;
        setFeedData((prevState) => ({
            ...prevState,
            id: id,
            title : title,
            name: name,
            description: description,
            images: images,
            liked: liked,
            comments: comments
        }))
    }, [])

    // useEffect(() => {
    //     const feedData = props.feedList.filter((item) => item.id===id);
    //     if(feedData.length===1){
    //         setFeedData((prevState) => ({
    //             ...prevState,
    //             comments : feedData.comments
    //         }))
    //     }
    // })

    const handleOnPress = () => { };

    const handleLikeClick = () => {
        props.alterFeedLike(feedData.id, !liked)
    }

    const handleChangeText = (val) => {
        setCommentText(val)
    }

    const handlePostClick = () => {
        props.addFeedComment(feedData.id, commentText);
        setFeedData((prevState) => ({
            ...prevState,
            comments : [commentText, ...prevState.comments]
        }))
        setCommentText("")
    }

    // console.log("In field details",feedData)

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.topHeader}>
                <AntDesign name="arrowleft"
                    size={30}
                    color="gray"
                    onPress={() => navigation.goBack()} />
                <FontAwesome name="ellipsis-v"
                    size={20}
                    color="gray" />
            </View>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Image style={styles.profileImage}
                        source={require("../assets/rs200.jpg")}
                    />
                    <View>
                        <Text style={styles.name}>{feedData.name}</Text>
                        <Text>{feedData.title}</Text>
                    </View>
                </View>
                <Text>{feedData.description && <Text style={styles.description}>{feedData.description}</Text>}</Text>

                {feedData.images ? (
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
                            <AntDesign name="like1" size={20} color={feedData.liked ? "#1EABDC" : "gray"} />
                            <Text>Like</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.iconDiv}
                        underlayColor={"#f8f4f4"}
                        onPress={handleOnPress}>
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
            </View>
            <View style={styles.footer}>
                <Image source={require("../assets/rs200.jpg")}
                    style={styles.footerImage} />
                <TextInput style={styles.commentInput}
                    placeholder="Leave your thoughts here"
                    value={commentText}
                    onChangeText={(val) => handleChangeText(val)} />
                <TouchableOpacity style={styles.postComment}
                    onPress={handlePostClick}>
                    <Text style={styles.name}>@</Text>
                    <Text style={styles.name}>Post</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 150, alignItems: 'flex-end', marginRight: 20 }}>
                <ScrollView>
                    {feedData?.comments?.map((item) => {
                        return (
                            <Text style={styles.comment}>{item}</Text>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

const mapDispatchToProps = {
    alterFeedLike,
    addFeedComment
}

const mapStateToProps = (state) => {
    const { feedList } = state.feedReducer;
    return {
        feedList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedDetailsScreen);

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
    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 20,
        height: 55,
        backgroundColor: 'white'
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
    footer: {
        width: wp("100%"),
        position: 'absolute',
        bottom: 0,
        height: 60,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20
    },
    footerImage: {
        height: 28,
        width: 28,
        borderRadius: 14
    },
    postComment: {
        flexDirection: 'row'
    },
    comment: {
        padding: 15,
        // width : wp("50%"),
        backgroundColor: "lightgray",
        borderRadius: 10,
        marginTop: 10
    }
});
