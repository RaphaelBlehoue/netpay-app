// @utils/Scaling.ts
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// scree ref : Iphone 11 pro
// Responsive width based on design guideline (ex: 375)
export const wpx = (size: number) => (width / 375) * size;

// Responsive height based on design guideline (ex: 812)
export const hpx = (size: number) => (height / 812) * size;

// Cross-platform shadow
export const boxShadow = {
  light: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  medium: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
};
