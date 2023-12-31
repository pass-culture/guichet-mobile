import { Text, Pressable, StyleSheet } from "react-native"

export default GmButton = ({ title, onPress, style: customStyle, variant='PRIMARY' }) => {
    const variantStyle = variant === 'PRIMARY' ? styles.gmButtonPrimary : styles.gmButtonSecondary
    const variantTextStyle = variant === 'PRIMARY' ? styles.gmButtonTextPrimary : styles.gmButtonTextSecondary
    return (
        <Pressable onPress={onPress} style={{ ...styles.gmButton, ...customStyle, ...variantStyle }}>
            <Text style={{...styles.gmButtonText, ...customStyle, ...variantTextStyle}}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    gmButton: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 30,
        height: 40,
    },
    gmButtonPrimary: {
        backgroundColor:"#EB0055",
    },
    gmButtonSecondary: {
        backgroundColor:"#FFFFFF",
        borderWidth: 2,
        borderColor: "#EB0055",
    },
    gmButtonText: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    gmButtonTextPrimary: {
        color: "#FFFFFF",
    },
    gmButtonTextSecondary: {
        color: "#EB0055",
    },
})
