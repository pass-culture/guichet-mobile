import { Image } from "react-native"
import GmText from "../GmText"
import GmView from "../GmView"

export default GmBanner = ({type='IMPORTANT', ...props}) => {

    var importantImage = require('../../../assets/important.png')
    var toKnowImage = require('../../../assets/asavoir.png')
    return (
        <GmView>
            <Image source={type == "IMPORTANT" ? importantImage : toKnowImage} />
            <GmText children={props.children}/>
        </GmView>
    )
}