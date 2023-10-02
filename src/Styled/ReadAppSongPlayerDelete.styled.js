import styled from "styled-components";


export const DeleteWallpaper = styled.div`
    display: flex;
    justify-content: center; /* 가로 가운데로 정렬 */
    align-items: center; /* 세로 가운데로 정렬 */
    height: 5em;
    margin-left: 10px;
    width: 10em;
`;

export const ButtonAllDelete = styled.button`
    background-color: #333;
    color: white;
    border: none; /* 테두리 제거 */
    cursor: pointer;
    height: 4em;
    width: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #555;
    }
`;
