import { Button } from "../../../../components/Button"
import { RegularText } from "../../../../components/Typography"
import {ConfirmationSectionContainer} from "./styles"

export function ConfirmationSection() {
    return(
    <ConfirmationSectionContainer>
        <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText>R$ 9,90</RegularText>
        </div>
        <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText>R$ 3,50</RegularText>
        </div>
        <div>
            <RegularText size="s">Total</RegularText>
            <RegularText>R$ 29,90</RegularText>
        </div>
        <Button text="Confirmar Pedido" />
    </ConfirmationSectionContainer>
    )
}