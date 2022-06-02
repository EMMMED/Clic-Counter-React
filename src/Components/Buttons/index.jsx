import React from "react";
import '../styles/Button.css'

function Button({ texto, isClic, clicHandler }) {
  return (
    <button
      className={isClic ? 'button-clic' : 'restart-button'}
      onClick={clicHandler} >
      {texto}
    </button>
  )
}

export default Button