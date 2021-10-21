import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent";
import MainTabNavigator from "./MainTabNavigator";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const Drawer = createDrawerNavigator();

export default class DrawerNavigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Drawer.Navigator
        drawerStyle={{
          width: wp("70%"),
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="HomeDrawer" 
          component={MainTabNavigator} 
          options={{headerShown : false}} />
      </Drawer.Navigator>
    );
  }
}
