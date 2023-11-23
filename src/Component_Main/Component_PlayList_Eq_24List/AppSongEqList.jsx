import React from "react";
import styled from 'styled-components';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle';
import {AppContainer} from "../../Styled/ReadAppSongEqList.styled";
import Test from './App';

const VisualizerWrapper = styled.div `
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 90%;
  border: 2px solid #000;
  background-color: #fff;
  overflow: hidden;
`;

const AppSongEqList = () => {
    return (
        <> 
        <AppSongMainTitle /> 
            <VisualizerWrapper>
                <AppContainer>
                     <Test/>
                </AppContainer>
            </VisualizerWrapper>
        </>
    );
};

export default AppSongEqList;