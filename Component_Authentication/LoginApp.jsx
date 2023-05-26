import React, { useState } from 'react';
import JoinApp from './JoinApp';

const LoginApp = (props) => {
  const [inputIdValue, setInputIdValue] = useState(''); //ID값 저장
  const [inputPassValue, setInputPassValue] = useState(''); //PW값 저장
  const [JoinShowValue, setJoinShowValue] = useState(false); //JoinApp component로 이동
  const [customerData, setcustomerData] = useState([]); //회원 정보 저장
  
  const mainLogin = () => { //로그인 처리 로직
    if(inputIdValue === '') {
      alert(`아이디를 입력하세요.`)
    } else if(inputPassValue === '') {
      alert(`비밀번호를 입력하세요.`)
    }
    for(let i = 0; i < customerData.length; i++) {
      const userTest = customerData[i]
      if (userTest.inputIdValue === inputIdValue && userTest.inputPassValue === inputPassValue) {
        alert(`성공적으로 로그인 되었습니다.`);
        props.setAppSongMainShow(true);
      } else if (userTest.inputIdValue === inputIdValue || userTest.inputPassValue === inputPassValue) {
        alert(`잘못 입력하였습니다.`);
      }
    }
  } 

  const onJoin = (data) => {
    setcustomerData([...customerData, data]);
    setInputIdValue(''); //LoginApp ID값 빈셀
    setInputPassValue(''); //LoginAPp PW값 빈셀
    for(let i = 0; i < customerData.length; i++) {
      const userTest = customerData[i]
        if(userTest.inputIdValue === '' && userTest.inputPassValue === '') {
          setJoinShowValue(true);  //빈셀인데도 회원가입 버튼을 누르면 로그인화면으로 이동 방지
        } else{
          setJoinShowValue(false); //LoginApp 컴포넌트 Show
          alert(`회원가입이 성공적으로 이루어졌습니다. 
          \n ${userTest.inputIdValue}님 안녕하세요.`)
        }
      }
  };

  const JoinClick = () => {
    setJoinShowValue(true);
  };
  
  return (
    <div>
      {!JoinShowValue ? ( //JoinShowValue === true
        <div>
          <div>
            <label>아이디 : </label>
            <input
              type="text"
              value={inputIdValue}
              placeholder='아이디를 입력하세요.'
              onChange={(e) => {
                setInputIdValue(e.target.value);
              }}
            />
          </div>
          <div>
            <label>비밀번호 : </label>
            <input
              type="password"
              value={inputPassValue}
              placeholder='비밀번호를 입력하세요.'
              onChange={(e) => {
                setInputPassValue(e.target.value);
              }}
            />
          </div>
          <button onClick={mainLogin}>로그인</button>
          <button onClick={JoinClick}>회원가입</button>
      </div>
      ) : (
      <JoinApp onJoin = {onJoin}/>
      )
    }
    </div>
    )
}

export default LoginApp
