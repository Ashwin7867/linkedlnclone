import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Text, View} from "react-native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import FeedListScreen from "../screens/FeedListScreen";
import MyNetworkScreen from "../screens/MyNetworkScreen";
import NotificationScreen from "../screens/NotificationScreen";
import JobsScreen from "../screens/JobsScreen";
import CreatePostScreen from "../screens/CreatePostScreen";

const Tab = createMaterialBottomTabNavigator();

export default class MainTabNavigator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="black"
        inactiveColor="lightgray"
        barStyle={{
          paddingTop: -1,
          width: wp("100%"),
          backgroundColor: "white",
          alignSelf: "center",
          position : "absolute",
          bottom : 0
        }}
        labeled={true}
        labelStyle={{ fontSize: 9 ,color :"black"}}
      >
        <Tab.Screen
          name="Home"
          component={FeedListScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => {
              // <Icon name="developer-board" color={color} size={26} />
              if (focused) {
                return (
                  <Icon name="home-variant" size={20} color="black" />
                );
              } else {
                return (
                  <Icon name="home-variant" size={20} color="gray" />
                );
              }
            },
          }}
        />
        <Tab.Screen
          name="MyNetwork"
          component={MyNetworkScreen}
          initialParams={{ show_header: true }}
          options={{
            tabBarLabel: "My Network",
            tabBarIcon: ({ focused, color }) => {
              //   <Icon name="library" color={color} size={26} />
              if (focused) {
                return (
                  <Icon name="account-multiple-plus" size={20} color="black" />
                );
              } else {
                return <Icon name="account-multiple-plus" size={20} color="gray" />
              }
            },
          }}
        />
        <Tab.Screen
          name="Post"
          component={CreatePostScreen}
          options={{
            tabBarLabel: "Post",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => {
              // <Icon name="bookmark" color={color} size={26} />
              if (focused) {
                return (
                  <Icon name="plus-box" size={20} color="black" />
                );
              } else {
                return (
                    <Icon name="plus-box" size={20} color="gray" />
                );
              }
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: "Notification",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => {
              //<Icon name="account-settings" color={color} size={26} />
              if (focused) {
                return (
                  <Icon name="bell" size={20} color="black" />
                );
              } else {
                return <Icon name="bell" size={20} color="gray" />
              }
            },
          }}
        />
          <Tab.Screen
          name="Jobs"
          component={JobsScreen}
          options={{
            tabBarLabel: "Jobs",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => {
              //<Icon name="account-settings" color={color} size={26} />
              if (focused) {
                return (
                  <Icon name="basket" size={20} color="black" />
                );
              } else {
                return <Icon name="basket" size={20} color="gray" />
              }
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}

// const styles = StyleSheet.create({
//     navigator_style:
// })
