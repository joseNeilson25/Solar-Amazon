import { RegularText } from "../../../../components/Typography"
import {ConfirmationSectionContainer} from "./styles"
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { Button } from "../../../../components/Button";
import { NavLink } from "react-router-dom";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
    const { cartItemsTotal } = useCart();
    const cartTotal = DELIVERY_PRICE + cartItemsTotal;
  
    const formattedItemsTotal = formatMoney(cartItemsTotal);
    const formattedCartTotal = formatMoney(cartTotal);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

    const { cleanCart } = useCart();
  
    function limparcarrinho() {
      cleanCart();
    }

    return(
        <ConfirmationSectionContainer>
        <div>
          <RegularText size="s">Total de itens</RegularText>
          <RegularText>R$ {formattedItemsTotal}</RegularText>
        </div>
        <div>
          <RegularText size="s">Entrega</RegularText>
          <RegularText>R$ {formattedDeliveryPrice}</RegularText>
        </div>
        <div>
          <RegularText weight="700" color="subtitle" size="l">
            Total
          </RegularText>
          <RegularText weight="700" color="subtitle" size="l">
            R$ {formattedCartTotal}
          </RegularText>
        </div>
        <NavLink to="/">
          <Button 
            onClick={limparcarrinho} text={"Finalizar"} 
              />
        </NavLink>
        </ConfirmationSectionContainer>
    )
}