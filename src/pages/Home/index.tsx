import { Intro } from "./components/Intro";
import { OurProd } from "./components/OurProd";
import { HomeContainer } from "./styles";

export function HomePage(){
    return(
        <HomeContainer>
            <Intro />
            <OurProd />
        </HomeContainer>
    )
}