import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {Home, Details, Weather} from './src/screens/index'
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen name="DetailsScreen" component={Details} />
          <Stack.Screen name="WeatherScreen" component={Weather} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
