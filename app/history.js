import { StyleSheet } from "react-native"
import { BackButton, BookingHistory } from "../src/components/index"
import { GmText, GmView, GmRight, GmLeft, GmH1 } from "../src/ui-kit/index"

export default function History() {
    return (
        <GmView>
            <BackButton />
            <GmView>
                <GmLeft>Structure:</GmLeft>
                <GmRight>Structure:</GmRight>
            </GmView>
            <GmView>
                <GmH1>Historique de validation</GmH1>
                {/* <BookingHistory
                    userName={"Nom"}
                    offerName={"Offre"}
                    date={"Date"}
                    price={"Price"}
                />
                <BookingHistory
                    userName={"Nom"}
                    offerName={"Offre"}
                    date={"Date"}
                    price={"Price"}
                /> */}
            </GmView>
        </GmView>
    )
}

const styles = StyleSheet.create({})
