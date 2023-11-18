import React from "react";
import {
  LogoContainer,
  StyledHeader,
  StyledNav,
  TitleContainer,
} from "./styles";
import SiglasUtn from "../../assets/logo-utn-siglas.png";

export const Navbar = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <LogoContainer>
          <img
            src={SiglasUtn}
            alt="Universidad Tecnologica Nacional FRT Siglas"
          />
        </LogoContainer>
        <TitleContainer>
          <h1>UNIVERSIDAD TECNOLOGICA NACIONAL</h1>
          <h2>FACULTAD REGIONAL TUCUMAN</h2>
        </TitleContainer>
      </StyledNav>
    </StyledHeader>
  );
};
