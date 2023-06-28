import { StyleSheet } from "react-native"
import {
    GmText,
    GmGmView,
    drawerBorderRadius,
    drawerHeight,
} from "../src/ui-kit/index"
import { QrCode, TokenInput, TokenReader } from "../src/components"
import * as ScreenOrientation from "expo-screen-orientation"

export default function Home() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    return (
        <>
            <GmView style={styles.qrCodeWrapper}>
                <QrCode style={styles.qrCodeWrapper} />
            </GmView>
            <GmView style={styles.wrapper}>
                <GmView style={styles.drawer}>
                    <TokenInput />
                    <TokenReader />
                </GmView>
            </GmView>
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
    drawer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: drawerHeight,
        backgroundColor: "white",
        borderTopLeftRadius: drawerBorderRadius,
        borderTopRightRadius: drawerBorderRadius,
        paddingTop: drawerBorderRadius,
        paddingHorizontal: drawerBorderRadius,
    },
    qrCodeWrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: "#5A5A5A",
    },
})
