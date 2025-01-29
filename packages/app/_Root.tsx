import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect } from "react";
import App from "@/App";

SplashScreen.preventAutoHideAsync();

export default function () {
  const [loaded, error] = Font.useFonts({
    Geist: require("../assets/fonts/Geist.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
    if (error) {
      alert(error);
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View role="main" className="bg-background">
      <View role="figure" style={{ height: statusBarHeight }} />
      <App />
      <StatusBar style="auto" />
    </View>
  );
}
