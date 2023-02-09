import React from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";

export default class Fireworks extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: [],
      y: [],
    };
    this.fadingOpacity = new Animated.Value(1);
    this.movingBall = new Animated.Value(0);
  }

  componentDidMount() {
    this.animateOpacity();
    this.animateBall();
  }

  getRandom = (n) => {
    return Math.round(Math.random() * n);
  };

  animateOpacity() {
    this.fadingOpacity.setValue(1);
    Animated.timing(this.fadingOpacity, {
      toValue: 0,
      duration: 700,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => this.animateOpacity());
  }

  animateBall() {
    this.movingBall.setValue(0);
    Animated.timing(this.movingBall, {
      toValue: 1,
      duration: 700,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => this.animateBall());
  }

  render() {
    let balls = [],
      randomTops = [],
      randomLefts = [],
      randomColors = [];
    for (let i = 0; i < 30; i++) {
      balls.push("");
      randomTops[i] = this.movingBall.interpolate({
        inputRange: [0, 1],
        outputRange: [100, this.getRandom(200)],
      });
      randomLefts[i] = this.movingBall.interpolate({
        inputRange: [0, 1],
        outputRange: [100, this.getRandom(200)],
      });
      randomColors[i] =
        "rgb(" +
        this.getRandom(255) +
        "," +
        this.getRandom(255) +
        "," +
        this.getRandom(255) +
        ")";
    }
    let ballOpacity = this.fadingOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <View>
        <View style={styles.explosionBoundary}>
          {balls.map((ball, index) => {
            return (
              <Animated.View
                key={index}
                style={[
                  styles.ball,
                  {
                    top: randomTops[index],
                    left: randomLefts[index],
                    opacity: ballOpacity,
                    backgroundColor: randomColors[index],
                  },
                ]}
              />
            );
          })}
        </View>
        <View style={[styles.explosionBoundary, { left: 100 }]}>
          {balls.map((ball, index) => {
            return (
              <Animated.View
                key={index}
                style={[
                  styles.ball,
                  {
                    top: randomTops[index],
                    left: randomLefts[index],
                    opacity: ballOpacity,
                    backgroundColor: randomColors[index],
                  },
                ]}
              />
            );
          })}
        </View>
        <View style={[styles.explosionBoundary, { left: 180 }]}>
          {balls.map((ball, index) => {
            return (
              <Animated.View
                key={index}
                style={[
                  styles.ball,
                  {
                    top: randomTops[index],
                    left: randomLefts[index],
                    opacity: ballOpacity,
                    backgroundColor: randomColors[index],
                  },
                ]}
              />
            );
          })}
        </View>
        <View style={[styles.explosionBoundary]}>
          {balls.map((ball, index) => {
            return (
              <Animated.View
                key={index}
                style={[
                  styles.ball,
                  {
                    top: randomTops[index],
                    left: randomLefts[index],
                    opacity: ballOpacity,
                    backgroundColor: randomColors[index],
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  explosionBoundary: {
    position: "absolute",
    height: 200,
    width: 200,
    top: 10,
  },
  ball: {
    position: "absolute",
    height: 7,
    width: 7,
    borderRadius: 3,
  },
});
