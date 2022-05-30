import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 400px;

  position: absolute;
  background-color: #83999F;
  z-index: 100;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  z-index: 200;
`;

const SelectBtn = styled.button`
  width: 140px;
  height: 30px;

  background-color: #83999F;

  border: none;
  border-radius: 10px;

  font-weight: bold;
  font-size: 18px;
`;

const SelectBtnWrapper = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;

`;

const Img = styled.img`
  width: 80%;
  height: 180px;

  border-radius: 30px;
`;

const Description = styled.div`
  width: 80%;
  height: 80px;
`;

interface IAddModal {
  setDetailCourseFlag: Function,
  setAddCourseFlag: Function,
}

const DeatilCourseModal = ({ setDetailCourseFlag, setAddCourseFlag }: IAddModal):JSX.Element => {

  const startCourseHandler = () => {
    setAddCourseFlag(false);
    setDetailCourseFlag(false);
  }

  return (
    <Container>
      <p style={{margin: 0, color: '#FFFFFF', fontWeight: 'bold', fontSize: 18}}>{"A 분식집까지 가는 길"}</p>
      <Img src={`${process.env.PUBLIC_URL}/course2.png`} />
      <Description>
        <p style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 15}}>코스 설명</p>
        <p style={{color: '#FFFFFF'}}>대로에서 은행로를 따라 A분식집까지 가는 코스입니다.</p>
      </Description>
      <SelectBtnWrapper>
        <SelectBtn onClick={() => setDetailCourseFlag(false)}>{"다른 코스 보기"}</SelectBtn>
        <SelectBtn onClick={startCourseHandler}>{"코스 시작하기"}</SelectBtn>
      </SelectBtnWrapper>
    </Container>
  );
}

export default DeatilCourseModal;
