import { Text, View, StyleSheet } from "react-native"
import { QrCode, TokenInput, TokenReader } from "../src/components"

export default function Home() {
    return (
        <View style={styles.wrapper}>
            <QrCode />
            <View>
                <TokenInput />
            </View>
            <TokenReader />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
})
