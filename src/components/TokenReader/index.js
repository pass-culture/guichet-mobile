import { useState, useEffect } from "react"
import useTokenReaderStore from "../../hooks/useTokenReaderStore"
import { GmButton, GmText } from "../../ui-kit"
import BookingDetails from "../BookingDetails"
import { shallow } from "zustand/shallow"

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
                <>
                    <GmText>Déjà validé</GmText>
                    <BookingDetails
                        userName={bookingDetails.userName}
                        offerName={bookingDetails.offerName}
                        date={bookingDetails.datetime}
                        price={bookingDetails.price}
                        venueName={bookingDetails.venueName}
                    />
                    <GmButton title="Invalider" onPress={toInvalidate} />
                </>
            )
        }

        return isTokenValid() ? (
            <>
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
            </>
        ) : (
            <>
                <GmText>La contremarque n'existe pas</GmText>
                <GmButton title="Reessayer" onPress={toRetry} />
            </>
        )
    }

}
