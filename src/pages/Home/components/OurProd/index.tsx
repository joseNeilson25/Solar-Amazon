import { TitleText } from "../../../../components/Typography";
import { ProdCard } from "../ProdCard";
import { OurProdContainer, ProdList } from "./styles";
import { coffees } from "../../../../data/coffees";
import { useState } from "react";

export function OurProd(){
    const [busca, setBusca] = useState('')
    const coffeesFiltrados = coffees.filter((coffees) => coffees.tags.includes(busca))

    return(
        <OurProdContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos produtos
            </TitleText>
            <select onChange={(ev) => setBusca(ev.target.value)}>
                    <option value="">Todos</option>
                    <option value="Tradicional ">Tradicional</option>
                    <option value="com leite">com leite</option>
                    <option value="Especial ">Especial</option>
                </select>
            <ProdList>
                            {coffeesFiltrados.map((coffee) => (
                            <ProdCard key={coffee.id} coffee={coffee} />
                        ))} 
            </ProdList>
        </OurProdContainer>
    )
}