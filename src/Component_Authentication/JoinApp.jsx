import '../App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, memo } from 'react';
import Authentication from './Authentication';
import { LoginAppBackground, LoginButton, LoginTitle, Label, Input, Title } from '../Styled/ReadLogin.styled';

const JoinApp = memo(() => {
  const navigate = useNavigate();
  const [inputIdValue, setInputIdValue] = useState(''); // ID값 저장
  const [inputPassValue, setInputPassValue] = useState(''); // PW값 저장

  // 회원가입 처리 함수
  const mainJoin = async () => { // 비동기 함수 생성, 작업 순서와 상관없이 처리하고 작업이 완료시에 콜백이나 promise, async/await로 처리
    if (inputIdValue.length === 0 || inputPassValue.length === 0) {
      alert('설정할 아이디와 비밀번호를 입력하세요.');
    }
    const data = { 
      inputIdValue, // ID 저장
      inputPassValue, // PW 저장
    };

    try {
      const response = await fetch("http://localhost:3000/Join", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
      if (response.ok) {
        const responseData = await response.json();
        alert(responseData.message);
        navigate('/');
      } else {
        alert("등록에 실패했습니다");
      }
    } catch (error) {
      console.error("사용자 등록 오류:", error);
    }
  };

  return (
    <>
      <Authentication /> {/* 슬라이드 */}
      <Title>YMusic⍥</Title>
      <LoginAppBackground> {/* Styled-component */}
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
      </>
  );
});

export default JoinApp;