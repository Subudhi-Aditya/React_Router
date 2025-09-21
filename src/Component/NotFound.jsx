import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Notfound() {
    const navigate = useNavigate()
  return (
    <div>
      <h2>404 | Page Not Found</h2>
      <br />
      <button onClick={()=>navigate("/")}>Go to Home Page</button>
    </div>
  )
}
