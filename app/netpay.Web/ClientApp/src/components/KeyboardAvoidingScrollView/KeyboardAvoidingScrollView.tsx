import React, { ComponentProps, PropsWithChildren } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleProp, ViewStyle } from 'react-native'
import { Edges, SafeAreaView } from 'react-native-safe-area-context'

import { COLORS } from '@/constants/Colors'

type TKeyboardAvoidingScrollView = {
  containerStyle?: StyleProp<ViewStyle>
  ScrollViewStyle?: StyleProp<ViewStyle>
  keyboardShouldPersistTaps?: boolean | 'handled' | 'always' | 'never' | undefined
  edges?: Edges | undefined
} & PropsWithChildren &
  ComponentProps<typeof KeyboardAvoidingView>

const KeyboardAvoidingScrollView = ({
  containerStyle,
  keyboardShouldPersistTaps = 'handled',
  edges = ['bottom'],
  ScrollViewStyle,
  children,
  ...KeyboardAvoidingViewProps
}: TKeyboardAvoidingScrollView) => {
  return (
    <SafeAreaView edges={edges} style={[{ flex: 1 }, containerStyle]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        {...KeyboardAvoidingViewProps}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default KeyboardAvoidingScrollView
