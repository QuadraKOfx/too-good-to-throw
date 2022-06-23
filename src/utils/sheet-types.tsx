import React from "react";
import {BottomSheetBackdropProps, BottomSheetBackgroundProps} from "@gorhom/bottom-sheet";
import CustomSheet from "../components/custom-bottom-sheet/CustomSheet";
import CustomBackDrop from "../components/custom-backdrop/CustomBackDrop";

export const CustomBackground: React.FC<BottomSheetBackgroundProps> = ({style, animatedIndex}) => {
    return (<CustomSheet style={style} animatedIndex={animatedIndex}/>);
}

export const CustomBackDropComponent: React.FC<BottomSheetBackdropProps> = ({style, animatedIndex}) => {
    return (<CustomBackDrop style={style} animatedIndex={animatedIndex}/>);
}
