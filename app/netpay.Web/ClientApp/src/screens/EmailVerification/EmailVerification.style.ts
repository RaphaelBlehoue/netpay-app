import { COLORS, SIZES } from '@/constants/Colors';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS['bg-info'],
    paddingHorizontal: 24,
    color: "white"
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
    marginBottom: 8,
    color: "white"
  },
  descriptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.xMedium,
    color: COLORS.Grey200,
  },
  indication: {
    fontFamily: 'Inter-SemiBold',
    fontSize: SIZES.large,
    color: COLORS.Grey200,
    marginBottom: 40
  },
  verifyCodeButton: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  verifyCodeButtonText: {
    marginLeft: 8,
    fontSize: SIZES.xMedium,
    fontWeight: '800',
    color: COLORS.secondary,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
    gap: 12,
  },
  codeInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 52,
    height: 52,
    borderRadius: 10,
    fontSize: SIZES.large,
    textAlign: 'center',
    borderColor: "white",
    borderWidth: 1,
    color: 'white',
    fontFamily: 'Inter-bold'
  },
  resendText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: SIZES.xMedium,
    marginBottom: 16,
  },
  resendHighlight: {
    fontWeight: '700',
    color: '#fff',
  },
});

export default styles