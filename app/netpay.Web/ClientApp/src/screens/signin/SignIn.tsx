import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import FieldInput from '@/components/FieldInput/FieldInput'
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

  // TODO Ajout du keybord
  return (
    <SafeAreaView style={styles.container}>
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
        <Pressable onPress={signIn} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('SignUp')} style={styles.googleButton}>
          <Ionicons name="logo-google" size={20} color={COLORS.danger} />
          <Text style={styles.googleButtonText}>Login with Google</Text>
        </Pressable>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t have an account?</Text>
        <Pressable>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default SignIn
