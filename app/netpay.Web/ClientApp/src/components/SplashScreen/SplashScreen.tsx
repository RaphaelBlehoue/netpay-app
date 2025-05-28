import { StyleSheet } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/Colors";

type Props = {
  onAnimationFinish: () => void;
};

const SplashScreenToolkit: React.FC<Props> = ({ onAnimationFinish }) => {
  const animation = useRef<LottieView>(null);

  return (
    <SafeAreaView style={styles.animationContainer}>
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        style={styles.splash}
        source={require("../../assets/splash-screen.json")}
        onAnimationFinish={onAnimationFinish}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  splash: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primary,
  },
});

export default SplashScreenToolkit;
