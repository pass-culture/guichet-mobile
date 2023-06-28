import { useState } from "react"
import { Text, TextInput, StyleSheet, View } from "react-native"

export default GmTextInput = ({ style: customStyle, displayLetterCount = true, ...props }) => {
    const [textCount, setTextCount] = useState(0)
    const inputStyle = textCount == 0 ? styles.gmPlaceholder : styles.gmTextInput
    return (
        <GmView style={{ ...styles.gmContainer, ...customStyle }}>
            <GmView style={{ ...styles.gmSubContainer, ...customStyle }}>
                <GmView style={{ ...styles.gmTextInputLabelContainer, ...customStyle }}>
                    <Text style={{ ...styles.gmTextInputLabel, ...customStyle }}>{props.label}</Text>
                </GmView>
                <GmView style={{ ...styles.gmTextInputContainer, ...customStyle }}>
                    <TextInput
                        {...props}
                        style={{ ...inputStyle, ...customStyle }}
                        onChangeText={(v) => {setTextCount(v.length)}}
                    />
                </GmView>
            </GmView>
            {displayLetterCount && (
                <GmView style={{ ...styles.gmErrorsAndCharactersContainer, ...customStyle }}>
                    <Text style={{ ...styles.gmErrorsAndCharacters, ...customStyle }}>{textCount}/6</Text>
                </GmView>
            )}
        </GmView>
    )
}

const styles = StyleSheet.create({
    gmContainer: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingHorizontal: "5%",
        gap: 10,
    },
    gmSubContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8,
        alignSelf: "stretch",
    },
    gmTextInputLabelContainer: {
        display: "flex",
        alignItems: "flex-start",
        gap: 8,
        alignSelf: "stretch",
    },
    gmTextInputLabel: {
        fontSize: 15,
        lineHeight: 20,
        color: "#161617",
    },
    gmTextInputContainer: {
        display: "flex",
        height: 40,
        paddingTop: 8,
        paddingRight: 16,
        paddingLeft: 16,
        alignSelf: "stretch",
        borderRadius: 30,
        borderColor: "#90949D",
        borderWidth: 1,
        borderStyle: "solid",
        background: "#FFF",
    },
    gmPlaceholder: {
        display: "flex",
        height: 20,
        flexDirection: "column",
        fontSize: 15,
        lineHeight: 20,
        color: "#696A6F",
        fontStyle: "italic",
    },
    gmTextInput: {
        display: "flex",
        height: 20,
        flexDirection: "column",
        fontSize: 15,
        lineHeight: 20,
        color: "#161617",
    },
    gmErrorsAndCharactersContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 4,
        alignSelf: "stretch",
    },
    gmErrorsAndCharacters: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 8,
        color: "#696A6F",
        textAlign: "right",
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 16,
    },
})
