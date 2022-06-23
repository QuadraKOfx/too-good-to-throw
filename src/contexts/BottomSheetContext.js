import React, {createContext, useMemo, useRef, useState} from "react";
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {CustomBackDropComponent, CustomBackground} from "../utils/sheet-types";
import ApplePay from "../components/apple-pay/ApplePay";

export const SheetContext = createContext({});

export const BottomSheetContext = ({children}) => {
    const bottomSheetRef = useRef<BottomSheetModal>null;
    const snapPoints = useMemo(() => ['25%', '70%'], []);

    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={bottomSheetRef.current}
                snapPoints={snapPoints}
                backgroundComponent={CustomBackground}
                backdropComponent={CustomBackDropComponent}>
                <ApplePay />
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
}
