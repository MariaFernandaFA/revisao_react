import React from "react";
import { CoracaoLike } from "./styled";
import coracaoCheio from "../../assets/coracao_cheio.png";
import coracaoVazio from "../../assets/coracao_vazio.png";

const BotaoLike = (props) => {
  return (
    <div onClick={props.mudaLike}>
      <CoracaoLike src={props.isLiked ? coracaoCheio : coracaoVazio} />
    </div>
  );
};

export default BotaoLike;
