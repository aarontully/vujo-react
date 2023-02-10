import { Container } from "@mui/material";
import React from 'react'

const Header = ({ characterCount, wordCount }) => {
  
  return (
    <header className="header">
      <Container>
      {characterCount !== 0 && (
        <div className="word-details">
            <div>Characters: {characterCount}</div>
            <div>Words: {wordCount}</div>
        </div>
        )}
      </Container>
    </header>
  )
}

export default Header
