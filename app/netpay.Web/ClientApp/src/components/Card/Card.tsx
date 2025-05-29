import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { ICard } from '../Onboarding/OnboardingData'
import { COLORS, SIZES } from '@/constants/Colors'

type Props = {
  items: ICard[]
}
const Card = ({ items }: Props) => {
  return (
    <View style={styles.wrapper}>
      {items.map((item, index) => (
        <View style={styles.cardContainer} key={index.toFixed()}>
          <View>
            {!!item.cardSource && <Image source={item.cardSource} style={styles.cardImage} />}
          </View>
          <View style={styles.cardText}>
            {!!item.cardTitle && <Text style={styles.cardTitle}>{item.cardTitle}</Text>}
            {!!item.cardDescription && (
              <Text style={styles.cardDescription}>{item.cardDescription}</Text>
            )}
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 24
  },
  cardContainer: {
    flexDirection: 'row',
    width: '85%',
    backgroundColor: COLORS.Grey50,
    marginBottom: 16,
    gap: 24,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    borderRadius: 20,
    marginLeft: 35
  },
  cardImage: {
    marginTop: 16
  },
  cardText: {
    paddingVertical: 5
  },
  cardTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: SIZES.large,
    color: COLORS.Grey900,
    marginBottom: 4
  },
  cardDescription: {
    width: '80%',
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.small,
    color: COLORS.Grey
  }
})

export default Card
