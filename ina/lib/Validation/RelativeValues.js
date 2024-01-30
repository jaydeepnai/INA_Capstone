import { Dimensions, PixelRatio } from "react-native";
const fontScale = PixelRatio.getFontScale();
const { width} = Dimensions.get('window');
const getFontSize = size => size / fontScale;
const responsiveMargin =(marginPercentage)=> (width * marginPercentage) / 100;

export {getFontSize, responsiveMargin,width}