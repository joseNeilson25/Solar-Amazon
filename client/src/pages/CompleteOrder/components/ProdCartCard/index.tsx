import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContext";
import { ActionsContainer, ProdCartCardContainer, RemoveButton } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface ProdCartCardProps{
    coffee: CartItem
}

export function ProdCartCard({coffee}: ProdCartCardProps){
    const { changeCartItemQuantity, removeCartItem } = useCart();

    function handleIncrease() {
      changeCartItemQuantity(coffee.id, "increase");
    }
  
    function handleDecrease() {
      changeCartItemQuantity(coffee.id, "decrease");
    }

    function handleRemove() {
        removeCartItem(coffee.id);
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
                    <RemoveButton type="button" onClick={handleRemove}>
                        <Trash size={16} />
                            REMOVER
                    </RemoveButton>
                </ActionsContainer>
            </div>
        </div>
        <p>R$ {formattedPrice}</p>
    </ProdCartCardContainer>
    )
}