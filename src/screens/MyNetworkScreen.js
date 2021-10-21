import React from "react";
import {View, Text, StyleSheet} from "react-native";

const MyNetworkScreen  = () => {
  return  (
    <View style={styles.container}>
        <Text>My network Screen</Text>
    </View>
  )
}

export default MyNetworkScreen;

const styles= StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})