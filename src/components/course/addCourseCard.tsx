import styled from 'styled-components';

const Container = styled.div`
  width: 340px;
  height: 180px;

  background-color: #727272;

  margin: 5px;
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 30px;

  margin: 10px 20px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 30px;
`
const Description = styled.div`
  width: 100px;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  width: 100px;
  height: 30px;

  background-color: #c4c4c4;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

`;

const DetailBtn = styled.button`
  width: 100px;
  height: 30px;

  background-color: #c4c4c4;
  border-radius: 20px;
  border: none;

`

const AddCourseCard = ({ title }: { title: string }):JSX.Element => {
  return (
    <Container>
      <Img src={`${process.env.PUBLIC_URL}/course2.png`}/>
      <Description>
        <TitleWrapper>{title}</TitleWrapper>
        <p style={{margin: '5px 0', textAlign: 'center'}}>⭐️⭐️⭐️</p>
        <DetailBtn>Detail</DetailBtn>
      </Description>
    </Container>
  );
}

export default AddCourseCard;
