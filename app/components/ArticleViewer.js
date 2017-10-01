import React from "react";
import { WebView, View } from "react-native";

const ArticleViewer = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "red" }}>
    <WebView
      style={{ flex: 1 }}
      source={{ uri: navigation.state.params.url }}
    />
  </View>
);

export default ArticleViewer;
