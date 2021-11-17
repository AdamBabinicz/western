import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          {/* <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Początki</FooterLinkTitle>
              <FooterLink to="/filmy">Filmy</FooterLink>
              <FooterLink to="/filmy">Referencje</FooterLink>
              <FooterLink to="/filmy">Kariera</FooterLink>
              <FooterLink to="/filmy">Inwestycje</FooterLink>
              <FooterLink to="/filmy">Warunki serwisowanaia</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Video</FooterLinkTitle>
              <FooterLink to="/filmy">Filmy</FooterLink>
              <FooterLink to="/filmy">Referencje</FooterLink>
              <FooterLink to="/filmy">Kariera</FooterLink>
              <FooterLink to="/filmy">Inwestycje</FooterLink>
              <FooterLink to="/filmy">Warunki serwisowanaia</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper> */}

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Video</FooterLinkTitle>
              <FooterLink
                to="//www.youtube.com/watch?v=ilDjhWgs3dM&t=9s"
                target="_blank"
                rel="noopener noreferrer"
              >
                W polu bitwy
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=jeSLq2rg7gc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ostatnia misja
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=VNOy5tRYHQU"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rio Lobo
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=-lDXdI29rrY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dyliżans
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=UIZkoZ7MCXk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dobry, zły i brzydki
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Media</FooterLinkTitle>
              <FooterLink
                to="//pl-pl.facebook.com/Westerny"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </FooterLink>
              <FooterLink
                to="//www.instagram.com/spaghettiwesternmza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=ilDjhWgs3dM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </FooterLink>
              <FooterLink
                to="//twitter.com/westernowy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </FooterLink>
              <FooterLink
                to="//pl.pinterest.com/Szynszylas/western/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              dziki zachód
            </SocialLogo>
            <WebsiteRights>
              Radom 2021 - {new Date().getFullYear()}.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com/westernhobby"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/johnwayneofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//twitter.com/filmwestern"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com/watch?v=nFeaSrmpHMk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
