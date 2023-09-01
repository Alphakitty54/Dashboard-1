import react  from "react";
import styled from "styled-components";
const Container = styled.div`
   width: 250px;
   height: 600px;
   border-right: 1px solid black;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1); 
  position: relative; /* Add relative positioning */
  z-index: 6; 
 
   margin-bottom: 70px;
   `;
const Wrapper = styled.div`
   width: 230px;
   height: 510px;
   padding-left: 10px;
   
   
   `;
const Top = styled.div`
   width: 230px;
   height: 270px;

   border-bottom: 1px solid rgba(0, 0, 0, 1);
   
   `;

const Name = styled.div`
    display: flex;
    margin-bottom: 25px;
  
    
`;
const Photo = styled.img`
  height: 60px;
  width: 60px;
  
  `;
const Name1 = styled.h4`
   margin-top: 20px;
   margin-left: 9px;
   font-size: 20px;
  `;
const Home = styled.div`

   margin-bottom: 30px;
   display: flex;
   cursor: pointer;
   `;
const Home1 = styled.img`
    height: 15px;
    width: 15px;
    margin-right: 16px;
    margin-top:3px;
    `;
const Title = styled.h4`
    font-size: 17px;
    
    `;

const Booking = styled.div`
  
  margin-bottom: 30px;
   display: flex;`;
const Queries = styled.div`

   margin-bottom: 30px;
   display: flex; 
   `;
const Options = styled.div`
   margin-left: 25px;
   width: 210px;
   margin-top: 20px;   
   `;
const Tophalf = styled.div`
   margin-top: 40px;`;
const Schedule = styled.div`
  display: flex;
   margin-bottom: 30px; 
   cursor: pointer;
  
`;
const Service = styled.div`
  display: flex;
  margin-bottom: 30px; 
  cursor:pointer;
`;

const Middle = styled.div`
   width: 230px;
   height: 90px;
   
   border-bottom: 1px solid rgba(0, 0, 0, 1);
   
  
   `;

const Bottom = styled.div`
   width: 230px;
   height: 120px;
   `;
const Profile = styled.div`
     display: flex;
     margin-bottom: 30px;
   `;
const Invite = styled.div`
    display: flex;
   margin-bottom: 30px;`;
const Reward = styled.div`
display: flex;
   margin-bottom: 30px;`;
const Logout = styled.div`
    display: flex;
   margin-bottom: 30px;`;

function Menubar({ onTabChange, activeTab }) {

  const handleTabClick = (tab) => {

    onTabChange(tab);
  };
  

  return (
    <Container>
      <Wrapper>
        <Top>
          <Options>
            <Name>
              <Photo src="Ellipse 7.png" />
              <Name1>Neha Bhat</Name1>
            </Name>
            <Tophalf>
              <Home>
                <Home1 src="home.png" />
                <Title>Home</Title>
              </Home>
              <Booking>
                <Home1 src="phone.png" />
                <Title> Booking</Title>
              </Booking>
              <Queries>
                <Home1 src="message.png" />
                <Title>Queries</Title>
              </Queries>
            </Tophalf>
          </Options>
        </Top>
        <Middle>
          <Options>
            <Schedule onClick={() => handleTabClick("schedule")}>
              <Home1 src="b.png" />
              <Title>Schedule</Title>
            </Schedule>

            <Service onClick={() => handleTabClick("service")}>
              <Home1 src="a.png" />
              <Title>Service</Title>
            </Service>
          </Options>
        </Middle>
        <Bottom>
          <Options>
            <Profile>
              <Home1 src="c.png" />
              <Title>Profile</Title>
            </Profile>
            <Invite>
              <Home1 src="d.png" />
              <Title>Invite & Earn</Title>
            </Invite>
            <Reward>
              <Home1 src="e.png" />
              <Title>Rewards</Title>
            </Reward>
            <Logout>
              <Home1 src="f.png" />
              <Title>Logout</Title>
            </Logout>
          </Options>
        </Bottom>

      </Wrapper>

    </Container>

  )
}

export default Menubar;
