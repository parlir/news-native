import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { Container } from "native-base";
import { StackNavigator } from "react-navigation";

import store from "./store";
import { routes, routeConfig } from "./routes";

const AppNavigator = StackNavigator(routes, routeConfig);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ backgroundColor: "white", flex: 1 }}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
