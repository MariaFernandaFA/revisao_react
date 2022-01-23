import styled from "styled-components";

export const TituloArtigo = styled.p`
  color: #0e62b5;
  font-size: 20px;
  margin: 0 0 4px 0;
  font-weight: 600;
`;

export const DescricaoArtigo = styled.p`
  font-size: 18px;
  margin: 0;
  color: #242932;
`;

export const ContainerArtigo = styled.div`
  margin: 10px;
  background-color: #f2f7ff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #b9d3f8;
  }
`;
