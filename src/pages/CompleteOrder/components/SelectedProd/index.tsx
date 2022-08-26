import { TitleText } from "../../../../components/Typography";
import { ProdCartCard } from "../ProdCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedProdContainer } from "./styles";

export function SelectedProd() {
    return (
        <SelectedProdContainer>
            <TitleText size="xs" color="subtitle">
                Itens selecionados
            </TitleText>

            <DetailsContainer>
                <ProdCartCard />
                <ConfirmationSection />
            </DetailsContainer>
        </SelectedProdContainer>
    );
}