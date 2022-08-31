// import { Intro } from "./components/Intro";
import ListarCarros from "../../components/listaCarro";
import { OurProd } from "./components/OurProd";
import { HomeContainer } from "./styles";

export function HomePage(){

    return(
        <HomeContainer>
            {/* <Intro /> */}
            <OurProd />
            <ListarCarros />
        </HomeContainer>
    )
}