import React from "react";
import { SplashScreen } from "./components";
import { SafeAreaProvider } from "react-native-safe-area-context";

class App extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <SafeAreaProvider>
        <SplashScreen />
      </SafeAreaProvider>
    );
  }
}


export default App;
