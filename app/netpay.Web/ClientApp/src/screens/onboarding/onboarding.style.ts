import { COLORS, SIZES } from '@/constants/Colors';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 32,
    alignItems: 'center'
  },
  logoWrapper: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 16
  },
  logo: {
    width: 103,
    height: 28
  },
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 20,
    paddingHorizontal: 32,
    marginHorizontal: 24,
    marginBottom: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Inter-Bold',
    fontSize: SIZES.medium
  }
})

export default styles;