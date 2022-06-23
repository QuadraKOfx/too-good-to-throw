import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";
import {useMemo} from "react";

const CustomBackdrop = ({animatedIndex, style}) => {
    // Animated Variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            animatedIndex.value,
            [0, 1],
            [0, 0.8],
            Extrapolate.CLAMP
        ),
    }));

    // styles
    const containerStyle = useMemo(
        () => [style,
            {
                backgroundColor: "gray"
            },
            containerAnimatedStyle],
        [style, containerAnimatedStyle]
    );

    return <Animated.View pointerEvents="none" style={containerStyle}/>;
};

export default CustomBackdrop;
