import React, { ComponentProps } from 'react'
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native'

type TButtonToolkit = {
  label: string
  hasLeftIcon?: boolean
  leftIcon?: React.ReactNode
  styleButton?: StyleProp<ViewStyle>
} & ComponentProps<typeof Pressable>

const ButtonToolkit = ({
  label,
  styleButton,
  leftIcon,
  hasLeftIcon = false,
  ...PressableProps
}: TButtonToolkit) => {
  return (
    <Pressable {...PressableProps}>
      {hasLeftIcon && leftIcon}
      <Text style={styleButton}>{label}</Text>
    </Pressable>
  )
}

export default ButtonToolkit
