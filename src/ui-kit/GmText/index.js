import { Text, StyleSheet } from "react-native"

export default GmText = ({ children, style: customStyle }) => {
    return <Text style={{ ...styles.gmText, ...customStyle }}>{children}</Text>
}

const styles = StyleSheet.create({
    gmText: {},
})
