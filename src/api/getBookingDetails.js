import mockedBookings from "../../resources/bookingDetails.json"

export const defaultBookingDetails = {
    bookingId: 0,
    dateOfBirth: "",
    datetime: "",
    ean13: "",
    email: "",
    formula: "",
    isUsed: false,
    offerId: 0,
    offerName: "",
    offerType: "",
    phoneNumber: "",
    price: 0,
    priceCategoryLabel: "",
    publicOfferId: "",
    quantity: 0,
    theater: {
        film_id: 0,
        salle_id: 0,
    },
    userName: "",
    venueAddress: "",
    venueDepartmentCode: "",
    venueName: "",
}

const getBookingDetails = (tokenRead) => {
    // Token non existant
    if (tokenRead == "TKN404") {
        return { tokenReadErrorCode: "404", bookingDetails: null }
    }
    // Token déjà validé
    else if (token == "TKN410") {
        return { tokenReadErrorCode: "410", bookingDetails: mockedBookings[0] }
    } else {
        return { tokenReadErrorCode: "200", bookingDetails: mockedBookings[0] }
    }
}

export default getBookingDetails
