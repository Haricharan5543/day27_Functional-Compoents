import React from 'react'

function Players(props) {
  return (
    
    <div className="playerDiv">
      <img src={props.Images} alt=''></img>
      <h2>Name: {props.Name} </h2>
      <h3>Team: {props.Team} </h3>
      <h3>Role: {props.Role} </h3>
      </div>
      
    
  )
}

export default Players
