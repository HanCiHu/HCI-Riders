import styled from 'styled-components';
import { ToggleSlider }  from "react-toggle-slider";

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

const Description = styled.textarea`
  width: 180px;
  height: 180px;

  background-color: #727272;
  border: none;

  color: #FFFFFF;
  resize: none;

  ::placeholder{
		color: #FFFFFF;
	}
`;

const DescriptionWrapper = styled.div`
  width: 180px;

  transform: translate(60px, 20px);
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

const ShareDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  transform: translateY(20px);

`;

interface IAddModal {
  setCourseModalFlag: Function
}

const AddModal = ({setCourseModalFlag}: IAddModal):JSX.Element => {

  return (
    <Container>
      <CancelBtn onClick={() => setCourseModalFlag(false)}>{"X"}</CancelBtn>
      <DescriptionWrapper>
        <CautionInput placeholder="이 코스의 이름은 ?" />
        <Description placeholder="이 코스에 대한 설명을 적어주세요." />
      </DescriptionWrapper>
      <ShareDiv>
        <span style={{transform: 'translateY(5px)', marginRight: 10, color: '#FFFFFF'}}>{"이 코스를 모두와 공유 할까요? "}</span>
        <ToggleSlider />
      </ShareDiv>
      <RegisterBtn onClick={() => setCourseModalFlag(false)}>{"저장 하기"}</RegisterBtn>
    </Container>
  );
}

export default AddModal;
