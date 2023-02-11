import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Emoji from "./Emoji";

const slides = [
  {
    key: 1,
    title: "How to save your Emoji Gotchi ??",
    text1:
      "Once you'll start the game energy bar will be emptied as time goes by.",
    text: "You can save your Emoji Gotchi by CLICKING on it.",
    image: require("../assets/EmojiGotchi/intro/intro-1.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "How about some cool stuff ??",
    text1: "What if you've got some master button which will fill your energy bar instantly ??",
    text: "You can get it by Clicking on the Respawn button and you can Make your Emoji Gotchi HAPPY again.",
    image: require("../assets/EmojiGotchi/intro/intro-2.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "How about some rewards ??",
    text1: "What will happen when your Emoji Gotchi is Happy ?",
    text: "Once your Emoji Gotchi is Happy you can get some rewards by having some crackers in below section.",
    image: require("../assets/EmojiGotchi/intro/intro-3.png"),
    backgroundColor: "#22bcb5",
  },
];

export default class IntroSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={[styles.image, { height: 250 }]} />
        <Text style={styles.text1}>{item.text1}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <Emoji />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          onSkip={this._onDone}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#232E5C",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 32,
  },
  text1: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  text: {
    color: "#FFF",
    fontWeight: "400",
    textAlign: "center",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
});
