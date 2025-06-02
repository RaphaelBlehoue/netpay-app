import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import ButtonToolkit from '@/components/Button/Button'
import CheckBoxToolkit from '@/components/Checkbox/Checkbok'
import FieldInput from '@/components/FieldInput/FieldInput'
import KeyboardAvoidingScrollView from '@/components/KeyboardAvoidingScrollView/KeyboardAvoidingScrollView'
import { COLORS } from '@/constants/Colors'
import { SignInScreenNavigationProp } from '@/navigation/navigation.type'
import Ionicons from '@expo/vector-icons/Ionicons'

import styles from './signUp.style'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [fullName, setFullName] = useState<string>('')

  const navigation = useNavigation<SignInScreenNavigationProp>()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const signUp = () => {
    if (!email || !password || !fullName) return
    console.log('data', { fullName, email, password })
    setEmail('')
    setPassword('')
    setFullName('')
    navigation.navigate('EmailVerification')
  }

  // TODO Fix keyAbordingview
  return (
    <KeyboardAvoidingScrollView containerStyle={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.appBarWrapper}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.header}>
          <Text style={styles.headTitle}>Sign Up</Text>
          <Text style={styles.description}>Create account and enjoy all services</Text>
        </View>
        <View style={styles.form}>
          <FieldInput
            inputWrapperStyle={styles.inputWrapper}
            placeholder="Full name"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
            autoCapitalize="none"
            hasLeftIcon={true}
            label="Full Name"
            leftIcon={
              <Ionicons name="person-sharp" size={24} color={COLORS.Grey} style={styles.icon} />
            }
          />
          <FieldInput
            inputWrapperStyle={styles.inputWrapper}
            placeholder="Email adress"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            hasLeftIcon={true}
            label="Email"
            leftIcon={<Ionicons name="mail" size={24} color={COLORS.Grey} style={styles.icon} />}
          />
          <FieldInput
            inputWrapperStyle={styles.inputWrapper}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
            hasLeftIcon={true}
            label="Password"
            leftIcon={
              <Ionicons name="lock-closed" size={24} color={COLORS.Grey} style={styles.icon} />
            }
            hasRightIcon={true}
            rightIcon={
              <Pressable onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                {showPassword ? (
                  <Ionicons name="eye" size={24} color={COLORS.Grey} />
                ) : (
                  <Ionicons name="eye-off" size={24} color={COLORS.Grey} />
                )}
              </Pressable>
            }
          />
        </View>
        <CheckBoxToolkit
          hasLabel={true}
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? '#4630EB' : undefined}
          label={
            <>
              <Text style={styles.checkBoxText}>I agree to the company</Text>
              <Pressable>
                <Text style={styles.checkBoxLink}>Term of Service</Text>
              </Pressable>
              <Text style={styles.checkBoxText}>and</Text>
              <Pressable>
                <Text style={styles.checkBoxLink}>Privacy Policy</Text>
              </Pressable>
            </>
          }
        />
        <View>
          <ButtonToolkit
            style={styles.loginButton}
            styleButton={styles.loginButtonText}
            label="Sign Up"
            onPress={signUp}
          />

          <ButtonToolkit
            style={styles.googleButton}
            styleButton={styles.googleButtonText}
            label="Sign Up with Google"
            onPress={() => navigation.navigate('SignIn')}
            hasLeftIcon={true}
            leftIcon={<Ionicons name="logo-google" size={20} color={COLORS.danger} />}
          />
        </View>
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>have an account?</Text>
          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signInLink}>Login</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingScrollView>
  )
}

export default SignUp
