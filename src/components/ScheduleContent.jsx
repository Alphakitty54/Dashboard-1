import React, { useState } from 'react';
import styled from 'styled-components';
import FormControlLabel from '@mui/material/FormControlLabel';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const Container = styled.div`
  width: 100%;

  position: relative;
  z-index: 6;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
     margin-left: 50px;
     margin-top: 20px;
     
     `;
const Subtitle = styled.h4`
     font-size: 25px;
     margin-top: 13px;

     `;
const Title = styled.h1`
    font-size: 33px;
    font-weight: 600;
    `;

const Day = styled.div`
    height: 68px;
    width: 280px;
    background-color: rgba(255, 255, 255, 1);
    margin: 9px;
    font-size: 17px;
    text-align:center;
    align-item:center;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0.5, 0.5, 0.5, 0.5);
    `;
const Right = styled.div`
    padding: 40px;
    margin-left: 180px;
    width: 100%;
    `;
const Calender= styled.div`
   background: rgba(123, 226, 195, 0.8);
   border-radius: 10px;
   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
   width: 320px;
   justify-content: center;
   height: 310px;
;
   `;
const Weekday = styled.div`
 margin-top: 9px;`;

const ScheduleContent = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [value, setValue] = useState(dayjs('2022-04-17')); 

  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Schedules</Title>
          <Subtitle>Default</Subtitle>
          <Weekday>
            <FormGroup>
              <Day>
              <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="Monday"/> 
                Unavailable
              </Day>
               <Day>
              <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="Tuesday"/> 
               Unavailable
              </Day>
               <Day>
              <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="Wednesday"/> 
                 Unavailable
              </Day>
               <Day>
              <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="Thursday"/> 
                 Unavailable
              </Day>
               <Day>
              <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="Friday"/> 
                 Unavailable
              </Day>
               <Day>
              <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="Saturday"/> 
                 Unavailable
              </Day>
               <Day>
              <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="Sunday"/> 
              Unavailable
              </Day>
             

            </FormGroup>
          </Weekday>
        </Left>
        <Right> 
          <Calender>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>

          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
      
      </DemoContainer>
    </LocalizationProvider>
          </Calender>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default ScheduleContent;
