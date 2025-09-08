import React, { ComponentProps, forwardRef } from 'react'
import { StyleProp, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native'

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
} & ComponentProps<typeof TextInput> &
  TextInputProps

const FieldInput = forwardRef<TextInput, IFieldInput>(
  (
    {
      label,
      containerStyle,
      inputWrapperStyle,
      hasLeftIcon = false,
      hasRightIcon = false,
      rightIcon,
      leftIcon,
      ...textInputProps
    },
    ref
  ) => {
    return (
      <View style={containerStyle}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={inputWrapperStyle}>
          {hasLeftIcon && leftIcon}
          <TextInput
            ref={ref}
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
)

export { FieldInput }
