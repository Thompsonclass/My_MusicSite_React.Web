import styled from "styled-components";

export const SongPlayerContent = styled.div `
  margin-left: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
`;

export const SongTitle = styled.h3 `
  font-size: 20px;
`;

export const SongImg = styled.img `
  width: 60px;
  height: 70px;
`;

export const StyledButton = styled.button `
  padding: 10px 30px;
  margin: 0 20px;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

export const Spectrum = styled.div `
  width: 80em;
`;

export const Table = styled.table `
  width: 114em;
  border-collapse: collapse; /* 테이블 테두리룰 합칩니다.*/
`;

export const TableRow = styled.tr `
  background-color: #f2f2f2;
  border: 2px solid black;
  height: 10em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  margin-bottom: 10px;
`;

export const TableCell = styled.td `
  padding: 10px;

  &:first-child {
    width: 20%;
  }

  &:nth-child(2) {
    width: 10%;
  }

  &:nth-child(3) {
    width: 10%;
  }
  &:nth-child(4) {
    width: 60%;
  }
`;

export const StyledBtn = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`;