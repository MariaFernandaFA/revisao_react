import React from "react";
import InfoPessoa from "../InfoPessoa/InfoPessoa";
import CardArtigo from "../CardArtigo/CardArtigo";

const Perfil = (props) => {
  const artigos = props.dados.artigos.map((artigo) => {
    return (
      <CardArtigo
        key={artigo.titulo}
        titulo={artigo.titulo}
        descricao={artigo.descricao}
      />
    );
  });

  return (
    <div>
      <InfoPessoa dados={props.dados} mudaLike={props.mudaLike} />
      <hr />
      {artigos}
    </div>
  );
};

export default Perfil;
