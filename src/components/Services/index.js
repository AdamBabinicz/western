import React from "react";
import {
  ServicesContainer,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH3,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../images/11.JPG";
import Icon2 from "../../images/1.jfif";
import Icon3 from "../../images/2.jfif";
import Icon4 from "../../images/12.jpg";
import Icon5 from "../../images/13.jpg";
import Icon6 from "../../images/14.jpg";

const Services = () => {
  return (
    <>
      <ServicesContainer id="seriale">
        <ServicesH2>Seriale</ServicesH2>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH3>Strzały w Dodge City</ServicesH3>
            <ServicesP>1955–1975</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH3>Bonanza</ServicesH3>
            <ServicesP>1959–1973</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH3>The Rifleman</ServicesH3>
            <ServicesP>1958-1063</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH3>Domek na prerii</ServicesH3>
            <ServicesP>1974-1984</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH3>Ojciec Murpphy</ServicesH3>
            <ServicesP> 1981-1983</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH3>Doktor Quinn</ServicesH3>
            <ServicesP>1993–1998</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
