import { StyleSheet, View, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import SplashScreenToolkit from "@/components/SplashScreen/SplashScreen";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();
export const Onboarding = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady || (!fontsLoaded && !fontError)) {
    return <SplashScreenToolkit onAnimationFinish={onLayoutRootView} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("@/assets/logo/logo-netpay.png")}
        style={{ width: 103, height: 28 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 16,
  },
  text: {
    fontFamily: "Inter-SemiBold",
    fontSize: 32,
  },
});

export default Onboarding;
