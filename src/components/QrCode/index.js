import { useState, useEffect } from "react"
import { Text, View, StyleSheet, Button } from "react-native"
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
        return <Text>Requesting for camera permission</Text>
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { width: "100%", height: 200, backgroundColor: "grey" },
})
