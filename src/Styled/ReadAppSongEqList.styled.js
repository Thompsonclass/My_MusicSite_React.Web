import styled from "styled-components"

export const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const AudioControls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
`;

export const Audio = styled.audio`
  width: 60%;
`;

export const AnalyzeButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;