import { Text, View, StyleSheet } from "react-native"

export default QrCode = () => (
    <View style={styles.qrCodeWrapper}>
        <Text>This is the placeholder of the QR Code scanner</Text>
    </View>
)

const styles = StyleSheet.create({
    qrCodeWrapper: { width: "100%", height: 200, backgroundColor: "grey" },
})
