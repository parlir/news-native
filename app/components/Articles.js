import React from "react";
import {
  Text,
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body
} from "native-base";
import { Linking } from "react-native";

const Articles = ({ source, articles, navigation }) => (
  <Container style={{ backgroundColor: "white" }}>
    <Container>
      <Content>
        <List>
          {articles.map(article => (
            <ListItem
              key={article.title}
              onPress={() =>
                navigation.navigate("ArticleViewer", {
                  url: article.url,
                  name: article.title
                })}
            >
              <Thumbnail
                square
                size={80}
                source={{ uri: article.urlToImage }}
              />
              <Body>
                <Text>{article.title}</Text>
                <Text
                  style={{ fontSize: 9, color: "#555", marginTop: 5 }}
                  numberOfLines={2}
                >
                  {article.description}
                </Text>
              </Body>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  </Container>
);

export default Articles;
