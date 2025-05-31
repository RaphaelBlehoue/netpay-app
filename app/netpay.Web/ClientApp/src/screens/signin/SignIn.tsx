import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import ButtonToolkit from '@/components/Button/Button'
import FieldInput from '@/components/FieldInput/FieldInput'
import KeyboardAvoidingScrollView from '@/components/KeyboardAvoidingScrollView/KeyboardAvoidingScrollView'
import { COLORS } from '@/constants/Colors'
import { SignInScreenNavigationProp } from '@/navigation/navigation.type'
import Ionicons from '@expo/vector-icons/Ionicons'

import styles from './signIn.style'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigation = useNavigation<SignInScreenNavigationProp>()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const signIn = () => {
    if (!email || !password) return
    console.log('data', { email, password })
    setEmail('')
    setPassword('')
  }

  // TODO Fix keyAbordingview
  return (
    <KeyboardAvoidingScrollView containerStyle={styles.container}>
      <View style={styles.appBarWrapper}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.header}>
        <Text style={styles.headTitle}>Welcome Back!</Text>
        <Text style={styles.description}>Sign In to your account</Text>
      </View>
      <View style={styles.form}>
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
      <Pressable onPress={() => {}} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </Pressable>
      <View>
        <ButtonToolkit
          style={styles.loginButton}
          styleButton={styles.loginButtonText}
          label="Login"
          onPress={signIn}
        />

        <ButtonToolkit
          style={styles.googleButton}
          styleButton={styles.googleButtonText}
          label="Login with Google"
          onPress={() => navigation.navigate('SignUp')}
          hasLeftIcon={true}
          leftIcon={<Ionicons name="logo-google" size={20} color={COLORS.danger} />}
        />
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t have an account?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingScrollView>
  )
}

export default SignIn
