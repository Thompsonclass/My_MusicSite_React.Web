import React, { useState } from 'react';
import JoinApp from './JoinApp';

const LoginApp = () => {
  const [inputIdValue, setInputIdValue] = useState(''); //ID값 저장
  const [inputPassValue, setInputPassValue] = useState(''); //PW값 저장
  const [JoinValue, setJoinValue] = useState(null);
  
  const mainLogin = () => {

  }

  const JoinClick = () => {
    setJoinValue(JoinValue === true);
  }
  return (
    <div>
      {!JoinValue?(
        <div>
          <div>
            <label>아이디 : </label>
            <input
              type="text"
              value={inputIdValue}
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
