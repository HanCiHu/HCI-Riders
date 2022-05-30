import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FiPlusSquare } from 'react-icons/fi';

import Card from './card';
import { myCourseList, sharedCourseList } from '../../data';

const slideUpAnimation = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: none;
  }
`;

const Container = styled.div<{modalHeight: number}>`
  width: 100%;
  height: ${({modalHeight}) => modalHeight}px;

  animation: ${({modalHeight}) => modalHeight > 170 ? css`${slideUpAnimation} 1s ease-in-out` : ''};

  background-color: #727272;
  border-radius: 50px;

  position: relative;
  bottom: ${({modalHeight}) => modalHeight}px;
  z-index: 2;
`;

const SlideBtn = styled.div`
  width: 140px;
  height: 10px;

  background-color: #C4C4C4;
  border-radius: 10px;

  position: absolute;

  top: 15px;
  left: 0;
  right: 0;

  margin: 0 auto;
`;

const CardWrap = styled.div<{modalHeight: number}>`
  width: 85%;
  height: ${({modalHeight}) => modalHeight - 50}px;

  margin: 0 auto;

  position: relative;
  top: 30px;

  overflow: ${({modalHeight}) => {
    if (modalHeight > 170) return 'scroll';
    else return 'hidden';
  }};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;

  scrollbar-width: none;

	::-webkit-scrollbar{
		display: none;
	}
`;

const ModeWrapper = styled.div`
  width: 90%;
  height: 50px;

  position: relative;
  top: 40px;

  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MyCourseBtn = styled.div<{modeFlag: boolean}>`
  width: 150px;
  height: 25px;

  background-color: ${({modeFlag}) => !modeFlag ? '#FFFFFF' : '#C4C4C4'};
  margin: 5px;

  border-radius: 20px;
  text-align: center;
`;

const AddCourseCard = styled.div`
  width: 150px;
  height: 100px;

  background-color: #C4C4C4;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;
`;

interface ISlideModal {
  setAddCourseFlag: Function,
}

const SlideModal = ({setAddCourseFlag}: ISlideModal):JSX.Element => {
  const [modalHeight, setModalHeight] = useState<number>(170);
  const [courseMode, setMode] = useState<boolean>(false);

  const modalToggle = (): void => {
    if (modalHeight <= 170) setModalHeight(modalHeight + 200);
    else setModalHeight(modalHeight - 200);
  };

  const modeToggle = (): void => {
    setMode(!courseMode);
  };

  return (
      <Container modalHeight={modalHeight}>
        <SlideBtn onClick={modalToggle} />
        <ModeWrapper>
          <MyCourseBtn modeFlag={courseMode}><p style={{marginTop: 5}} onClick={modeToggle}>My Course</p></MyCourseBtn>
          <MyCourseBtn modeFlag={!courseMode}><p style={{marginTop: 5}} onClick={modeToggle}>Shared</p></MyCourseBtn>
        </ModeWrapper>
        <CardWrap modalHeight={modalHeight}>
          {!courseMode ?
          myCourseList.map((title) => <Card key={title} title={title} color={"#5C9862"}/>)
          : sharedCourseList.map((title) => <Card key={title} title={title} color={"#4F6BFF"} />)
        }
        {courseMode && <AddCourseCard onClick={() => setAddCourseFlag(true)}><FiPlusSquare size={60}/></AddCourseCard>}
          <div style={{width: '90%', height: 100, backgroundColor: '#727272'}}/>
        </CardWrap>
      </Container>
  );
}

export default SlideModal;
