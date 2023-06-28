import { Text, View, StyleSheet } from "react-native"

export default BookingDetails = ({
    userName,
    offerName,
    date,
    price,
    venueName,
}) => {
    return (
        <GmView style={styles.bookingDetailsWrapper}>
            <GmView style={styles.bookingDetailsRow}>
                <Text style={styles.bookingDetailsLabel}>Utilisateur : </Text>
                <Text style={styles.bookingDetailsValue}>{userName}</Text>
            </GmView>
            <GmView style={styles.bookingDetailsRow}>
                <Text style={styles.bookingDetailsLabel}>Offre : </Text>
                <Text style={styles.bookingDetailsValue}>{offerName}</Text>
            </GmView>
            <GmView style={styles.bookingDetailsRow}>
                <Text style={styles.bookingDetailsLabel}>Date de l'offre : </Text>
                <Text style={styles.bookingDetailsValue}>{date}</Text>
            </GmView>
            
            <GmView style={styles.bookingDetailsRow}>
                <Text style={styles.bookingDetailsLabel}>Prix : </Text>
                <Text style={styles.bookingDetailsValue}>{price}</Text>
            </GmView>

            <GmView style={styles.bookingDetailsRow}>
                <Text style={styles.bookingDetailsLabel}>Lieu : </Text>
                <Text style={styles.bookingDetailsValue}>{venueName}</Text>
            </GmView>
        </GmView>
    )
}

const styles = StyleSheet.create({
    bookingDetailsWrapper: {
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        shadowColor: "#25026c",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
        shadowOpacity: 0.15,
        padding: 16,
        width: "100%",
    },
    bookingDetailsRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bookingDetailsLabel: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: 500,
        color: "#696A6F",
    },
    bookingDetailsValue: {
    }
})
