import React, { useState } from "react";
import { Button } from "../ButtonElements";
import video from "../../videos/1.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Modal from "../Portal/Modal";

const HeroSection = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg src={video} autoPlay loop muted type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>WESTERN</HeroH1>
        <HeroP>
          Klasyczne westerny opowiadają historie dziejące się na ogół w drugiej
          połowie XIX w. na terenach, które później stały się amerykańskimi
          stanami, tzw. Dzikim Zachodzie.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            onClick={() => Toggle()}
            // to="filmy"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Czytaj {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Modal show={modal} close={Toggle} title="Westerny klasyczne">
            <p>
              Najczęściej dzieją się one w okresie od wojny secesyjnej do
              masakry nad Wounded Knee. Niekiedy jednak dotyczą one
              wcześniejszego okresu, od bitwy o Alamo (1836), zaś akcja tzw.
              późnych westernów dzieje się aż do rewolucji meksykańskiej (1913).
              Pomimo że westerny ściśłe wiązały się z konkretnym miejscem i
              okresem w historii Stanów Zjednoczonych, ich ogromna popularność
              objęła cały świat. Westerny kręcone w latach 40. i 50. podkreślały
              wartość honoru i poświęcenia.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Western</em>
            </p>
          </Modal>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
