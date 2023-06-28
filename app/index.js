import { GmButton, GmText, GmTextInput, GmView } from "../src/ui-kit"
import { Image, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from "react"
import BottomSheet from '@gorhom/bottom-sheet';
import { useRouter } from "expo-router";

export default function Login() {
    const snapPoints = useMemo(() => ['50%', '100%'], []);
    const router = useRouter();
    return (
        <LinearGradient
            colors={["#EB0055", "#320096"]}
            useAngle={true}
            angle={154}
            style={styles.loginWrapper}
        >
            <GmView style={styles.logoWrapper}>
                <GmText style={styles.logoTitle}>Guichet</GmText>
                <Image source={require("../assets/logo.png")} />
            </GmView>
            <BottomSheet snapPoints={snapPoints} index={0} >
                <GmView style={styles.loginInfosWrapper}>
                    <GmText style={styles.description}>Bienvenue sur le guichet mobile du pass Culture.</GmText>
                    <GmTextInput label="Email" placeholder="email@example.com" displayLetterCount={false}/>
                    <GmTextInput label="Mot de passe" displayLetterCount={false}/>
                    <GmButton title="Se connecter" onPress={() => router.push('/home')}/>
                </GmView>
            </BottomSheet>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    loginWrapper: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        paddingTop: 120,
    },
    logoWrapper:{
        
    },
    logoTitle: {
        fontSize: 26,
        fontWeight: 800,
        lineHeight: 34,
        color: "#FFFFFF",
    },
    loginInfosWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        gap: 24,
    },
    description:{
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 24,
    }


})