import { useState } from 'react';
import styled from 'styled-components';

import Card from './card';

const Container = styled.div<{modalHeight: number}>`
  width: 100%;
  height: ${({modalHeight}) => modalHeight}px;

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
  justify-content: space-around;

  scrollbar-width: none;
	
	::-webkit-scrollbar{
		display: none;
	}
`;

const ModeWrapper = styled.div`
  width: 85%;
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

const SlideModal = ():JSX.Element => {
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div style={{width: '10%', height: 100, backgroundColor: '#727272'}}/>
        </CardWrap>
      </Container>
  );
}

export default SlideModal;
