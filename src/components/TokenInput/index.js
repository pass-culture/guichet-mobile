import { TextInput, Text } from "react-native"

export default TokenInput = ({ setToken, onTokenChanged }) => {
    const { token, setToken } = useToken(onTokenChanged)
    const onTokenChange = (e) => {
        setToken?.(e.nativeEvent.text)
    }
    return (
        <>
            <TextInput
                autoCapitalize="characters"
                autoCorrect={false}
                onSubmitEditing={onTokenChange}
                placeholder="ex : ABC123"
                inputMode="text"
                keyboardType="ascii-capable-number-pad"
                returnKeyType="done"
                maxLength={6}
                value={token}
            />
        </>
    )
}
