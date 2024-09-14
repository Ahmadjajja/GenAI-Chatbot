import React from 'react'

import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/contact")

  }


  return (
    <div>
      <h1>Home ...</h1>
      <button onClick={handleClick}>Move to the contact page</button>
    </div>
  )
}

export default Home
