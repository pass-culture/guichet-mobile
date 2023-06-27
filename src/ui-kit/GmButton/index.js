import { Button, StyleSheet } from "react-native"

export default GmButton = ({ title, onPress, customStyle }) => {
    return (
        <Button
            title={title}
            onPress={onPress}
            style={{ ...styles.gmButton, ...customStyle }}
        />
    )
}

const styles = StyleSheet.create({
    gmButton: {},
})
