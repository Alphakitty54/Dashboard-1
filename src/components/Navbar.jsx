import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(255, 255, 255, 1);
  height: 90px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1); /* Add box-shadow here */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Filter = styled.h4`
  font-size: 20px; 
  font-weight: 600;
  text-align: left;
  margin: 0px;
  cursor:pointer;
`;

const Aboutus = styled.h4`
  font-size: 20px; 
  font-weight: 600;
  margin: 0px;
  cursor: pointer;
`;

const Blog = styled.h4`
  font-size: 20px; 
  font-weight: 600;
  margin: 0px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 5;
  text-align: left;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: left-end; 
  gap: 90px; /* Reduced the gap for better spacing */
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.div`
  margin-right: px;
  
`;

const Image = styled.img`
  height: 60px;
  width: 150px;
  padding-left: 0px;
  padding-top: 5px;
  cursor: pointer;
`;

const VectorImage = styled.img`
  /* Define the styling for your vector image here */
  height: 6px;
 
`;

const Notification = styled.div`
  /* Add styling for the notification component here */
  margin-right: 70px;
`;

const Notify = styled.img`
  cursor: pointer;
  height: 26px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Image src="Logo.png" alt="Logo" />
          </Logo>
        </Left>
        <Center>
          <Filter>
            Filters
            <VectorImage src="h.png" />
          </Filter>
          <Aboutus>About Us</Aboutus>
          <Blog>Blog</Blog>
        </Center>
        <Right>
          <Notification>
            <Notify src="Vector (1).png" alt="Notify" />
          </Notification>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
