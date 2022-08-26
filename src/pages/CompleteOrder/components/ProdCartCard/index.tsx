import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, ProdCartCardContainer, RemoveButton } from "./styles";

export function ProdCartCard(){
    return(
    <ProdCartCardContainer>
        <div>
            <img src="https://cdn.dribbble.com/users/239755/screenshots/2476419/media/12af6dbdc389c698bc59e404cb7305ed.png?compress=1&resize=400x300" alt="" />
            <div>
                <RegularText color="subtitle">Expresso tradicional</RegularText>
                <ActionsContainer>
                    <QuantityInput quantity={0} onIncrease={function (): void {
                        throw new Error("Function not implemented.");
                    } } onDecrease={function (): void {
                        throw new Error("Function not implemented.");
                    } } />
                    <RemoveButton>
                        <Trash size={16} />
                        remover
                    </RemoveButton>
                </ActionsContainer>
            </div>
        </div>
    </ProdCartCardContainer>
    )
}