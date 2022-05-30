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

const CautionInput = styled.input`
  color: #FFFFFF;

  background-color: #727272;

  margin: 16px;
  border: none;

  text-align: center;

  ::placeholder{
		color: #FFFFFF;
	}
`;

const RegisterBtn = styled.button`
  width: 100px;
  height: 30px;

  background-color: #c4c4c4;

  transform: translate(100px, 35px);
  border: none;
  border-radius: 10px;
`;

interface IAddModal {
  setWarnModalFlag: Function
}

const AddModal = ({setWarnModalFlag}: IAddModal):JSX.Element => {
  const date = new Date();

  return (
    <Container>
      <CancelBtn onClick={() => setWarnModalFlag(false)}>{"X"}</CancelBtn>
      <ImgWrapper>
        <Img src={`${process.env.PUBLIC_URL}/warning1.png`} />
        <p style={{margin: 0, textAlign: 'center', color: '#8CCA92'}}>{"이미지 변경하기"}</p>
        <p style={{margin: 0, textAlign: 'center', color: '#FFFFFF'}}>{`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}`}</p>
        <CautionInput placeholder="세부 사항 입력" />
      </ImgWrapper>
      <RegisterBtn onClick={() => setWarnModalFlag(false)}>{"등록 하기"}</RegisterBtn>
    </Container>
  );
}

export default AddModal;
