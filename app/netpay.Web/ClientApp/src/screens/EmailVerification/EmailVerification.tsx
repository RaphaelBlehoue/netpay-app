import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import {
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import ButtonToolkit from '@/components/Button/Button'
import FieldInput from '@/components/FieldInput/FieldInput'
import KeyboardAvoidingScrollView from '@/components/KeyboardAvoidingScrollView/KeyboardAvoidingScrollView'
import { SignInScreenNavigationProp } from '@/navigation/navigation.type'
import Ionicons from '@expo/vector-icons/Ionicons'

import styles from './EmailVerification.style'

const EmailVerification = () => {
  const inputRefs = useRef<TextInput[]>([])
  const [value, setValue] = useState<[]>([])
  const [countdown, setCountdown] = useState(60)
  const [isResendActive, setIsResendActive] = useState<boolean>(false)
  const navigation = useNavigation<SignInScreenNavigationProp>()
  const length = 5

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (countdown > 0 && !isResendActive) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
    } else if (countdown === 0) {
      setIsResendActive(true)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [countdown, isResendActive])

  const focusInput = (index: number) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index].focus()
    }
  }

  const formatCountdown = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    const paddedMinutes = String(minutes).padStart(2, '0')
    const paddedSeconds = String(remainingSeconds).padStart(2, '0')
    return `${paddedMinutes}:${paddedSeconds}`
  }

  const toggleResend = () => {
    setCountdown(60)
    setIsResendActive(false)
  }

  const handleChange = (text: string, index: number) => {
    if (text && index < length - 1) {
      focusInput(index + 1)
    }
  }

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
      focusInput(index - 1)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingScrollView>
        <View style={styles.appBarWrapper}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
        </View>
        <View style={styles.header}>
          <Text style={styles.headTitle}>Verify Code</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Please enter the code we just sent to email</Text>
            <Text style={styles.indication}>timsmxxx@email.com</Text>
          </View>
        </View>
        <View style={styles.codeContainer}>
          {Array(length)
            .fill(0)
            .map((_, index) => (
              <FieldInput
                ref={(ref) => {
                  if (ref) inputRefs.current[index] = ref
                }}
                key={index.toFixed()}
                style={styles.codeInput}
                maxLength={1}
                keyboardType="number-pad"
                selectTextOnFocus
                placeholder="|"
                placeholderTextColor="white"
                onKeyPress={(event) => handleKeyPress(event, index)}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
        </View>
        {/* Resend Timer */}
        <TouchableOpacity onPress={toggleResend}>
          <Text style={styles.resendText}>
            Resend code in <Text style={styles.resendHighlight}>{formatCountdown(countdown)}</Text>
          </Text>
        </TouchableOpacity>
        <ButtonToolkit
          style={styles.verifyCodeButton}
          styleButton={styles.verifyCodeButtonText}
          label="Continue"
          onPress={() => {}}
        />
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  )
}

export default EmailVerification
