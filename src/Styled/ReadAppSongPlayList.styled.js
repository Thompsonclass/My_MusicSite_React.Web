import styled from "styled-components";

export const SongPlayerContent = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 20px;
`;

export const SongTitle = styled.h3 `
  font-size: 20px;
`;

export const SongImg = styled.img `
  width: 40px;
  height: 50px;
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
  width: 115em;
  border-collapse: collapse; /* 테이블 테두리룰 합칩니다.*/
`;

export const TableRow = styled.tr `
  background-color: #f2f2f2;
  border: 2px solid black;
  height: 10em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  margin-bottom: 10px;
  background-color: #999999;
`;

export const TableCell = styled.td `
  padding: 10px;
`;

export const StyledBtn = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`;