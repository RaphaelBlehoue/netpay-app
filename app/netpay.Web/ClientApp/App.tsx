import { SplashScreen as SplashScreenToolkit } from '@/components'
import { AuthStackNavigation } from '@/navigation'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import { Onboarding } from '@/screens/onboarding'

SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator()

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Black': require('@/assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('@/assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('@/assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('@/assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('@/assets/fonts/Inter-SemiBold.ttf')
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
    console.log('fontError', fontError)
  }, [fontsLoaded, fontError])

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 5000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady || (!fontsLoaded && !fontError)) {
    return <SplashScreenToolkit onAnimationFinish={onLayoutRootView} />
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar animated={true} hidden={true} />
    </NavigationContainer>
  )
}
