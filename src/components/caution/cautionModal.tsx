import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 350px;

  position: absolute;
  background-color: #727272;
  z-index: 100;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  border-radius: 30px;
`;

const CancelBtn = styled.button`
  background-color: red;
  width: 30px;
  height: 30px;

  border-radius: 30px;
  color: white;

  float: right;

`;

const Img = styled.img`
  width: 180px;
  height: 180px;
`;

const ImgWrapper = styled.div`
  width: 180px;

  transform: translate(60px, 40px);
`;

interface ICautionModal {
  setWarnModalFlag: Function
}

const CautionModal = ({setWarnModalFlag}: ICautionModal):JSX.Element => {

  return (
    <Container>
      <CancelBtn onClick={() => setWarnModalFlag(false)}>{"X"}</CancelBtn>
      <ImgWrapper>
        <Img src={`${process.env.PUBLIC_URL}/warning2.png`} />
        <p style={{margin: 0, textAlign: 'center', color: '#FFFFFF'}}>{`2022년 5월 21일 08:30`}</p>
        <p style={{margin: 0, textAlign: 'center', color: '#FFFFFF'}}>{"🚧 공사중...🚧 "}</p>
      </ImgWrapper>
    </Container>
  );
}

export default CautionModal;
