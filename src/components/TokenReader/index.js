import { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import useTokenReaderStore from "../../hooks/useTokenReaderStore"
import { GmButton, GmText, GmTextInput, GmView } from "../../ui-kit"
import BookingDetails from "../BookingDetails"
import { shallow } from "zustand/shallow"
import GmBanner from "../../ui-kit/GmBanner"

export default TokenReader = () => {
    // Object pick, re-renders the component when either state.nuts or state.honey change
    const {
        tokenRead,
        bookingDetails,
        isTokenExist,
        isTokenValid,
        isTokenAlreadyScanned,
        toValidate,
        toInvalidate,
        toRetry,
    } = useTokenReaderStore()

    if (isTokenExist()) {
        if (isTokenAlreadyScanned()) {
            return (
                <GmView style={styles.gmDetailsContainer}>
                    <GmBanner children={ "Cette contremarque a déjà été validée le 27/06/23 à 14:42. En l'invalidant, vous indiquez qu'elle n'a pas été utilisée et vous ne serez pas remboursé" } />
                    <BookingDetails
                        userName={bookingDetails.userName}
                        offerName={bookingDetails.offerName}
                        date={bookingDetails.datetime}
                        price={bookingDetails.price}
                        venueName={bookingDetails.venueName}
                    />
                    <GmButton title="Invalider la contremarque" onPress={toInvalidate} variant="SECONDARY" style={styles.ctaButton}/>
                </GmView>
            )
        }

        return isTokenValid() ? (
            <GmView style={styles.gmDetailsContainer}>
                <BookingDetails
                    userName={bookingDetails.userName}
                    offerName={bookingDetails.offerName}
                    date={bookingDetails.datetime}
                    price={bookingDetails.price}
                    venueName={bookingDetails.venueName}
                />
                <GmButton
                    title="Valider la contremarque"
                    onPress={toValidate}
                />
                <GmBanner children={ "N'oubliez pas de vérifier l'identité du bénéficiaire avant de valider la contremarque"} type='A SAVOIR' />
            </GmView>
        ) : (
            <GmView style={styles.gmDetailsContainer}>
                <GmText>La contremarque n'existe pas</GmText>
                <GmButton title="Réessayer" onPress={toRetry} />
            </GmView>
        )
    }

}

const styles = StyleSheet.create({
    gmDetailsContainer: {
        gap: 16,
        alignItems: "center",
        flex: 1,
        marginTop: 16,
    },
})
