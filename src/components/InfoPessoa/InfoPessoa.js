import React from "react";
import {
  ContainerInfo,
  ImagemPerfil,
  Descricao,
  NomePessoa,
  ContainerTextoPerfil
} from "./styled";
import BotaoLike from "../BotaoLike/BotaoLike";

const InfoPessoa = (props) => {
  return (
    <ContainerInfo>
      <ImagemPerfil src={props.dados.foto} />
      <ContainerTextoPerfil>
        <NomePessoa>{props.dados.nome}</NomePessoa>
        <Descricao>{props.dados.descricao}</Descricao>
      </ContainerTextoPerfil>
      <BotaoLike isLiked={props.dados.like} mudaLike={props.mudaLike} />
    </ContainerInfo>
  );
};

export default InfoPessoa;
