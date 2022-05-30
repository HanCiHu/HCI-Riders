import styled, { keyframes } from 'styled-components';

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

interface ISharedCourseModal {
  setAddCourseFlag: Function,
}

const SharedCourseModal = ({setAddCourseFlag}: ISharedCourseModal):JSX.Element => {

  return (
    <Container>
      <CardWrapper>

      </CardWrapper>
      <BackBtn onClick={() => setAddCourseFlag(false)}>Back to Course</BackBtn>
    </Container>
  );
}

export default SharedCourseModal;
