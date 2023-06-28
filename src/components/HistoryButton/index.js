import { Pressable } from "react-native"
import { GmText, GmImage } from "../../ui-kit/index"
import { useRouter } from "expo-router"

const HistoryButton = ({ style: customStyle }) => {
    const router = useRouter()
    return (
        <Pressable
            onPress={() => {
                router.push("/history")
            }}
        >
            <GmView style={customStyle}>
                <GmImage source={require("./primary.png")} />
            </GmView>
        </Pressable>
    )
}

export default HistoryButton
