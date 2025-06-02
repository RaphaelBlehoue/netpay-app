import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { EmailVerify } from '@/screens/emailVerify'
import { SignIn } from '@/screens/signin'
import { SignUp } from '@/screens/signup'

const AuthStack = createNativeStackNavigator()

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <AuthStack.Screen
        name="EmailVerification"
        component={EmailVerify}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  )
}

export { AuthStackNavigation }
