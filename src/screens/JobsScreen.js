import React from "react";
import {View, Text, StyleSheet} from "react-native";

const JobsScreen  = () => {
  return  (
    <View style={styles.container}>
        <Text>Jobs Screen</Text>
    </View>
  )
}

export default JobsScreen;

const styles= StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})