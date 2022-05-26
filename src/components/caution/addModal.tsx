import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 300px;

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

interface IAddModal {
  setWarnModalFlag: Function
}

const AddModal = ({setWarnModalFlag}: IAddModal):JSX.Element => {

  return (
    <Container>
      <CancelBtn onClick={() => setWarnModalFlag(false)}>{"X"}</CancelBtn>
    </Container>
  );
}

export default AddModal;
