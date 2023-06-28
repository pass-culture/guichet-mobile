import { StyleSheet } from "react-native"
import { BackButton } from "../src/components/index"
import { GmText, GmView } from "../src/ui-kit/index"

export default function History() {
    return (
        <GmView>
            <BackButton />
            <GmText>Hell</GmText>
        </GmView>
    )
}

const styles = StyleSheet.create({})
