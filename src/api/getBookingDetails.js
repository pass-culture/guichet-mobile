import mockedBookings from "../../resources/bookingDetails"

export const defaultBookingDetails = null

const getBookingDetails = (tokenRead) => {
    // Token non existant
    if (tokenRead == "TKN404") {
        return { tokenReadErrorCode: "404", bookingDetails: null }
    }
    // Token déjà validé
    else if (tokenRead == "TKN410") {
        return { tokenReadErrorCode: "410", bookingDetails: mockedBookings[0] }
    } else {
        return { tokenReadErrorCode: "200", bookingDetails: mockedBookings[0] }
    }
}

export default getBookingDetails
