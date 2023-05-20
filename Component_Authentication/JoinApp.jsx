import React, { useState} from 'react';

const JoinApp = (props) => {
  const [inputIdValue, setInputIdValue] = useState(''); //ID값 저장
  const [inputPassValue, setInputPassValue] = useState(''); //PW값 저장

  const mainJoin = () => {

  };

  return (
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
      <button onClick={mainJoin}>회원가입</button>
    </div>
  );
};

export default JoinApp;