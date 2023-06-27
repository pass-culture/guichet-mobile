import { useState, useEffect } from "react"
import mockedBookings from "../../../resources/bookingDetails.json"
import { GmButton, GmText } from "../../ui-kit"
import { getBookingDetails } from "../../../app/index"

export default TokenReader = ({ token }) => {
    const { token, validateToken, resetToken } = useTokenContext(token)

    // if (showDefault) {
    //     return <GmText>Veuillez scanner une contremarque</GmText>
    // }

    return bookingDetails ? (
        <>
            <BookingDetails
                userName={bookingDetails.userName}
                offerName={bookingDetails.offerName}
                date={bookingDetails.datetime}
                price={bookingDetails.price}
            />
            <GmButton title="Valider" onPress={validateToken} />
        </>
    ) : (
        <>
            <GmText>La contremarque n'existe pas</GmText>
            <GmButton title="Reessayer" onPress={resetToken} />
        </>
    )
}
