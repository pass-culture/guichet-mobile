import { GmTextInput, GmView } from "../../ui-kit/index"
import useTokenReaderStore from "../../hooks/useTokenReaderStore"

export default TokenInput = () => {
    const { tokenRead, readToken, resetKey,setCurrentIndex } = useTokenReaderStore()
    let props = {
        autoCapitalize: "characters",
        label: "Contremarque",
        autoCorrect: false,
        onSubmitEditing: (e) => onTokenChange(e),
        onPressIn:() => setCurrentIndex(1),
        placeholder: "ex : ABC123",
        inputMode: "text",
        keyboardType: "ascii-capable-number-pad",
        returnKeyType: "done",
        maxLength: 6,
    }
    if (resetKey === -1) {
        props = { ...props, defaultValue: tokenRead, value: tokenRead }
    }
    const onTokenChange = (e) => {
        readToken(e.nativeEvent.text)
    }
    return (
        <GmView key={resetKey}>
            <GmTextInput {...props} />
        </GmView>
    )
}
