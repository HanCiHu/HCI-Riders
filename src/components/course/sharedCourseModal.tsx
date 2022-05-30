import styled, { keyframes } from 'styled-components';

import AddCourseCard from './addCourseCard';

const slideUpAnimation = keyframes`
  from {
    transform: translateY(50%);
  }
  to {
    transform: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80%;

  animation: ${slideUpAnimation} 1s ease-in-out;

  background-color: #727272;
  border-radius: 50px;

  position: absolute;
  bottom: 10px;
  z-index: 100;

  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 85%;

  background-color: #000000;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  overflow-y: scroll;
`;

const BackBtn = styled.button`
  width: 200px;
  height: 40px;

  background-color: #c4c4c4;

  border: none;
  border-radius: 30px;

  font-size: 20px;
  color: #FFFFFF;

`;

const HiddenDiv = styled.div`
  width: 340px;
  height: 50px;

  background-color: #000000;
`;

interface ISharedCourseModal {
  setAddCourseFlag: Function,
  setDetailCourseFlag: Function,
}

const SharedCourseModal = ({ setAddCourseFlag, setDetailCourseFlag }: ISharedCourseModal):JSX.Element => {

  return (
    <Container>
      <CardWrapper>
        <HiddenDiv />
        <AddCourseCard title={"123"} setDetailCourseFlag={setDetailCourseFlag} />
        <AddCourseCard title={"123"} setDetailCourseFlag={setDetailCourseFlag}/>
        <AddCourseCard title={"123"} setDetailCourseFlag={setDetailCourseFlag}/>
        <AddCourseCard title={"123"} setDetailCourseFlag={setDetailCourseFlag}/>
        <HiddenDiv />
      </CardWrapper>
      <BackBtn onClick={() => setAddCourseFlag(false)}>Back to Course</BackBtn>
    </Container>
  );
}

export default SharedCourseModal;
