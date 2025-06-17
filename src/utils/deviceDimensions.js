import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375; // iPhone X width
const guidelineBaseHeight = 812;

export const rW = size => (width / guidelineBaseWidth) * size;
export const rH = size => (height / guidelineBaseHeight) * size;
export const rF = size => PixelRatio.roundToNearestPixel((width / guidelineBaseWidth) * size);
