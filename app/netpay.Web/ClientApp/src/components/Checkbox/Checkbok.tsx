import Checkbox from 'expo-checkbox'
import { ComponentProps } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

type TCheckbox = {
  label?: React.ReactNode
  hasLabel?: boolean
  containerCheckBox?: StyleProp<ViewStyle>
} & ComponentProps<typeof Checkbox>

const CheckbokToolkit = ({ label, hasLabel, containerCheckBox, ...CheckbokProps }: TCheckbox) => {
  return (
    <View style={[styles.container, containerCheckBox]}>
      <View style={styles.checkbokCard}>
        <Checkbox {...CheckbokProps} />
      </View>
      <View style={styles.checkbokLabelCard}>{hasLabel && label}</View>
    </View>
  )
}

export { CheckbokToolkit }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 2,
    marginVertical: 2
  },
  checkbokCard: {
    marginVertical: 2,
    margin: 0
  },
  checkbokLabelCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginVertical: 5,
    paddingHorizontal: 10
  }
})
