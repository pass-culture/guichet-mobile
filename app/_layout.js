import { Slot } from "expo-router"
import { Text, View } from "react-native"
import { HistoryButton } from "../src/components/index"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeLayout() {
    return (
        <SafeAreaView>
            <View>
                <Slot />
            </View>
        </SafeAreaView>
    )
}
