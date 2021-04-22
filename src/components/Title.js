import React from 'react';

const Title = (props) => {
  const {handleLogOut}=props

  const darkMode=()=>{
    let element=document.body
    element.classList.toggle("dark-mode")
  }

  return (
    <div className="title">
      <h1>FotoGram</h1>
      <button className="dark-mode" onClick={darkMode}>Switch Mode</button>
      <button onClick={handleLogOut}>Logout</button>
      <h2>Your Wall</h2>
      <p>Post your favourite moments here,cheers!</p>
    </div>
  )
}

export default Title;