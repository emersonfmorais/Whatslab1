import React from 'react';
import styled from 'styled-components'
import { InputComponents } from './Components/Inputs/InputComponents';

const MainContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid black;
  height: 99vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 10px 20px darkgray;
  border-radius: 5px
  box-sizing: border-box;
`


function App() {
  return (
    <div>
     <MainContainer>
       <InputComponents/>
       </MainContainer>
    </div>
  );
}

export default App;
