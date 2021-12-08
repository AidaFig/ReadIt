import React from 'react'

import "./ButtonStyle.css";

export const Button = ({ children }) => {
    return (
      <button className="botao">{children}</button>
    )
  }
