import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return(
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHZTkidZMRg5Q/company-logo_200_200/0/1646425129544?e=1669248000&v=beta&t=VZ7l7gWf7uc_lHpdN8lAwjazc4q9NI8ArH4X8uuHtTQ" alt="" />
                </NavLink>
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