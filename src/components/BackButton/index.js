import { Pressable } from "react-native"
import { GmText } from "../../ui-kit/index"
import { useRouter } from "expo-router"

const BackButton = ({ style: customStyle }) => {
    const router = useRouter()
    return (
        <Pressable
            onPress={() => {
                router.back()
            }}
        >
            <GmView style={customStyle}>
                <GmImage source={require("./back.png")} />
            </GmView>
        </Pressable>
    )
}

export default BackButton
