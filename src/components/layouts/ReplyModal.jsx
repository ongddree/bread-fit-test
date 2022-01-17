import Link from 'next/link';
import { PALLETS, ROUTES } from '../../constants';
import styled from '@emotion/styled';
import { useState } from 'react';
export const Replymodal = () => {
  const [isActive, setActive] = useState('false');
  const [count, setCount] = useState(0);
  const [isDisplay, setDisplay] = useState('false');

  const handleToggle = () => {
    if (count === 0) {
      setCount(count + 1);
      setActive(!isActive);
    } else {
      setCount(count - 1);
      setActive(!isActive);
    }
  };

  const onToggle = () => {
    setDisplay(!isDisplay);
  };

  return (
    <Replymodals>
      <div className="cont-home-post-feed">
        <button
          id="likeCount"
          onClick={handleToggle}
          className={`${!isActive ? 'click' : null}`}
        ></button>
        <p>{count}</p>
        <button id="btnReply" onClick={onToggle}></button>
        <p>1</p>
      </div>
      <p className="date">2021년 12월 21일</p>
      <ul className={`cont-home-comment-list ${!isDisplay ? 'on' : null} `}>
        <li>
          <div>
            <img src="/assets/logo.png" alt="" />
            <span>영등포구 빵농장</span>
            <small>12일전</small>
            <button></button>
          </div>
          <p>게시글 답변~~!!! 최고최고</p>
        </li>
      </ul>
    </Replymodals>
  );
};

const Replymodals = styled.section`
  .cont-home-post-feed {
    display: flex;
    margin:0 0 20px 54px;
    #likeCount {
      background: url(/assets/icon/icon-heart.png) no-repeat;
      background-size: contain;
      width: 22px;
      height: 22px;
      &.click {
        background: url(/assets/icon/icon-heart-active.png) no-repeat;
      }
    }
    #btnReply {
      background: url(/assets/icon/icon-message-circle.png);
      width: 22px;
      height: 22px;
    }
    p {
      margin:5px 10px;
    }
  }
  .date {
    margin: 18px 0 30px 54px;
    font-size: 10px;
  }
  .cont-home-comment-list {
    border-top: 1px solid ${PALLETS.GRAY};
    position: relative;
    display: none;
    &.on {
      display: block;
      margin-left: 2px;
    }
    li{
      padding-bottom: 20px;
    }
    div {
      display: flex;
      padding: 15px 16px;
      img {
        width: 36px;
        height: 36px;
        margin-top: -10px;
      }
      span {
        font-size: 14px;
        margin-right: 3px;
      }
      small {
        font-size: 10px;
        margin: 3px;
        color: ${PALLETS.GRAY};
      }
      button {
        background: url(/assets/icon/icon-more-vertical.png);
        width: 15px;
        height: 15px;
        position: absolute;
        right: 10px;
      }
    }
  }
  p {
    margin: 4px 64px;
    color: #000;
  }
}
`;
