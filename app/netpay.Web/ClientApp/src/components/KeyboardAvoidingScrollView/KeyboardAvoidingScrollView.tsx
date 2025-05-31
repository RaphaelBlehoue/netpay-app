import React, { ComponentProps, PropsWithChildren } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleProp, ViewStyle } from 'react-native'
import { Edges, SafeAreaView } from 'react-native-safe-area-context'

type TKeyboardAvoidingScrollView = {
  containerStyle?: StyleProp<ViewStyle>
  keyboardShouldPersistTaps?: boolean | 'handled' | 'always' | 'never' | undefined
  edges?: Edges | undefined
} & PropsWithChildren &
  ComponentProps<typeof KeyboardAvoidingView>

const KeyboardAvoidingScrollView = ({
  containerStyle,
  keyboardShouldPersistTaps = 'handled',
  edges = ['bottom'],
  children,
  ...KeyboardAvoidingViewProps
}: TKeyboardAvoidingScrollView) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      {...KeyboardAvoidingViewProps}
    >
      <ScrollView
        style={{ backgroundColor: '#fff' }}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 10,
          gap: 5
        }}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      >
        <SafeAreaView edges={edges} style={[{ flex: 1 }, containerStyle]}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingScrollView
