import { Slot } from "expo-router"
import { Text, View } from "react-native"
import { Image, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeLayout() {
    return (
        <SafeAreaView style={styles.layout}>
            <View style={{flex: 1}}>
                <Slot />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
    },
})