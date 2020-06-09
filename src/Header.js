import React from "react";

const stylesHeader = {
  padding: '15px 0',
  background: '#fff'
}

export const Header = () => (
    <header style={stylesHeader}>
      <div className="container">
        <a style={{
          fontFamily: 'Circe',
          fontWeight: '700',
          color: '#292929',
          textTransform: 'uppercase'
        }} href="/">Madappgang</a>
      </div>
    </header>
)
