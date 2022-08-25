import { TitleText } from "../../../../components/Typography";
import { ProdCard } from "../ProdCard";
import { OurProdContainer, ProdList } from "./styles";

export function OurProd(){
    return(
        <OurProdContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos produtos
            </TitleText>
            <ProdList>
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />
            </ProdList>
        </OurProdContainer>
    )
}