import React from 'react'
import { Image, Text, useWindowDimensions, View } from 'react-native'

import Card from '@/components/Card/Card'

import { IOnboardingItem } from './onboarding.type'
import styles from './onboardingItem.style'

type Props = {
  item: IOnboardingItem
}

const OnbordingItems = ({ item }: Props) => {
  const { width } = useWindowDimensions()
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

export default OnbordingItems
