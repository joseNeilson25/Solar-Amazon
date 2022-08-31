import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { ProdCartCard } from "../ProdCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedProdContainer } from "./styles";


export function SelectedProd() {
    const {cartItems} = useCart();

    return (
        <SelectedProdContainer>
            <TitleText size="xs" color="subtitle">
                Itens selecionados
            </TitleText>

            <DetailsContainer>
                {cartItems.map((item) => (
                    <ProdCartCard key={item.id} coffee={item} />
                ))}
                <ConfirmationSection />
            </DetailsContainer>
        </SelectedProdContainer>
    );
}