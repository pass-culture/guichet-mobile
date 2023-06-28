import { GmTextInput, GmView } from "../../ui-kit/index"
import useTokenReaderStore from "../../hooks/useTokenReaderStore"

export default TokenInput = () => {
    const { readToken, resetKey, setCurrentIndex } = useTokenReaderStore()
    const onTokenChange = (e) => {
        readToken(e.nativeEvent.text)
    }
    return (
        <GmView key={resetKey}>
            <GmTextInput
                autoCapitalize="characters"
                label="Contremarque"
                autoCorrect={false}
                onSubmitEditing={onTokenChange}
                onPressIn={() => setCurrentIndex(1)}
                placeholder="ex : ABC123"
                inputMode="text"
                keyboardType="ascii-capable-number-pad"
                returnKeyType="done"
                maxLength={6}
            />
        </GmView>
    )
}
