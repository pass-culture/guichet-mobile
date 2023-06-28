import { useState, useEffect } from "react"
import {
    GmText,
    GmView,
    GmButton,
    drawerHeight,
    drawerBorderRadius,
} from "../../ui-kit/index"
import { StyleSheet } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import useTokenReaderStore from "../../hooks/useTokenReaderStore"

export default QrCode = () => {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const { readToken, isTokenValid, isTokenExist } = useTokenReaderStore()
    let overlayMessage = "Veuillez scanner une contremarque"

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === "granted")
        }

        getBarCodeScannerPermissions()
    }, [])

    const handleBarCodeScanned = ({ type, data }) => {
        readTokenFromQr(data)
        setScanned(false)
    }

    if (hasPermission === null) {
        overlayMessage = "Demande de permissions d'accès à la caméra"
    }
    if (hasPermission === false) {
        overlayMessage = "Accès à la caméra refusé !"
    }

    return (
        <GmView style={styles.container}>
            {!isTokenValid() && (
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                    }
                    style={StyleSheet.absoluteFillObject}
                />
            )}
            <GmView style={styles.overlay}>
                <GmText style={styles.overlayText}>{overlayMessage}</GmText>
            </GmView>
        </GmView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        marginBottom: drawerHeight - drawerBorderRadius,
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "99%",
        justifyContent: "flex-end",
        zIndex: 1,
    },
    overlayText: {
        color: "white",
        textAlign: "center",
        paddingVertical: drawerBorderRadius,
    },
})
