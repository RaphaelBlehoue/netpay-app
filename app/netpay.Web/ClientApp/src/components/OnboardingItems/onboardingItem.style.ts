import { Dimensions, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/utils';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  headTitle: {
    fontFamily: 'Inter-Black',
    fontSize: SIZES.xxxLarge,
    alignSelf: 'flex-start',
    paddingHorizontal: 24,
    paddingBottom: 24
  },
  headSubTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.xMedium,
    color: COLORS.Grey,
    paddingBottom: 40,
    paddingHorizontal: 85,
    paddingLeft: 30
  },
  containerImage: {
    width: '100%',
    marginBottom: 10
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center'
  },
  image: {
    width: width * 0.9,
    height: height * 0.45,
    paddingLeft: 40
  },
  title: {
    fontFamily: 'Inter-Black',
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.xMedium,
    color: COLORS.Grey,
    textAlign: 'center',
    paddingHorizontal: 53
  },
  containerCard: {}
})

export default styles;