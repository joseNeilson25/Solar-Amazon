import { TitleText } from "../../../../components/Typography";
import { CompleteOrderFormContainer } from "./style";

export function CompleteOrderForm(){
    return(
        <CompleteOrderFormContainer className="container">
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>
        </CompleteOrderFormContainer>
    )
}