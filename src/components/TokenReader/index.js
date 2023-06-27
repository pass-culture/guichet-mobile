import { useState, useEffect } from "react"
import useTokenReaderStore from "../../hooks/useTokenReaderStore"
import { GmButton, GmText } from "../../ui-kit"
import { BookingDetails } from "../BookingDetails"

export default TokenReader = () => {
    const bookingDetails = false
    // if (showDefault) {
    //     return <GmText>Veuillez scanner une contremarque</GmText>
    // }

    return bookingDetails ? (
        <>
            <BookingDetails
                userName={"userName"}
                offerName={"offerName"}
                date={"datetime"}
                price={"price"}
            />
            <GmButton title="Valider" onPress={() => {}} />
        </>
    ) : (
        <>
            <GmText>La contremarque n'existe pas</GmText>
            <GmButton title="Reessayer" onPress={() => {}} />
        </>
    )
}
