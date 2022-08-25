import { CompleteOrderContainer } from "./style";
import { CompleteOrderForm } from "./components/CompleteOrderForm";

export function CompleteOrderPage(){
    return(
        <CompleteOrderContainer className="container">
            <CompleteOrderForm />
        </CompleteOrderContainer>
    )
}