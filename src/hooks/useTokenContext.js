import { useState } from 'react'
import mockedBookings from "../../resources/bookingDetails.json"

const useTokenContext () => {
    const [token, setToken] = useState("")
    const [statusCode, setStatusCode] = useState("")

    const [bookingDetails, setBookingDetails] = useState(null)
    const [isTokenValid, setIsTokenValid] = useState(true)

    useEffect(() => {

        if (token.length == 6) {
            getBookingDetails(token)
        }
    }, [token])
    
    const tokenIsValid = (token) => {
        return token.length === 6 && getBookingDetails(token) != null
    }

    const resetToken = () => {
        setToken("")
    }
    

    const getBookingDetails = (token) => {
        // Token non existant
        if(token == "TKN404"){
            setStatusCode('404')
            setBookingDetails(null)
        }
        // Token déjà validé
        if(token == "TKN410"){
            setStatusCode('410')
            setBookingDetails(mockedBookings[0])
        }
        setStatusCode('200')
        setBookingDetails(mockedBookings[0])
    }

    return {token, statusCode, bookingDetails, resetToken}
}