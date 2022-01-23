import React from "react";
import { TituloArtigo, ContainerArtigo, DescricaoArtigo } from "./styled";

const CardArtigo = (props) => {
  return (
    <ContainerArtigo>
      <TituloArtigo>{props.titulo}</TituloArtigo>
      <DescricaoArtigo>{props.descricao}</DescricaoArtigo>
    </ContainerArtigo>
  );
};

export default CardArtigo;
