import { AddCartWrapper, CardFooter, Description, Name, ProdCardContainer, Tags } from "./styles";
import { RegularText, TitleText } from "../../../../components/Typography";
import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { formatMoney } from "../../../../utils/formatMoney";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
  }

  interface CoffeeProps {
    coffee: Coffee;
  }

export function ProdCard({coffee}: CoffeeProps){

    const formattedPrice = formatMoney(coffee.price);

    return(
        <ProdCardContainer>
            <img src={`/coffees/${coffee.photo}`} alt=""/>

            <Tags>
                {coffee.tags.map((tag) => (
                <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>
            <Name>
                {coffee.name}
            </Name>
            <Description>
                {coffee.description}
            </Description>
            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        {formattedPrice}
                    </TitleText>
                </div>
                <AddCartWrapper>
                    <QuantityInput weight="fill" />
                    <button>
                        <ShoppingCart />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </ProdCardContainer>
    )
}