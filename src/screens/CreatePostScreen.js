import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet,TextInput,  Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign"
import {addFeedData} from "../redux/actions/feedAction"
import {connect} from "react-redux"
import uuid from "react-native-uuid";

const CreatePostScreen  = (props) => {
  const [postData, setPostData] = useState({
    title : '',
    description : ""
  });

  useEffect(() => {
    setPostData({
      title : '',
      description : ""
    })
  },[])

  const handleChangeData = (key, value) => {
    setPostData((prevState) => ({
      ...prevState,
      [key] : value
    }))
  }

  const handlePostClick = () => {
      const feedData = {
        id : uuid.v4(),
        name : "Ashwin Ghagre",
        title : postData.title,
        description : postData.description,
        images : [],
        comments : [],
        liked: false
      };
      props.addFeedData(feedData);
      setPostData({
        title : "",
        description : ""
      })
      props.navigation.navigate("Home")
  }

  const handleCancel = () => {
    props.navigation.navigate("Home")
  }

  return  (
    <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="close" size={20} color="gray" onPress={handleCancel}/>
          <Text style={styles.heading}>Share Post</Text>
          <TouchableOpacity style={styles.postButton}
            onPress={handlePostClick}>
            <Text style={styles.post}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Image source={require("../assets/rs200.jpg")}
            style={styles.profile} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Ashwin Ghagre</Text>
            <TouchableOpacity style={styles.anyone}>
              <Icon name="earth" size={15} />
              <Text style={styles.name}>Anyone</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <TextInput placeholder="What do you want to talk about?"
              value={postData.title} 
              onChangeText={(val) => handleChangeData("title", val)}/>
          <TextInput placeholder="Add description"
              value={postData.description} 
              multiline={true} 
              onChangeText={(val) => handleChangeData("description",val)} />
        </View>
    </View>
  )
}

const mapDispatchToProps = {
  addFeedData
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostScreen);

const styles= StyleSheet.create({
  container : {
    flex :1,
    backgroundColor : 'white'
  },
  header : {
    flexDirection : 'row',
    borderBottomWidth : 1,
    borderBottomColor : 'lightgray',
    height : 50,
    backgroundColor : "white",
    elevation : 1,
    alignItems  :'center',
    justifyContent:'space-evenly'
  },
  heading : {
    fontSize : 18,
    fontWeight : "600",
    color  :'black',
    paddingRight :160,
  },
  postButton : {
      paddingRight:20
  },
  post: {
    fontSize : 14,
    fontWeight : '500'
  },
  body : {
    flexDirection : 'row',
    marginTop : 15,
    marginLeft : 15
  },
  profile : {
    height : 50,
    width : 50,
    borderRadius : 25
  },
  anyone : {
    flexDirection : 'row',
    height : 22,
    width : 100,
    borderRadius : 20,
    borderWidth : 1,
    borderColor :"gray",
    justifyContent : "flex-start",
    paddingLeft : 8,
    alignItems : 'center',
    marginTop : 7
  },
  name : {
    fontSize : 12,
    fontWeight : '700',
    color : "black",
    paddingLeft : 10
  },
  content : {
    marginLeft : 15,
    marginTop : 15
  }
})