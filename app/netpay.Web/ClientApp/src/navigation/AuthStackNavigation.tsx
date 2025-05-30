import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import SignIn from '@/screens/signin/SignIn'
import SignUp from '@/screens/signup/SignUp'

const AuthStack = createNativeStackNavigator()

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigation
