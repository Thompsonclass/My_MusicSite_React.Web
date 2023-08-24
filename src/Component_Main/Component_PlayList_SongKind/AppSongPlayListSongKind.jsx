import React, { useState } from 'react';
import AppSongMainTitle from '../../Component_Title/AppSongMainTitle'; // 메인화면 제목
import styled from 'styled-components';
import { StyledMainHomeWrapper } from '../../Component_MainHomeWrapper/Read.styled'

const SongListBoxParent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function AppSongPlayListSongKind() {
  const [SongAddList, setSongAddList] = useState(['']);

  const AddSonglist = (index) => {
    const updatedList = [...SongAddList]; // SongAddList 배열의 복사본을 생성합니다.
    if (updatedList[index] === "red") {
      updatedList[index] = ""; // 배경색을 초기 상태로 되돌립니다.
    } else {
      updatedList[index] = "red"; // 배경색을 빨간색으로 설정합니다.
    }
    setSongAddList(updatedList); // 수정된 배열로 상태를 업데이트합니다.
  };

  const songTitles = [ //노래 데이터
    "제목1", "제목2", "제목3", "제목4", "제목5", "제목6",
    "제목7", "제목8", "제목9", "제목10", "제목11", "제목12"
  ];

  return (
    <StyledMainHomeWrapper> {/* 메인 배경 화면*/}
      <AppSongMainTitle />
      <React.Fragment>
      <SongListBoxParent>
        {songTitles.map((data, index) => (
          <div key={index} style={{background: SongAddList[index] }}>
            {data}
            <button onClick={() => AddSonglist(index)}>추가</button>
          </div>
        ))}
      </SongListBoxParent>
      </React.Fragment>
    </StyledMainHomeWrapper>
  );
}

export default AppSongPlayListSongKind;