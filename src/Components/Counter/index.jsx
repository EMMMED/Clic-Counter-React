import React from "react";
import '../styles/Counter.css'

function Counter({numClic}){
  return (
    <div className="counter">
      {numClic}
    </div>
  )
}

export default Counter