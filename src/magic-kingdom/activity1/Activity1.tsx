import React,{useState} from 'react';
import styled from "styled-components";
import image from './boat.png'

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .border{
	border:5px solid red;
  }
`;



function Activity1() {

const [riding,setRiding]=useState(true);

  return (
    <Styles>
      <div className="container">
       
      </div>
	  
	  {riding
	  ?
		<img src={image} alt="Boat" className="border"  />
	  :
	  <img src={image} alt="Boat" />
	  }
    </Styles>
  )
  
  
}




export default Activity1