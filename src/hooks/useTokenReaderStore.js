import { create } from "zustand"
import { defaultBookingDetails, getBookingDetails } from "../api/getBookingDetails"

const initialStore = {
    tokenRead: "",
    tokenReadErrorCode: 0,
    bookingDetails: defaultBookingDetails
}

const useTokenReaderStore = create((set) => (initialStore))

export const resetTokenRead = () =>
useTokenReaderStore.setState(() => (initialStore))

export const readToken = (newToken) => {
        // if (newToken.length === 6) {
        //     getBookingDetails(newToken)
        // }
    },

export default useTokenReaderStore
