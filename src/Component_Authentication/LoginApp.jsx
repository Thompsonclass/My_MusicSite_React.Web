import '../App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, memo } from 'react';
import JoinApp from './JoinApp';
import { StyledMainHomeWrapper } from '../Component_MainHomeWrapper/Read.styled';
import { LoginAppBackground, LoginButton, LoginTitle, Label, Input } from '../Styled/ReadLogin.styled';

const LoginApp = memo(() => {
  const navigate = useNavigate();
  
  const [inputIdValue, setInputIdValue] = useState(''); //ID값 저장
  const [inputPassValue, setInputPassValue] = useState(''); //PW값 저장
  const [JoinShowValue, setJoinShowValue] = useState(false); //JoinApp component로 이동
  const [customerData, setcustomerData] = useState([]); //회원 정보 저장
  
  const mainLogin = () => { //로그인 처리 로직
    if(inputIdValue === '') {
      return alert(`아이디를 입력하세요.`)
    } else if(inputPassValue === '') {
      return alert(`비밀번호를 입력하세요.`)
    }
    for(let i = 0; i < customerData.length; i++) {
      const userTest = customerData[i]
      if (userTest.inputIdValue === inputIdValue && userTest.inputPassValue === inputPassValue) {
        alert(`성공적으로 로그인 되었습니다.`);
        console.log("id : " + userTest.inputIdValue);
        console.log("pass : " + userTest.inputPassValue);
  
        navigate('/main'); // 라우팅 처리
  
      } else if (userTest.inputIdValue === inputIdValue || userTest.inputPassValue === inputPassValue) {
        return alert(`잘못 입력하였습니다.`);
      }
    };
  } 
  


    const onJoin = (data) => { //회원가입 가입 로직
      setcustomerData([...customerData, data]); //저장
      if(data.inputIdValue === inputIdValue || data.inputPassValue === inputPassValue) {
        alert(`잘 못 입력하였습니다.`)
        setJoinShowValue(true);  //빈셀인데도 회원가입 버튼을 누르면 로그인화면으로 이동 방지
      } else {
        alert(`회원가입이 성공적으로 이루어졌습니다. \n ${data.inputIdValue}님 안녕하세요.`);
        setJoinShowValue(false); //LoginApp 컴포넌트 Show
      }
    };

  const JoinClick = () => {
    setJoinShowValue(true);
  };
  
  return (
    <StyledMainHomeWrapper>
      {!JoinShowValue ? ( //JoinShowValue === true
        <LoginAppBackground>
          <LoginTitle>
            <h1>Sing In</h1>
          </LoginTitle>
          <div>
            <Label>아이디 : </Label>
            <Input
              type="text"
              value={inputIdValue}
              placeholder='아이디를 입력하세요.'
              onChange={(e) => {setInputIdValue(e.target.value);}}
            />
          </div>
          <div>
            <Label>비밀번호 : </Label>
            <Input
              type="password"
              value={inputPassValue}
              placeholder='비밀번호를 입력하세요.'
              onChange={(e) => {setInputPassValue(e.target.value);}}
            />
          </div>
          <LoginButton>
            <button onClick={mainLogin}>로그인</button>
            <button onClick={JoinClick}>회원가입</button>
          </LoginButton>
      </LoginAppBackground>
      ) : (
      <JoinApp onJoin = {onJoin}/>
      )
    }
    </StyledMainHomeWrapper>
    )
  }
);

export default LoginApp;