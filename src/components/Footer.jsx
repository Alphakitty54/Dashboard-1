import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 260px;
  width: 100%;
  background-color: rgba(61, 113, 150, 1);
`;

const Wrapper = styled.div`
  display: flex;
`;

const Options = styled.div`
  
`;

const Image1 = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 2px;
`;

const Left = styled.div`
  width: 200px;
  height: 80px;
  margin-top: 60px;
  margin-left: 110px;
`;

const Images = styled.div`
  display: flex;
  flex: 4;
  
  img {
    width: 30px;
    height: 30px;
    margin: 10px;
  }
`;

const Text = styled.p`
  color: rgba(245, 245, 245, 1);
  font-size: 14px;
`;

const Bottom = styled.div`
  display: flex;
  margin-top: 130px;
  margin-right: 20px;
  width: 300px;
`;

const Right = styled.div`
  display: flex;
  align-items: right; /* Fix the typo here */
  margin-left: 500px;
  margin-top: 64px;
 
`;

const One = styled.div`
margin-left:0;

li{
  margin-bottom: 25px;
  color: rgba(245, 245, 245, 1);
  font-weight:500;
  font-size: 15px;

}
`;
const Two = styled.div`
 margin-left: 80px;
li{
  margin-bottom: 25px;
  color: rgba(245, 245, 245, 1);
  font-weight:500;
  font-size: 15px;

}
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Options>
          <Left>
            <Images>
              <img src="link.png" alt="LinkedIn" />
              <img src="inst.png" alt="Instagram" />
              <img src="twitter.png" alt="Twitter" />
              <img src="facebook.png" alt="Facebook" />
            </Images>
            <Bottom>
              <Image1 src="ca.png" alt="CA" />
              <Text>2023 <u>Mentorship.</u> All Rights Reserved</Text>
            </Bottom>
          </Left>
        </Options>
        <Right>
          <One>
            <ul style={{ listStyleType: 'none' }}>
              <li><u>Contact us</u></li>
              <li><u>Privacy policy</u></li>
              <li><u>Terms of use</u></li>
            </ul>
          </One>
          <Two>
            <ul style={{ listStyleType: 'none' }}>
              <li>Help center</li>
              <li>About us</li>
              <li>FAQs</li>
            </ul>
          </Two>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
