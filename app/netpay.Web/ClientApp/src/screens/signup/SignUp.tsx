import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

import { SignInScreenNavigationProp } from '@/navigation/navigation.type'

import styles from './signUp.style'

const SignUp = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>()
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => navigation.navigate('SignIn')} style={styles.button}>
        <Text style={styles.buttonText}>Go SignIn</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.buttonText}>Go Home</Text>
      </Pressable>
    </View>
  )
}

export default SignUp
