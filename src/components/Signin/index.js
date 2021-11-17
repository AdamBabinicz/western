import React from "react";
import {
  Container,
  Icon,
  ServicesContainer,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH3,
  ServicesP,
  Img,
} from "./SigninElements";
import Icon0 from "../../images/21.jpg";
import Icon1 from "../../images/16.jpg";
import Icon2 from "../../images/17.jpg";
import Icon3 from "../../images/18.jpg";
import Icon4 from "../../images/7.jpg";
import Icon5 from "../../images/19.jpg";
import Icon6 from "../../images/22.jpg";
import Icon7 from "../../images/20.jpg";
import Icon8 from "../../images/24.jpg";
import Icon9 from "../../images/25.jpg";
import Icon10 from "../../images/26.jpg";
import Icon11 from "../../images/27.jpg";
import img from "../../images/4.png";

const Filmy = () => {
  return (
    <>
      <ServicesContainer id="filmy">
        <Container>
          <Icon to="/">dziki zachód</Icon>
          <Img src={img} alt="..." />
        </Container>
        <ServicesH2>Westerny wszech czasów</ServicesH2>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon11} />
            <ServicesH3>Dyliżans</ServicesH3>
            <ServicesP>1939</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon0} />
            <ServicesH3>Rzeka czerwona</ServicesH3>
            <ServicesP>1949</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH3>W samo południe</ServicesH3>
            <ServicesP>1952</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon9} />
            <ServicesH3>Vera Cruz</ServicesH3>
            <ServicesP>1954</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH3>Poszukiwacze</ServicesH3>
            <ServicesP>1956</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH3>Rio Bravo</ServicesH3>
            <ServicesP>1959</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH3>Siedmiu wspaniałych</ServicesH3>
            <ServicesP>1960</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH3>El Dorado</ServicesH3>
            <ServicesP> 1966</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH3>Powrót rewolwerowca</ServicesH3>
            <ServicesP> 1967</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon7} />
            <ServicesH3>Pewnego razu na dzikim zachodzie</ServicesH3>
            <ServicesP>1968</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon8} />
            <ServicesH3>Był sobie łajdak</ServicesH3>
            <ServicesP>1970</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon10} />
            <ServicesH3>Joe Kidd</ServicesH3>
            <ServicesP>1972</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Filmy;
