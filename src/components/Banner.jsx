import styled from "styled-components";
import Image from 'react-bootstrap/Image';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-origin: border-box;
  background-size: cover;
  background-position: 100%;
  width: 100%;
  height: 30vh;
  position: relative;
`;

const Wrapper = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: end;
  width: 100% ;
  margin: auto;
`;

const Banner = () => {
  return (
    <Container>
      <Wrapper>
      <Image src="/banner.jpg" />
      </Wrapper>
    </Container>
  );
};

export default Banner;
