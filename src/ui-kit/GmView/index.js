import { View, StyleSheet } from "react-native"

export default GmView = ({ children, customStyle }) => {
    return <View style={{ ...styles.gmView, ...customStyle }}>{children}</View>
}

const styles = StyleSheet.create({
    gmView: {},
})
