import { TextInput, StyleSheet } from "react-native"

export default GmTextInput = ({ customStyle, ...props }) => {
    return (
        <TextInput
            {...props}
            style={{ ...styles.gmTextInput, ...customStyle }}
        />
    )
}

const styles = StyleSheet.create({
    gmTextInput: {},
})
