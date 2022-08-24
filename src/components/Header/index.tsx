import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import LogoSolar from "../../assets/solar.jpg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return(
        <HeaderContainer>
            <div className="container">
                <img src={LogoSolar} alt="" />
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Caruaru, PE
                    </HeaderButton>
                    <NavLink to="/completeOrder">
                        <HeaderButton variant="yellow">
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}