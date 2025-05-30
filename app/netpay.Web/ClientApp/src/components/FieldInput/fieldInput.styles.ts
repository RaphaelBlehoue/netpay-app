import { COLORS, SIZES } from '@/constants/Colors';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontSize: SIZES.medium,
    fontWeight: '600',
    color: COLORS.Grey900,
    marginBottom: 8,
  },
  errorInput: {
    borderColor: COLORS.danger,
  },
  error: {
    color: COLORS.danger,
    height: 17,
  },
});

export default styles