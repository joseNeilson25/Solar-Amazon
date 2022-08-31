import { useState } from "react";
import { coffees } from "../../data/coffees";
import { Intro } from "./components/Intro";
import { OurProd } from "./components/OurProd";
import { HomeContainer } from "./styles";

export function HomePage(){
    const [busca, setBusca] = useState('')
    console.log(busca)
    const coffeeFiltrados = coffees.filter((coffees) => coffees.tags.includes(busca))

    return(
        <HomeContainer>
            <Intro />
            <select onChange={(ev) => setBusca(ev.target.value)}>
                <option value="Tradicional ">Tradicional</option>
                <option value="com leite">com leite</option>
                <option value="Especial ">Especial</option>
            </select>
            <ul>
                {coffeeFiltrados.map((coffee)=>(
                    <li key={coffee.id} >{coffee.tags}</li>
                ))}
            </ul>
            <OurProd />
        </HomeContainer>
    )
}