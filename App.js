import React from "react";
import { View, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux"
import { createStackNavigator } from "@react-navigation/stack"
import DrawerNavigation from "./src/navigation/DrawerNavigator";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import FeedDetailsScreen from "./src/screens/FeedDetailsScreen";
import { store } from "./src/redux/store"

const Stack = createStackNavigator();

function StatusBarPlaceHolder() {
  return <StatusBar barStyle="light-content" />;
}

const App = (props) => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBarPlaceHolder />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="DrawerNavigation">
            <Stack.Screen name="DrawerNavigation"
              component={DrawerNavigation}
              options={{ headerShown: false }} />
            <Stack.Screen name="FeedDetailsScreen"
              component={FeedDetailsScreen}
              options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <FeedCard name="Ashwin"
        title="Apoorva Paradkar"
        description="creas/her feed User should be able to view his/her profile page with all the details and tweets."
        images={[]} /> */}
      </View>
    </Provider>

  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})