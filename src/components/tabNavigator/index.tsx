import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ImRoad } from 'react-icons/im';
import { MdWarning, MdSettings } from 'react-icons/md';

const Container = styled.div`
  width: 100%;
  height: 50px;

  background-color: #727272;
  border-top: 2px solid #C4C4C4;

  position: absolute;
  bottom: 0px;

  z-index: 3;

  z-index: 200;
`;

const IconDiv = styled.div`
  margin: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const BottomNavigator = ():JSX.Element => {
  const navigate = useNavigate();
  return (
    <Container>
      <IconDiv>
        <ImRoad size={35} onClick={()=>navigate('/course')}/>
        <MdWarning size={35} onClick={()=>navigate('/caution')}/>
        <MdSettings size={35} />
      </IconDiv>
    </Container>
  );
}

export default BottomNavigator;
