import react from 'react';
import styled from 'styled-components';
const Container = styled.div`
  width: 800px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 6;
  background-color:blue;
`;

const Wrapper = styled.div`

`;
const Title = styled.h2``;

const Option = styled.div`

`;
const Steps = styled.div`
align-items: center;
width: 40px;
height: 20px;
background: teal;
`;
const Art = styled.div`
 width: 800px;
 height: 200px;
 
 `;
const Button = styled.button`
  width: 50px;
  height: 30px;
  align-items: center;
  /* Add any other styles you need for your button */
`;


const ServiceContent = () => {
  return (<Container>
    <Wrapper>
      <Title>Service</Title>
      <Option>
        <Steps>chenni kam</Steps>
        <Steps>fjfnlj</Steps>
        <Steps>frf</Steps>
        <Steps>efwef</Steps>
      </Option>
      <Art></Art>
      <Button>Click Me</Button>
    </Wrapper>
  </Container>)
};



export default ServiceContent;
