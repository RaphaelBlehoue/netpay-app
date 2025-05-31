import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  SignIn?: object;
  SignUp?: object;
  EmailVerification?: object;
};

export type RootStackParamList = {
  Home?: object;
  Auth: NavigatorScreenParams<AuthStackParamList>;
};

// pour naviger dans un nested a l'interieur et a l'exterieur, a faire la meme chose pour les nested navigation

export type SignInScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

// Props for useNavigation
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;