import React from "react";
import { HeaderContainer } from "./styles";
import LogoSolar from "../../assets/solar.jpg";

export function Header() {
    return(
        <HeaderContainer>
            <div className="container">
                <img src={LogoSolar} />
            </div>
        </HeaderContainer>
    )
}