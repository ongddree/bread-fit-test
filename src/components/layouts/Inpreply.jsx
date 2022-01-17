import Link from 'next/link';
import { PALLETS, ROUTES } from '../../constants';
import styled from '@emotion/styled';

export const Inpreply = () => {
  return (
    <Inpreplys>
      <img src="/assets/logo.png" alt="user-profile" />
      <input type="text" placeholder="댓글 입력하기..." />
      <button>게시</button>
    </Inpreplys>
  );
};

const Inpreplys = styled.section`
  width: 390px;
  height: 61px;
  padding: 12px 16px 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${PALLETS.GRAY};
  position: fixed;
  bottom: 0;
  img {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background-color: ${PALLETS.LIGHTGRAY};
  }
  input {
    width: 250px;
    border: none;
    margin-left: 18px;
  }
`;
