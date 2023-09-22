import styled from 'styled-components';

export const LoginAppBackground = styled.div`
  position: absolute;
  top: 20%;
  left: 4%;

  display: flex; 
  align-items: center; /* 내용물 수평 가운데 배치*/
  justify-content: center; /* 내용물 세로 가운데 배치*/

  flex-direction: column; /* 세로 배열 */

  padding: 100px;
  border: none;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background-color: #cdcdcd;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
`;

export const Label = styled.label`
  font-weight: bold;
  margin: 20px;
`;

export const Input = styled.input`
  width: 200px;
  padding: 15px;
  margin: 15px;
  border: 3px solid #ffffff;
  border-radius: 5px;
`;

export const LoginButton = styled.button`
  background-color: #667a8f;
  color: #fff;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  font-size: 16px;

  &:hover {
    background-color: lightblue;
  }
`;

export const LoginTitle = styled.div`
  padding-bottom: 70px;
  font-size: 25px;
`;

export const Title = styled.div`
  position: absolute;
  top: 1%;
  left: 1%;
  margin-left: 2em;
  margin-top: 1em;
  font-size: 2em;
  font-weight: bold;
  color: black;
`