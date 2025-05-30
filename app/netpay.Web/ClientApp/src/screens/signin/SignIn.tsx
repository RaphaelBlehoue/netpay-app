import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

import { SignInScreenNavigationProp } from '@/navigation/navigation.type'

import styles from './signIn.style'

const SignIn = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>()
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('SignUp')} style={styles.button}>
        <Text style={styles.buttonText}>Go SignUp</Text>
      </Pressable>
    </View>
  )
}

export default SignIn
