import { COLORS, SIZES, hpx, wpx } from '@/utils';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wpx(24)
  },
  appBarWrapper: {
    marginTop: 40
  },
  header: {
    marginTop: 24,
  },
  headTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: SIZES.xxLarge,
    marginBottom: 8
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.large,
    color: COLORS.Grey,
  },
  form: {
    marginTop: 30
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: wpx(12),
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.Grey200
  },
  icon: {
    marginRight: 8
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#1E1E1E'
  },
  eyeIcon: {
    marginLeft: 8,
  },
  forgotPassword: {
    alignSelf: "flex-end"
  },
  forgotPasswordText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    marginBottom: 24
  },
  loginButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    paddingVertical: hpx(20),
    paddingHorizontal: wpx(32),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    marginLeft: 8,
    fontSize: SIZES.xMedium,
    fontWeight: '800',
    color: 'white',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingVertical: hpx(20),
    paddingHorizontal: wpx(32),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButtonText: {
    marginLeft: 8,
    fontSize: SIZES.xMedium,
    fontWeight: '600',
    color: '#000000',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signInText: {
    fontSize: SIZES.xMedium,
    color: COLORS.Grey400
  },
  signInLink: {
    fontSize: SIZES.xMedium,
    color: COLORS.secondary,
    fontWeight: '600',
    marginLeft: 5,
  },
  checkbox: {
    margin: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.Grey400
  },

  checkBoxText: {
    fontSize: SIZES.small,
    color: COLORS.Grey400
  },
  checkBoxLink: {
    fontSize: SIZES.small,
    color: COLORS.secondary,
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default styles