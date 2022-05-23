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
  margin-left: auto;
  margin-right: auto;
`;

const CardWrap = styled.div<{modalHeight: number}>`
  width: 90%;
  height: ${({modalHeight}) => modalHeight - 50}px;

  padding: 30px 25px 5px 25px;

  overflow: ${({modalHeight}) => {
    if (modalHeight > 170) return 'scroll';
    else return 'hidden';
  }};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ModeWrapper = styled.div`
  width: 100%;
  height: 50px;

  position: relative;
  top: 40px;

  margin: 0px 25px 0px 25px;

  display: flex;
  flex-wrap: wrap;
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
          <div style={{width: '100%', height: 50, backgroundColor: '#727272'}}/>
        </CardWrap>
      </Container>
  );
}

export default SlideModal;
