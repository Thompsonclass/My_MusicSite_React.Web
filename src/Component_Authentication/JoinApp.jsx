import '../App.css';
import React, { useState, memo } from 'react';
import MainHomeWrapperGifImage from '../Component_MainHomeWrapper/MainHomeWrapper.gif' 

const JoinApp = memo((props) => {
  const [inputIdValue, setInputIdValue] = useState(''); // ID값 저장
  const [inputPassValue, setInputPassValue] = useState(''); // PW값 저장

  const mainJoin = () => {
    if (inputIdValue === '') return alert('설정할 아이디를 입력하세요.');
    if (inputPassValue === '') return alert('설정할 비밀번호를 입력하세요.');
    const data = {
      inputIdValue,
      inputPassValue,
    };
    console.log("Cutomer.id : " + data.inputIdValue)
    console.log("Cutomer.pass : " + data.inputPassValue)
    props.onJoin(data); // 설정한 ID와 PW를 부모 컴포넌트로 전달, onJoin(data)함수 호출
  };

  return (
    <MainHomeWrapperGifImage>
    <div className='LoginApp'>
      <div className='LoginTitle'>
        <h1>Sing up</h1>
      </div>
      <div>
        <label>아이디 : </label>
        <input
          type='text'
          value={inputIdValue}
          placeholder='설정할 아이디를 입력하세요.'
          onChange={(e) => {
            setInputIdValue(e.target.value);
          }}
        />
      </div>
      <div>
        <label>비밀번호 : </label>
        <input
          type='password'
          value={inputPassValue}
          placeholder='설정할 비밀번호를 입력하세요.'
          onChange={(e) => {
            setInputPassValue(e.target.value);
          }}
        />
      </div>
      <div className='LoginBtn'>
        <button onClick={mainJoin}>회원가입</button>
      </div>
    </div>
    </MainHomeWrapperGifImage>
  );
});

export default JoinApp;