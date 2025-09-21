import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

export default function Error() {
    const routeError = useRouteError();
    const navigate = useNavigate();
  return (
    <div>
      <h3>An error occured.</h3>
        <p>{routeError.message}</p>
        <button onClick={()=> navigate("/")}>Go to HomePage</button>
    </div>
  )
}
