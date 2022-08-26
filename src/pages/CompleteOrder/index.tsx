import { CompleteOrderContainer } from "./styles";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedProd } from "./components/SelectedProd";

export function CompleteOrderPage(){
    return(
        <CompleteOrderContainer className="container">
            <CompleteOrderForm />
            <SelectedProd />
        </CompleteOrderContainer>
    )
}