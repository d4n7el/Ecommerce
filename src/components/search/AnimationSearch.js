import { Animated } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

export const AnimateIcon = Animated.createAnimatedComponent(AwesomeIcon);

const animateValue = new Animated.Value(0);

export const inputAnimatedWidth = animateValue.interpolate({
  inputRange: [0, 1],
  outputRange: ["100%", "90%"],
});

export const inputAnimation = {
  transform: [
    {
      translateX: animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0],
      }),
    },
  ],
};

export const arrowLeftAnimation = {
  transform: [
    {
      translateX: animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 8],
      }),
    },
  ],
};

export const animatedTransition = Animated.spring(animateValue, {
  toValue: 1,
  useNativeDriver: false,
});

export const animateTranssitionReset = Animated.spring(animateValue, {
  toValue: 0,
  useNativeDriver: false,
});
