import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import Link from 'next/link';
import { Menuhead } from '../../components/layouts/Menuhead';
import { Replymodal } from '../../components/layouts/Replymodal';
import { Inpreply } from '../../components/layouts/Inpreply';
const PostUploadPage = () => {
  return (
    <Container>
      <Menuhead />
      <Postmain>
        <div>
          <img src="../assets/logo.png" alt="" />
          <p>서초구 소울브레드</p>
          <small>@soul_bread</small>
        </div>
        <main className="cont-home-post">
          <p>
            인생 빵맛집.. 진짜 모든빵이 다 너무맛있고..든든하고 그래요. 앙버터도
            저렇게버터듬뿍든건 첨봐요! 거기다가 달지않지만 옹골찬 팥과 쫀득하고
            짭쪼름한 프렛첼의조화가 환상입니다. 그리고 와사비 크림치즈가 들어간
            샌드위치도 매콤하니 맛있어요!!거기다가 많은분이 추천하시는
            쌩얼크치도 맛났지만 저는 베베레가 더 맛있었어요. 레몬맛과 블루베리
            맛나는 크림치즈에 키위들어간거요~
          </p>
          <img src="../assets/mandarin.jpg" alt="store-picture" />
        </main>
        <Replymodal />
      </Postmain>
      <Inpreply />
    </Container>
  );
};

export default PostUploadPage;

const Container = styled.section``;

const Postmain = styled.section`
  height: auto;
  margin: 24px 0;
  div {
    display: flex;
    font-size: 14px;
    align-items: center;
    margin-bottom: 16px;
    color: #000;
    img {
      width: 42px;
      margin-right: 12px;
    }
    small {
      font-size: 12px;
      color: ${PALLETS.GRAY};
    }
  }
  .cont-home-post {
    margin-left: 54px;
    line-height: 1.5;
    img {
      margin-top: 16px;
      width: 100%;
      height: 228px;
      border-radius: 10px;
    }
  }
`;
