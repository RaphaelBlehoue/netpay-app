import React, { ComponentProps } from 'react'
import { StyleProp, Text, TextInput, View, ViewStyle } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import styles from './fieldInput.styles'

type IFieldInput = {
  label?: string
  containerStyle?: StyleProp<ViewStyle>
  inputWrapperStyle?: StyleProp<ViewStyle>
  hasError?: boolean
  errorMessage?: { message: string }
  hasLeftIcon?: boolean
  leftIcon?: React.ReactNode
  hasRightIcon?: boolean
  rightIcon?: React.ReactNode
} & ComponentProps<typeof TextInput>

const FieldInput = ({
  label,
  containerStyle,
  inputWrapperStyle,
  hasLeftIcon = false,
  hasRightIcon = false,
  rightIcon,
  leftIcon,
  ...textInputProps
}: IFieldInput) => {
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={inputWrapperStyle}>
        {hasLeftIcon && leftIcon}
        <TextInput
          {...textInputProps}
          style={[textInputProps.style, textInputProps.hasError ? styles.errorInput : {}]}
        />
        {hasRightIcon && rightIcon}
      </View>
      <Text style={styles.error} numberOfLines={1}>
        {textInputProps.errorMessage?.message}
      </Text>
    </View>
  )
}

export default FieldInput
