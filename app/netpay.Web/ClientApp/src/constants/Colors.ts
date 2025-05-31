type ColorVariant = 'primary' | 'secondary' | 'Grey' | 'Grey50' | 'Grey100' | 'Grey900' | 'Grey400' | 'Grey200' | 'Purple700' | 'danger' | 'bg-info';
type SizesVariant = 'xxxLarge' | 'xxLarge' | 'xLarge' | 'large' | 'xMedium' | 'medium' | 'small' | 'xSmall';


export const COLORS: Record<ColorVariant, string> = {
  primary: '#20136E',
  secondary: '#7D5DF6',
  Grey: '#6B7280',
  Grey50: '#F9FAFB',
  Grey100: '#F3F4F6',
  Grey200: '#E5E7EB',
  Grey400: '#9CA3AF',
  Grey900: '#111827',
  Purple700: '#4C33B8',
  danger: '#FA3946',
  "bg-info": '#7D5DF6',
};

export const SIZES: Record<SizesVariant, number> = {
  xxxLarge: 40,
  xxLarge: 32,
  xLarge: 24,
  large: 20,
  xMedium: 18,
  medium: 16,
  small: 14,
  xSmall: 12
};
