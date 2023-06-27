import { useState, useEffect } from "react"
import useTokenReaderStore from "../../hooks/useTokenReaderStore"
import { GmButton, GmText } from "../../ui-kit"
import { BookingDetails } from "../BookingDetails"
import { shallow } from "zustand/shallow"

export default TokenReader = () => {
    // Object pick, re-renders the component when either state.nuts or state.honey change
    const { tokenRead, bookingDetails } = useTokenReaderStore(
        (state) => ({
            tokenRead: state.tokenRead,
            bookingDetails: state.bookingDetails,
        }),
        shallow,
    )

    if (!tokenRead) {
        return <GmText>Veuillez scanner une contremarque</GmText>
    }

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
