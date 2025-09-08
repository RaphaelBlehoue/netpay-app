import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/utils';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 24
  },
  cardContainer: {
    flexDirection: 'row',
    width: '85%',
    backgroundColor: COLORS.Grey50,
    marginBottom: 16,
    gap: 24,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    borderRadius: 20,
    marginLeft: 35
  },
  cardImage: {
    marginTop: 16
  },
  cardText: {
    paddingVertical: 5
  },
  cardTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: SIZES.large,
    color: COLORS.Grey900,
    marginBottom: 4
  },
  cardDescription: {
    width: '80%',
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.small,
    color: COLORS.Grey
  }
})

export default styles;