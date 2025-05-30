import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './card.style'
import { ICard } from './card.type'

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

export default Card
