import styled from 'styled-components';

export const LoginAppBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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