import '../App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, memo } from 'react';
import axios from 'axios'; // axios 모듈을 임포트합니다
import { StyledMainHomeWrapper } from '../Component_MainHomeWrapper/Read.styled';
import { LoginAppBackground, LoginButton, LoginTitle, Label, Input } from '../Styled/ReadLogin.styled';

const LoginApp = memo(() => {
  const navigate = useNavigate();

  const [inputIdValue, setInputIdValue] = useState(''); // ID값 저장
  const [inputPassValue, setInputPassValue] = useState(''); // PW값 저장
  
  const mainLogin = async () => {
    if (inputIdValue.length === 0 || inputPassValue.length === 0) {
      alert('설정할 아이디와 비밀번호를 입력하세요.');
    }

    try {
      const response = await axios.post('http://localhost:3000/', { // 서버로 POST 요청 보내기
        inputIdValue,
        inputPassValue,
      });
  
      if (response.data.message === '로그인 성공') {
        alert('성공적으로 로그인되었습니다.');
        navigate('/main');
      } else {
        alert('아이디 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      // 실패 시에 대한 처리
    }
  };
  
  return (
    <StyledMainHomeWrapper>
      <LoginAppBackground>
        <LoginTitle>
          <h1>Sign In</h1>
        </LoginTitle>
        <div>
          <Label>아이디 : </Label>
          <Input
            type="text"
            value={inputIdValue}
            placeholder='아이디를 입력하세요.'
            onChange={(e) => { setInputIdValue(e.target.value); }}
          />
        </div>
        <div>
          <Label>비밀번호 : </Label>
          <Input
            type="password"
            value={inputPassValue}
            placeholder='비밀번호를 입력하세요.'
            onChange={(e) => { setInputPassValue(e.target.value); }}
          />
        </div>
        <div>
          <LoginButton onClick={mainLogin}>로그인</LoginButton>
          <LoginButton onClick={(()=>{navigate('/Join');})}>회원가입</LoginButton>
        </div>
      </LoginAppBackground>
    </StyledMainHomeWrapper>
  );
});

export default LoginApp;
