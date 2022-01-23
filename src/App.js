import React from "react";
import Perfil from "./components/Perfil/Perfil";

const dadosPessoa = {
  nome: "April Kelly",
  foto: "https://randomuser.me/api/portraits/women/71.jpg",
  descricao: "Desenvolvedora e Designer",
  like: false,
  artigos: [
    {
      titulo: "Como passar props",
      descricao: "Nesse artigo discutiremos sobre componentes e props"
    },
    {
      titulo: "O que é state",
      descricao: "Hoje falaremos sobre estados locais dos componentes"
    },
    {
      titulo: "Criando redes sociais",
      descricao:
        "Você já ouviu falar no Facebook? Sabia que ele é uma rede social?"
    }
  ]
};

export default class App extends React.Component {
  state = {
    pessoa: dadosPessoa
  };

  mudaLike = () => {
    const novaPessoa = { ...this.state.pessoa, like: !this.state.pessoa.like };
    this.setState({ pessoa: novaPessoa });
  };

  render() {
    return <Perfil dados={this.state.pessoa} mudaLike={this.mudaLike} />;
  }
}
