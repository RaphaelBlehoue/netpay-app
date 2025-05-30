import { COLORS, SIZES } from '@/constants/Colors';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 20,
    paddingHorizontal: 32,
    marginHorizontal: 24,
    marginBottom: 32,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Inter-Bold',
    fontSize: SIZES.medium
  }
});

export default styles