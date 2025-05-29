import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS, SIZES } from '@/constants/Colors'
import Feather from '@expo/vector-icons/Feather'

type TPaginationDots = {
  total: number
  currentIndex: number
}

const PaginationDots = ({ total, currentIndex }: TPaginationDots) => {
  const isLastElement = currentIndex === total - 1

  return (
    <>
      {isLastElement ? (
        <View style={styles.lastContainer}>
          <View style={styles.icon}>
            <Feather name="lock" size={24} color={COLORS.secondary} />
          </View>
          <View style={styles.TextContent}>
            <Text style={styles.infoText}>
              We’ll always keep information secure and confidential.
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.dotsContainer}>
          {Array.from({ length: total - 1 }).map((_, index) => (
            <View
              key={index.toFixed()}
              style={[styles.dot, currentIndex === index && styles.dotActive]}
            />
          ))}
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
    gap: 8
  },
  lastContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    gap: 20
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DDD'
  },
  dotActive: {
    backgroundColor: '#5D5FEF',
    width: 24
  },
  icon: {
    marginRight: 8
  },
  TextContent: {
    width: '60%'
  },
  infoText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: SIZES.medium,
    color: COLORS.Purple700
  }
})

export default PaginationDots
