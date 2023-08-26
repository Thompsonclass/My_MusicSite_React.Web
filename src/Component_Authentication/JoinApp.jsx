import '../App.css';
import React, { useState, memo } from 'react';
import { StyledMainHomeWrapper } from '../Component_MainHomeWrapper/Read.styled';
import { LoginAppBackground, LoginButton, LoginTitle, Label, Input } from '../Styled/ReadLogin.styled';
import { useGlobalStateContext } from '../Component_GlobalState/GlobalStateContent';

const JoinApp = memo((props) => {
  const { setJoinShowValue } = useGlobalStateContext();

  const [inputIdValue, setInputIdValue] = useState(''); // ID값 저장
  const [inputPassValue, setInputPassValue] = useState(''); // PW값 저장

  const mainJoin = () => {
    if (inputIdValue.length === 0) { 
      setJoinShowValue(true);  //빈셀인데도 회원가입 버튼을 누르면 로그인화면으로 이동 방지
      alert('설정할 아이디를 입력하세요.');
    }
    if (inputPassValue.length === 0) return alert('설정할 비밀번호를 입력하세요.');
    const data = { // 테스트 할 ID와 PW
      inputIdValue, // ID
      inputPassValue, // PW
    };
    console.log("Cutomer.id : " + data.inputIdValue)
    console.log("Cutomer.pass : " + data.inputPassValue)
    props.onJoin(data); // 설정한 ID와 PW를 부모 컴포넌트로 전달, onJoin(data)함수 호출
  };

  return (
    <StyledMainHomeWrapper>
      <LoginAppBackground>
        <LoginTitle>
          <h1>Sing up</h1>
        </LoginTitle>
        <div>
          <Label>아이디 : </Label>
          <Input
            type='text'
            value={inputIdValue}
            placeholder='설정할 아이디를 입력하세요.'
            onChange={(e) => {
              setInputIdValue(e.target.value);
            }}
          />
        </div>
        <div>
          <Label>비밀번호 : </Label>
          <Input
            type='password'
            value={inputPassValue}
            placeholder='설정할 비밀번호를 입력하세요.'
            onChange={(e) => {
              setInputPassValue(e.target.value);
            }}
          />
        </div>
        <div>
            <LoginButton>로그인</LoginButton>
            <LoginButton onClick={mainJoin}>회원가입</LoginButton>
          </div>
      </LoginAppBackground>
    </StyledMainHomeWrapper>
  );
});

export default JoinApp;