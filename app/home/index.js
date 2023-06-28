import { useMemo, useCallback } from 'react'
import { StyleSheet } from "react-native"
import {
    drawerBorderRadius,
    drawerHeight,
} from "../../src/ui-kit/index"
import { QrCode, TokenInput, TokenReader } from "../../src/components"
import useTokenReaderStore from "../../src/hooks/useTokenReaderStore"
import BottomSheet from '@gorhom/bottom-sheet';

export default function Home() {
    const snapPoints = useMemo(() => [drawerHeight, '100%'], []);
    const { currentDrawerIndex, setCurrentIndex } = useTokenReaderStore()
    const handleSheetChanges = useCallback((newIndex) => {
        setCurrentIndex(newIndex)
      }, []);
    return (
        <>
            <GmView style={styles.qrCodeWrapper}>
                <QrCode style={styles.qrCodeWrapper} />
            </GmView>
            <BottomSheet style={styles.drawer(currentDrawerIndex == 1 ? 0 : drawerBorderRadius)} snapPoints={snapPoints} index={currentDrawerIndex} onChange={handleSheetChanges}>
                <GmView style={styles.wrapper}>
                    <TokenInput />
                    <TokenReader />
                </GmView>
            </BottomSheet>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        flex: 1,
        zIndex: 1,
    },
    drawer: (borderRadius) => ({
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        paddingTop: drawerBorderRadius,
        paddingHorizontal: drawerBorderRadius,
    }),
    qrCodeWrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: "#5A5A5A",
    },
})
