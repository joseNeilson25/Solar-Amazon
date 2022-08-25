import { Description, Name, ProdCardContainer, Tags } from "./styles";

export function ProdCard(){
    return(
        <ProdCardContainer>
            <img src="https://m.media-amazon.com/images/I/81mHhjRtFJL._AC_SX425_.jpg" alt="" />
            <Tags>
                <span> tradicional </span>
                <span> com leite </span>
            </Tags>
            <Name>
                Fifine A8
            </Name>
            <Description>
                O melhor microfone 
            </Description>
        </ProdCardContainer>
    )
}