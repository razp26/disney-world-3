import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import lottawattaLodge from "../images/Lottawatta-Lodge.jpg"

const Styles = styled.div`
  .flex-row-activity2 {
    display: flex;
    align-content: center;
    flex-direction: row;
  }
  
  .map-container {
    position: relative;
    height: 850px;
  }
  
  .map {
    position: relative;
    /* height: 100%; */
    pointer-events: none;
    width: 60%;
    height: 850px;
  }
  
  .productTable {
    position: relative;
    z-index: 2;
    /* background: rgb(23 60 103); */
    color: black;
    font-size: 12px;
    border-color: black;
    border-radius: 2px;
  
  }
  
  .tablePosition {
    left: 1160px;
    top: -820px;
  }
  
  tbody {
    box-shadow: 0 0 0 2px black;
    border-radius: 10px;
  }
  
  table tbody td {
    border: 1px solid black;
    text-align: center;
  }
  
  table tbody tr:first-child td {
    border-top: none;
    border-right: none;
  }
  
  table tbody tr:last-child td {
    border-bottom: none;
    border-right: none;
  }
  
  table tbody tr td:first-child {
    border-left: none;
  }
  
  .descriptionColumn {
    width: 400px;
  
  }
`;

function Activity2() {
  const [menuArray, setData] = useState([]);

  function buyAction(item){    
    // var currentItem = menuArray.filter(x=> x.id === item.id)[0];
    // currentItem.quantity = currentItem.quantity -1;
    // setData(menuArray);


    let updatedMenu = menuArray.map((menuItem) => {
      if (menuItem.id === item.id) {
          return { ...menuItem, quantity: item.quantity - 1 }
      }
      
      return menuItem
  })
  
  setData(updatedMenu)


  }

  useEffect(() => {
    fetch('http://localhost:5000/lottawatta_lodge')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
  })



},[])

  return (
    <Styles>
      <div className=".flex-row-activity2">
        <div className="map-container">
          <img src={lottawattaLodge} className="map"/>
          <table className='productTable tablePosition'>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Description</th>
                <th>For</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {menuArray.map(item => {
                return (
                  <tr key={item.id}>
                    <td>
                    { item.quantity > 0 ? <input type='button' value='BUY' onClick={() => buyAction(item)}/> : <span>Sold out</span> }
                      </td>
                    <td>{ item.name }</td>
                    <td className='descriptionColumn'>{ item.description }</td>
                    <td>{ item.type }</td>
                    <td>{ item.quantity }</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          
          </div>

      </div>
    </Styles>
  )
}

export default Activity2