import styled from 'styled-components';

const Container = styled.div`
  width: 150px;
  height: 100px;

  background-color: #c4c4c4;

  margin: 5px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 150px;
  height: 100px;
`

const Card = ({ title, color }: { title: string, color: string }):JSX.Element => {
  return (
    <Container>
      <p style={{color, fontSize: 20, position: 'absolute', margin: 'auto'}}>{title}</p>
      <Img src={`${process.env.PUBLIC_URL}/course1.png`}/>
    </Container>
  );
}

export default Card;
