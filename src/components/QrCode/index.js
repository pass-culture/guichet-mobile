import { useState, useEffect } from "react"
import { GmText, GmView, GmButton } from "../../ui-kit/index"
import { StyleSheet } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import useTokenReaderStore from "../../hooks/useTokenReaderStore"

export default QrCode = () => {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const { readToken } = useTokenReaderStore()

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === "granted")
        }

        getBarCodeScannerPermissions()
    }, [])

    const handleBarCodeScanned = ({ type, data }) => {
        readToken(data)
        setScanned(false)
    }

    if (hasPermission === null) {
        return <GmText>Requesting for camera permission</GmText>
    }
    if (hasPermission === false) {
        return <GmText>No access to camera</GmText>
    }

    return (
        <GmView style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <GmView style={styles.overlay}>
                <GmText style={styles.overlayText}>
                    Veuiller scanner une contremarque
                </GmText>
            </GmView>
        </GmView>
    )
}

const styles = StyleSheet.create({
    container: { width: "100%", height: 200, backgroundColor: "grey" },
    overlay: { position: "absolute", top: 0, left: 0 },
    overlayText: { color: "white" },
})
