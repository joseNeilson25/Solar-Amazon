import { QuantityInput } from "../QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContext";
import { ActionsContainer, ProdCartCardContainer } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface ProdCartCardProps{
    coffee: CartItem
}

export function ProdCartCard({coffee}: ProdCartCardProps){
    const { changeCartItemQuantity } = useCart();

    function handleIncrease() {
      changeCartItemQuantity(coffee.id, "increase");
    }
  
    function handleDecrease() {
      changeCartItemQuantity(coffee.id, "decrease");
    }

    const coffeeTotal = coffee.price * coffee.quantity;

    const formattedPrice = formatMoney(coffeeTotal);

    return(
    <ProdCartCardContainer>
        <div>
            <img src={`/coffees/${coffee.photo}`} />
            <div>
            <RegularText color="subtitle">{coffee.name}</RegularText>
                <ActionsContainer>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={coffee.quantity}
                        size="small"
                        />

                </ActionsContainer>
            </div>
        </div>
        <p>R$ {formattedPrice}</p>
    </ProdCartCardContainer>
    )
}