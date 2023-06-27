import { Text, View, StyleSheet } from "react-native"

export default BookingDetails = ({ userName, offerName, date, price }) => {
    return (
        <View style={styles.BookingDetailsWrapper}>
            <Text>Utilisateur : {userName}</Text>
            <Text>Offre : {offerName}</Text>
            <Text>Date de l'offre : {date}</Text>
            <Text>Utilisateur : {price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    BookingDetailsWrapper: {},
})
