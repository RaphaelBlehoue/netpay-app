import { OnbordingItems, PaginationDots } from '@/components'
import { RootStackNavigationProp } from '@/navigation'
import { useNavigation } from '@react-navigation/native'
import { useRef, useState } from 'react'
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  useWindowDimensions,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { onBoardingData } from '@/store/OnboardingData'

import styles from './onboarding.style'

export const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)
  const { width } = useWindowDimensions()
  const navigation = useNavigation<RootStackNavigationProp>()

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width)
    setCurrentIndex(index)
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.logoWrapper}>
        <Image source={require('@/assets/logo/logo-netpay.png')} style={styles.logo} />
      </View>
      {/* start flatlist */}
      <View style={styles.wrapper}>
        <FlatList
          ref={flatListRef}
          data={onBoardingData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <OnbordingItems item={item} />}
        />
        <PaginationDots total={onBoardingData.length} currentIndex={currentIndex} />
      </View>
      {/* end flatlist */}
      <Pressable
        onPress={() => navigation.navigate('Auth', { screen: 'SignIn' })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export { Onboarding }
