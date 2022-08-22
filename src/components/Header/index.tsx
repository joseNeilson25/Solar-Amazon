import { HeaderContainer } from "./styles";
import logoSolar from "../../assets/logo.png"

export function Header() {
    return(
        <HeaderContainer>
            <div className="container">
                <img src={logoSolar} />
            </div>
        </HeaderContainer>
    )
}