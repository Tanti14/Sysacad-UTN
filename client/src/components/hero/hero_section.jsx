import React from "react";
import { CardButton } from "../card_button/card_button";
import { ButtonsContainer, StyledHeroSection } from "./styles";
import subjectslogo from "../../assets/button-icons/plansubjects.png";
import estadoacademico from "../../assets/button-icons/estadoacademico.png";
import examenes from "../../assets/button-icons/examenes.png";
import paraCursar from "../../assets/button-icons/correlative.png";
import paraRendir from "../../assets/button-icons/pararendir.png";
import descargar from "../../assets/button-icons/download.png";
import InscExamen from "../../assets/button-icons/inscripcionexamen.png";
import InscCursado from "../../assets/button-icons/inscripcioncursado.png";

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <ButtonsContainer>
        <CardButton img={subjectslogo} text={"Materias del Plan"} />
        <CardButton img={estadoacademico} text={"Estado Acadmico"} />
        <CardButton img={examenes} text={"Exámenes"} />
        <CardButton img={paraCursar} text={"Correlatividad para cursar"} />
        <CardButton img={paraRendir} text={"Correlatividad para rendir"} />
        <CardButton img={descargar} text={"Descargar Certificados"} />
        <CardButton img={InscExamen} text={"Inscripción a examen"} />
        <CardButton img={InscCursado} text={"Inscripción a cursado"} />
      </ButtonsContainer>
    </StyledHeroSection>
  );
};
