import { COLORS } from "@/constants/Colors";
import LottieView from "lottie-react-native";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";

type TSpashScreen = {
  onAnimationFinish?: (isCancelled: boolean) => void;
};

SplashScreen.preventAutoHideAsync();

export default function SpashScreen() {
  const animation = useRef<LottieView>(null);

  return (
    <SafeAreaView style={styles.splashContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={styles.splash}
        loop={false}
        source={require("../../assets/spash-screen.json")}
        onAnimationFinish={SplashScreen.hideAsync}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  splash: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primary,
  },
});
