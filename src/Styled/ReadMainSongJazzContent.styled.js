import styled from 'styled-components';

export const JazzParentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  padding: 1em;
  background-color: #525252;
`;

export const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  color: white;
  font-weight: bold;
  font-size: 20px;
  width: 250px;
  border: 5px solid red;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;

export const SongImgContainer = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const SongTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export const DivSinger = styled.div`
  color: white;
  margin-top: 0.5em;
`;

export const LikeBtn = styled.div`
  font-size: 10px;
  margin-top: 10px;
  margin-left: 10px; 
`;

export const IconDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: center;
  align-items: center;
`;