import { TitleText } from "../../../../components/Typography";
import { ProdCard } from "../ProdCard";
import { OurProdContainer, ProdList } from "./styles";
import { coffees } from "../../../../data/coffees";

export function OurProd(){
    return(
        <OurProdContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos produtos
            </TitleText>
            <ProdList>
                    {coffees.map((coffee) => (
                    <ProdCard key={coffee.id} coffee={coffee} />
                ))}
            </ProdList>
        </OurProdContainer>
    )
}