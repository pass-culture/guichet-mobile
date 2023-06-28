import { Text, Pressable, StyleSheet } from "react-native"

export default GmButton = ({ title, onPress, customStyle, variant='PRIMARY' }) => {
    const variantStyle = variant === 'PRIMARY' ? styles.gmButtonPrimary : styles.gmButtonSecondary
    const variantTextStyle = variant === 'PRIMARY' ? styles.gmButtonTextPrimary : styles.gmButtonTextSecondary
    return (
        <Pressable onPress={onPress} style={{ ...styles.gmButton, ...customStyle, ...variantStyle }}>
            <Text style={{...styles.gmButtonText, ...variantTextStyle}}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    gmButton: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        backgroundColor:"#EB0055",
        paddingVertical: "10px",
        paddingHorizontal: "24px",
        borderRadius: "30px",
        height: "40px",
        width: "238px"
    },
    gmButtonPrimary: {
        backgroundColor:"#EB0055",
    },
    gmButtonSecondary: {
        backgroundColor:"#FFFFFF",
        border: "2px solid #EB0055"
    },
    gmButtonText: {
        size: "15px",
        height: "20px",
        font: "Montserrat",
        fontWeight: "700",
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
