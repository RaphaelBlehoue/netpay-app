import SpashScreen from "@/components/SpashScreen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [loaded, setLoaded] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 5000);
  }, []);

  return <>{loaded ? <SpashScreen /> : <Stack />}</>;
}
