import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
// import { Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Feather";

export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
  }
//   signOut = () => {
//     const { navigation } = this.props;
//     navigation.navigate("SendOTP");
//   };
//   onboarding = () => {
//     const { navigation } = this.props;
//     navigation.navigate("SelectRoles");
//   };
//   raiseIndent = () => {
//     const { navigation } = this.props;
//     navigation.navigate("CreateIndent", {
//       from_screen: "drawer",
//     });
//   };
  render() {
    const { name, profile_image_url, is_seeker } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...this.props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              {profile_image_url ? (
                <Image
                  style={{ height: 80, width: 80, borderRadius: 40 }}
                  source={{
                    uri: profile_image_url,
                  }}
                />
              ) : (
                <Image
                  source={require("../assets/user.jpg")}
                  style={{ height: 80, width: 80, borderRadius: 40 }}
                />
              )}
              <Text style={styles.name}>{name}</Text>
            </View>
          </View>
        </DrawerContentScrollView>
        {/* <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="log-out" color={"white"} size={size} />
            )}
            label="Logout"
            style={styles.signout}
            labelStyle={styles.signout_label}
            onPress={this.signOut}
          />
        </Drawer.Section> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    alignItems: "center",
    marginTop: hp("4.1%"),
  },
  drawerSection: {
    marginTop: hp("2.7%"),
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  name: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "rgb(112 ,112 ,112)",
    marginTop: 10,
  },
  lableStyle: {
    height: hp("5.5%"),
    width: wp("50%"),
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "rgb(82 ,138 ,234)",
    color: "white",
    textAlign: "center",
    paddingTop: 7,
  },
  drawerItem: {
    height: hp("6.94%"),
    // marginLeft: 10,
    // borderWidth: 1,
    // borderColor: "black",
  },
  signout: {
    // borderWidth: 1,
    // borderColor: "black",
    borderTopLeftRadius: 30,
    backgroundColor: "rgb(82 ,138, 234)",
    paddingLeft: wp("5.5%"),
  },
  signout_label: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
});
