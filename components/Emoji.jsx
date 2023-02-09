import React from "react";

import {
  Image,
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";

import * as Progress from "react-native-progress";

class Emoji extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: Dimensions.get("window").width,
      count: 20,
    };
  }

  tick = () => {
    const { count } = this.state;
    if (count > 0) {
      this.setState({
        count: count - 1,
      });
    }
  };

  addSec = () => {
    const { count } = this.state;

    if (count < 21) {
      this.setState({
        count: count + 2,
      });
    }
  };

  resetCount = () => {
    this.setState({
      count: 21,
    });
  };

  selectMsg = () => {
    const { count } = this.state;

    return count > 16 ? (
      <Text style={styles.emotionText}>I'm Happy 😍</Text>
    ) : count > 12 ? (
      <Text style={styles.emotionText}>I'm Innocent 😇</Text>
    ) : count > 8 ? (
      <Text style={styles.emotionText}>I'm Getting Angry 😗</Text>
    ) : count > 4 ? (
      <Text style={styles.emotionText}>I'm Hungry 🤢</Text>
    ) : count === 0 ? (
      <Text style={styles.emotionText}>I'm Dead 😵</Text>
    ) : (
      <Text style={styles.emotionText}>I'm Angry 😡</Text>
    );
  };

  selectEmoji = () => {
    const { count } = this.state;

    return count > 16 ? (
      <Image
        source={require("../assets/EmojiGotchi/happy.png")}
        style={{ width: 150, height: 150, alignSelf: "center" }}
      />
    ) : count > 12 ? (
      <Image
        source={require("../assets/EmojiGotchi/feel.png")}
        style={{ width: 150, height: 150, alignSelf: "center" }}
      />
    ) : count > 8 ? (
      <Image
        source={require("../assets/EmojiGotchi/pink.png")}
        style={{ width: 150, height: 150, alignSelf: "center" }}
      />
    ) : count > 4 ? (
      <Image
        source={require("../assets/EmojiGotchi/green.png")}
        style={{ width: 150, height: 150, alignSelf: "center" }}
      />
    ) : count === 0 ? (
      <Image
        source={require("../assets/EmojiGotchi/dead.png")}
        style={{ width: 150, height: 150, alignSelf: "center" }}
      />
    ) : (
      <Image
        source={require("../assets/EmojiGotchi/red.png")}
        style={{ width: 150, height: 150, alignSelf: "center" }}
      />
    );
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { count, windowWidth } = this.state;

    const currentColor =
      count > 16
        ? "green"
        : count > 12
        ? "blue"
        : count > 8
        ? "orange"
        : count > 4
        ? "#131122"
        : "red";

    return (
      <View style={styles.container}>
        <Progress.Bar
          color={currentColor}
          style={{
            backgroundColor: count > 0 ? "lightgrey" : "pink",
            borderColor: "transparent",
          }}
          progress={count / 20}
          width={windowWidth - 30}
        />
        <View style={{ paddingTop: 20 }}>
          {this.selectMsg()}
          <TouchableOpacity onPress={this.addSec}>
            {this.selectEmoji()}
          </TouchableOpacity>
        </View>
        <View style={styles.parent}>
          <TouchableOpacity style={[styles.submit]} onPress={this.resetCount}>
            <Text style={[styles.submitText]}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100 + 65,
    padding: 15,
    backgroundColor: "#232E5C",
    flex: 1,
  },
  emotionText: {
    color: "white",
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
    paddingVertical: 20,
  },
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232E5C",
    width: "100%",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  submit: {
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 70,
  },
});

export default Emoji;
