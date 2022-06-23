import React, { useMemo } from "react";
import Animated, {useAnimatedStyle, interpolateColor} from "react-native-reanimated";

const CustomSheet = ({style, animatedIndex}) => {
    const containerAnimatedStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            animatedIndex.value,
            [0, 0],
            ["#ffffff", "#a8b5eb"]
        ),
    }));
    const containerStyle = useMemo(
        () => [style, containerAnimatedStyle],
        [style, containerAnimatedStyle]
    );
    return <Animated.View pointerEvents="none" style={containerStyle} />;
}

export default CustomSheet;
