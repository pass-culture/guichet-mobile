import { useMemo, useCallback } from 'react'
import { Dimensions, StyleSheet } from "react-native"
import {
    GmText,
    GmGmView,
    drawerBorderRadius,
    drawerHeight,
} from "../src/ui-kit/index"
import {
    QrCode,
    TokenInput,
    TokenReader,
    HistoryButton,
} from "../src/components"
import useTokenReaderStore from "../src/hooks/useTokenReaderStore"
import BottomSheet from "@gorhom/bottom-sheet"

export default function Home() {
    const snapPoints = useMemo(() => [drawerHeight, "100%"], [])
    const { currentDrawerIndex, setCurrentIndex } = useTokenReaderStore()
    const handleSheetChanges = useCallback((newIndex) => {
        setCurrentIndex(newIndex)
    }, [])
    return (
        <>
            <GmView
                style={{
                    width: 40,
                    height: 40,
                    top: "2%",
                    right: "3%",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 9,
                }}
            >
                <HistoryButton style={{ width: "100%" }} />
            </GmView>
            <GmView style={styles.qrCodeWrapper}>
                <QrCode style={styles.qrCodeWrapper} />
            </GmView>
            <BottomSheet
                style={styles.drawer(
                    currentDrawerIndex == 1 ? 0 : drawerBorderRadius,
                )}
                snapPoints={snapPoints}
                index={currentDrawerIndex}
                onChange={handleSheetChanges}
            >
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
