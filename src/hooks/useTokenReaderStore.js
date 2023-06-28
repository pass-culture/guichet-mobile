import { create } from "zustand"
import getBookingDetails, {
    defaultBookingDetails,
} from "../api/getBookingDetails"

const initialStore = {
    resetKey: 0,
    tokenRead: "",
    tokenReadErrorCode: 0,
    bookingDetails: defaultBookingDetails,
    currentDrawerIndex: 0,
}

const useTokenReaderStore = create((set, get) => ({
    ...initialStore,
    resetTokenRead: () =>
        set((state) => ({
            ...initialStore,
            resetKey: state.tokenRead + Date.now(),
        })),
    isTokenExist: () => get().tokenRead.length > 0,
    isTokenValid: () => {
        const { tokenRead, bookingDetails, tokenReadErrorCode } = get()
        return (
            tokenRead.length > 0 &&
            tokenReadErrorCode === "200" &&
            bookingDetails !== defaultBookingDetails
        )
    },
    isTokenAlreadyScanned: () => {
        const { tokenRead, bookingDetails, tokenReadErrorCode } = get()
        return (
            tokenRead.length > 0 &&
            tokenReadErrorCode === "410" &&
            bookingDetails !== defaultBookingDetails
        )
    },
    readToken: (newToken) => {
        let apiResult = undefined
        if (newToken.length === 6) {
            apiResult = getBookingDetails(newToken)
            set({
                tokenRead: newToken,
                ...apiResult,
            })
        }
    },
    readTokenFromQr: (newToken) => {
        get().readToken(newToken)
        set({ resetKey: -1, tokenRead: newToken })
        get().setCurrentIndex(1)
    },
    toValidate: () => {
        get().resetTokenRead()
        get().setCurrentIndex(0)
    },
    toInvalidate: () => {
        get().resetTokenRead()
    },
    toRetry: () => {
        get().resetTokenRead()
    },
    setCurrentIndex: (newIndex) => {
        set({ currentDrawerIndex: newIndex })
    },
}))

export default useTokenReaderStore
