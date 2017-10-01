import React from "react";
import {
  Text,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right
} from "native-base";
import { TouchableOpacity, Linking } from "react-native";

const Sources = ({ sources, navigation }) => (
  <Container style={{ backgroundColor: "white" }}>
    <Content>
      <List>
        {sources.map(source => (
          <ListItem
            key={source.name}
            onPress={() =>
              navigation.navigate("Articles", {
                identifier: source.id,
                name: source.name
              })}
          >
            <Body>
              <Text>{source.name}</Text>
              <Text
                style={{ fontSize: 9, color: "#555", marginTop: 5 }}
                numberOfLines={2}
              >
                {source.description}
              </Text>
            </Body>
            <Right />
          </ListItem>
        ))}
      </List>
    </Content>
  </Container>
);

export default Sources;
