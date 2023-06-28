import { View, StyleSheet } from "react-native"

export default GmLeft = ({ children, style: customStyle }) => {
    return <View style={{ ...styles.gmView, ...customStyle }}>{children}</View>
}

const styles = StyleSheet.create({
    gmView: { width: "50%" },
})
