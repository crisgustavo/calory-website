import { DefaultLeftLinks } from "./styles";
import NoBorderButton from "../NoBorderButton";

function LeftLinks() {
    return(
        <DefaultLeftLinks>
            <NoBorderButton>CADASTRO</NoBorderButton>
            <NoBorderButton>AGRÍCOLA</NoBorderButton>
            <NoBorderButton>LOGIN</NoBorderButton>
        </DefaultLeftLinks>
    )
}

export default LeftLinks