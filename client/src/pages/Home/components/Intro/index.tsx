import ListaCarros from "../../../../components/listaCarro";
import {IntroContainer, IntroContent} from "./styles";

  export function Intro() {
  
    return (
      <IntroContainer>  
        <IntroContent className="container">
          <div>
            
          </div>
          <ListaCarros />
        </IntroContent>
      </IntroContainer>
      );
    }