import Sources from "./containers/Sources";
import Articles from "./containers/Articles";
import ArticleViewer from "./components/ArticleViewer";

export const routes = {
  Sources: {
    screen: Sources,
    navigationOptions: {
      title: "News Feed"
    }
  },
  Articles: {
    screen: Articles,
    path: "source/:identifier",
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name
    })
  },
  ArticleViewer: {
    screen: ArticleViewer,
    path: "article/:url",
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
      header: null
    })
  }
};

export const routeConfig = {
  initialRoute: "Sources"
};
