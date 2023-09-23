import '../App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, memo } from 'react';
import Authentication from './Authentication';
import axios from 'axios'; // axios 모듈을 임포트합니다
import { LoginAppBackground, LoginButton, LoginTitle, Label, Input, Title } from '../Styled/ReadLogin.styled';

const JoinApp = memo(() => {
  const navigate = useNavigate();
  const [inputIdValue, setInputIdValue] = useState(''); // ID값 저장
  const [inputPassValue, setInputPassValue] = useState(''); // PW값 저장

  // 회원가입 처리 함수
  const mainJoin = async () => { // 비동기 함수 생성, 작업 순서와 상관없이 처리하고 작업이 완료시에 콜백이나 promise, async/await로 처리
    if (inputIdValue.length === 0 || inputPassValue.length === 0) {
      alert('설정할 아이디와 비밀번호를 입력하세요.');
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/Join", { // 서버로 POST 요청 보내기
        inputIdValue,
        inputPassValue,
    });
  
    if (response.status === 200) { // status 코드를 확인, HTTP 상태 코드 중 200은 "OK"를 의미
      const responseData = response.data; // response.data에서 데이터를 가져옴
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