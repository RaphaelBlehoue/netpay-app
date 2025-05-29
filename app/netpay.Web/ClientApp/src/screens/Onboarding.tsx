import { useRef, useState } from 'react'
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { onBoardingData } from '@/components/Onboarding/OnboardingData'
import OnbordingItems from '@/components/Onboarding/OnboardingItems'
import PaginationDots from '@/components/Onboarding/PaginationDots'
import { COLORS, SIZES } from '@/constants/Colors'

export const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)
  const { width } = useWindowDimensions()

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
      <Pressable onPress={() => console.warn('Pressed')} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 32,
    alignItems: 'center'
  },
  logoWrapper: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 16
  },
  logo: {
    width: 103,
    height: 28
  },
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 20,
    paddingHorizontal: 32,
    marginHorizontal: 24,
    marginBottom: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Inter-Bold',
    fontSize: SIZES.medium
  }
})

export default Onboarding
