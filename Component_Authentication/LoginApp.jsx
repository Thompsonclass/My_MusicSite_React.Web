import React, { useState } from 'react';
import JoinApp from './JoinApp';

const LoginApp = () => {
  const [inputIdValue, setInputIdValue] = useState(''); //ID값 저장
  const [inputPassValue, setInputPassValue] = useState(''); //PW값 저장
  const [JoinShowValue, setJoinShowValue] = useState(false); //JoinApp component로 이동
  const [customerData, setcustomerData] = useState('');
  
  const mainLogin = () => {

  }

  const onJoin = (data) => {
    setcustomerData([...customerData, data]);
    inputIdValue('');
    inputPassValue('');
  }

  const JoinClick = () => {
    setJoinShowValue(true);
  }

  return (
    <div>
      {!JoinShowValue?( //JoinShowValue === true
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
      ) : (<JoinApp onJoin = {onJoin}/>)}
    </div>
  )
}

export default LoginApp
