import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

import Card from '../Card/Card'
import { COLORS, SIZES } from '@/constants/Colors'

import { IOnboardingItem } from './OnboardingData'

type Props = {
  item: IOnboardingItem
}

const { width, height } = Dimensions.get('window')

const OnbordingItems = ({ item }: Props) => {
  return (
    <View style={[styles.container, { width }]}>
      {item.headTitle && <Text style={styles.headTitle}>{item.headTitle}</Text>}
      {item.headSubTitle && <Text style={styles.headSubTitle}>{item.headSubTitle}</Text>}
      {item.source && (
        <View style={[styles.containerImage, !item.headTitle ? { marginTop: 30 } : '']}>
          <Image source={item.source} style={styles.image} resizeMode="contain" />
        </View>
      )}
      <View style={styles.bottomContainer}>
        {item.title && <Text style={styles.title}>{item.title}</Text>}
        {item.description && <Text style={styles.description}>{item.description}</Text>}
      </View>
      {item.cartItems?.length && (
        <View style={styles.containerCard}>
          <Card items={item.cartItems} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  headTitle: {
    fontFamily: 'Inter-Black',
    fontSize: SIZES.xxxLarge,
    alignSelf: 'flex-start',
    paddingHorizontal: 24,
    paddingBottom: 24
  },
  headSubTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.xMedium,
    color: COLORS.Grey,
    paddingBottom: 40,
    paddingHorizontal: 85,
    paddingLeft: 30
  },
  containerImage: {
    width: '100%',
    marginBottom: 10
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center'
  },
  image: {
    width: width * 0.9,
    height: height * 0.45,
    paddingLeft: 40
  },
  title: {
    fontFamily: 'Inter-Black',
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.xMedium,
    color: COLORS.Grey,
    textAlign: 'center',
    paddingHorizontal: 53
  },
  containerCard: {}
})

export default OnbordingItems
